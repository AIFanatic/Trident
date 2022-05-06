import { BufferGeometry, ImageLoader, Material, MaterialLoader, Mesh, MeshStandardMaterial, RepeatWrapping, Texture, TextureLoader } from "three";
import { Scene } from "../Scene";
import { Component } from "../components/Component";
import { FileType, IFile } from "../interfaces/IFile";
import { ResourcesCache, ResourcesCacheEntry } from "./ResourcesCache";
import { SceneDeserializer } from "..";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';

export enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ",
    COMPONENT = "JS",
    SCENE = "SCENE",
    TEXTURE_HDR = "HDR",
    TEXTURE_TGA = "TGA",
    TEXTURE_JPG = "JPG",
    TEXTURE_BMP = "BMP",
    TEXTURE_PNG = "PNG",
};

export class Resources {

    public static LoadFile(path): Promise<Blob> {
        return new Promise<Blob>((resolve, reject) => {
            fetch(path)
            .then(response => {
                if (!response.ok) {
                    reject(new Error('Network response was not OK'));
                }
                return response.blob();
            })
            .then(blob => {
                resolve(blob);
            })
            .catch(error => {
                reject(error);
            });
        })
    }

    public static LoadMeshAsync(path: string, type: ResourceExtensions, fileId: string): Promise<BufferGeometry> {
        if (type == ResourceExtensions.MESH_OBJ) {
            const loader = new OBJLoader();
            const promise = new Promise<BufferGeometry>((resolve, reject) => {
                loader.load(
                    path,
                    // onLoad callback
                    ( group ) => {
                        if (group.children.length > 0) {
                            const mesh = group.children[0];
                            if (mesh instanceof Mesh) {
                                const geometryFile: BufferGeometry = mesh.geometry;
                                const userData: IFile = {
                                    type: FileType.MESH,
                                    fileId: fileId
                                }
                                geometryFile.userData = userData;
                                resolve(geometryFile);
                            }
                        }
                    },
                    // onProgress callback
                    ( xhr ) => {
                    },
                    // onError callback
                    ( err ) => {
                        reject(err);
                    }
                );
            });

            ResourcesCache.set(fileId, promise);
            return promise;
        }
    }

    public static LoadMaterialAsync(path: string, fileId: string): Promise<Material> {
        const loader = new MaterialLoader();
        const promise = new Promise<Material>((resolve, reject) => {
            this.LoadFile(path).then(async blob => {
                const text = await blob.text();
                const json = JSON.parse(text);
                const material = loader.parse(json) as MeshStandardMaterial;

                const userData: IFile = {
                    type: FileType.MATERIAL,
                    fileId: fileId
                };
                material.userData = userData;

                /**
                 * albedo -> map
                 * metallic -> metalnessMap
                 * normal map -> normalMap
                 * height map -> bumpMap?
                 * occlusion -> aoMap
                 * detail mask -> displacementMap?
                 * emissive -> emissiveMap
                 */
                let promises = [];
                // if (json.map) {
                //     const promise = this.LoadAsync(json.map.fileId).then(texture => {
                //         if (texture instanceof Texture) {
                //             texture.wrapS = RepeatWrapping;
                //             texture.wrapT = RepeatWrapping;
                //             material.map = texture;
                //         }
                //     })
                //     promises.push(promise)
                // }

                const maps = ["map", "metalnessMap", "normalMap", "bumpMap", "aoMap", "emissiveMap"];

                for (let map of maps) {
                    if (json[map]) {
                        const promise = this.LoadAsync(json[map].fileId).then(texture => {
                            if (texture instanceof Texture) {
                                texture.wrapS = RepeatWrapping;
                                texture.wrapT = RepeatWrapping;
                                material[map] = texture;
                            }
                        })
                        promises.push(promise)
                    }
                }

                Promise.all(promises).then(() => {
                    material.needsUpdate = true;
                    resolve(material);
                })
            })
        })

        ResourcesCache.set(fileId, promise);

        return promise;
    }

    public static LoadComponentAsync(path: string, fileId: string): Promise<Component> {
        const promise = new Promise<Component>((resolve, reject) => {
            import(path).then(component => {
                const componentKeys = Object.keys(component);
                if (componentKeys.length > 0) {
                    const key = componentKeys[0];
                    const userData: IFile = {
                        type: FileType.COMPONENT,
                        fileId: fileId
                    };
                    component[key].prototype.userData = userData;
                    resolve(component[key]);
                }
            });
        })

        ResourcesCache.set(fileId, promise);

        return promise;
    }

    public static LoadSceneAsync(path: string, fileId: string) {
        const promise = new Promise<Scene>((resolve, reject) => {
            this.LoadFile(path).then(async blob => {
                const text = await blob.text();
                const sceneSerialized = JSON.parse(text);
                SceneDeserializer.Deserialize(sceneSerialized)
                .then(scene => {
                    const userData: IFile = {
                        type: FileType.COMPONENT,
                        fileId: fileId
                    };
                    scene.userData = userData;
                    resolve(scene);
                })
            })
        });
        ResourcesCache.set(fileId, promise);
        return promise;
    }

    public static LoadTextureAsync(path: string, fileId: string, type: ResourceExtensions): Promise<Texture> {
        const promise = new Promise<Texture>((resolve, reject) => {
            const userData: IFile = {
                type: FileType.TEXTURE,
                fileId: fileId
            };

            if (type == ResourceExtensions.TEXTURE_HDR) {
                const loader = new RGBELoader();
                loader.load(path, (hdrTexture) => {
                    hdrTexture["userData"] = userData;
                    resolve(hdrTexture);
                } );
            }
            else if (type == ResourceExtensions.TEXTURE_TGA) {
                const loader = new TGALoader();
                loader.load(path, (texture) => {
                    texture["userData"] = userData;
                    resolve(texture);
                } );
            }
            else if (
                type == ResourceExtensions.TEXTURE_BMP || 
                type == ResourceExtensions.TEXTURE_JPG || 
                type == ResourceExtensions.TEXTURE_PNG) {
                
                const loader = new TextureLoader();
                loader.load(path, (texture) => {
                    texture["userData"] = userData;
                    resolve(texture);
                } );
            }
        });

        ResourcesCache.set(fileId, promise);
        return promise;
    }

    public static async LoadAsync(path: string): Promise<ResourcesCacheEntry> {
        if (ResourcesCache.has(path)) {
            return ResourcesCache.get(path);
        }

        const extension = path.substr(path.lastIndexOf('.') + 1).toUpperCase();

        if (extension == ResourceExtensions.MATERIAL) {
            return Resources.LoadMaterialAsync(path, path);
        }
        else if (extension == ResourceExtensions.MESH_OBJ) {
            return Resources.LoadMeshAsync(path, ResourceExtensions.MESH_OBJ, path);
        }
        else if (extension == ResourceExtensions.COMPONENT) {
            return Resources.LoadComponentAsync(path, path);
        }
        else if (extension == ResourceExtensions.SCENE) {
            return Resources.LoadSceneAsync(path, path);
        }
        else if (extension == ResourceExtensions.TEXTURE_HDR) {
            return Resources.LoadTextureAsync(path, path, ResourceExtensions.TEXTURE_HDR);
        }
        else if (extension == ResourceExtensions.TEXTURE_TGA) {
            return Resources.LoadTextureAsync(path, path, ResourceExtensions.TEXTURE_TGA);
        }
        else if (extension == ResourceExtensions.TEXTURE_JPG) {
            return Resources.LoadTextureAsync(path, path, ResourceExtensions.TEXTURE_JPG);
        }
        else if (extension == ResourceExtensions.TEXTURE_BMP) {
            return Resources.LoadTextureAsync(path, path, ResourceExtensions.TEXTURE_BMP);
        }
        else if (extension == ResourceExtensions.TEXTURE_PNG) {
            return Resources.LoadTextureAsync(path, path, ResourceExtensions.TEXTURE_PNG);
        }
    }
}