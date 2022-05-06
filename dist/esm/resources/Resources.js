import { MaterialLoader, Mesh, RepeatWrapping, Texture, TextureLoader } from "three";
import { FileType } from "../interfaces/IFile";
import { ResourcesCache } from "./ResourcesCache";
import { SceneDeserializer } from "..";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
export var ResourceExtensions;
(function (ResourceExtensions) {
    ResourceExtensions["MATERIAL"] = "MAT";
    ResourceExtensions["MESH_OBJ"] = "OBJ";
    ResourceExtensions["COMPONENT"] = "JS";
    ResourceExtensions["SCENE"] = "SCENE";
    ResourceExtensions["TEXTURE_HDR"] = "HDR";
    ResourceExtensions["TEXTURE_TGA"] = "TGA";
    ResourceExtensions["TEXTURE_JPG"] = "JPG";
    ResourceExtensions["TEXTURE_BMP"] = "BMP";
    ResourceExtensions["TEXTURE_PNG"] = "PNG";
})(ResourceExtensions || (ResourceExtensions = {}));
;
export class Resources {
    static LoadFile(path) {
        return new Promise((resolve, reject) => {
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
        });
    }
    static LoadMeshAsync(path, type, fileId) {
        if (type == ResourceExtensions.MESH_OBJ) {
            const loader = new OBJLoader();
            const promise = new Promise((resolve, reject) => {
                loader.load(path, 
                // onLoad callback
                (group) => {
                    if (group.children.length > 0) {
                        const mesh = group.children[0];
                        if (mesh instanceof Mesh) {
                            const geometryFile = mesh.geometry;
                            const userData = {
                                type: FileType.MESH,
                                fileId: fileId
                            };
                            geometryFile.userData = userData;
                            resolve(geometryFile);
                        }
                    }
                }, 
                // onProgress callback
                (xhr) => {
                }, 
                // onError callback
                (err) => {
                    reject(err);
                });
            });
            ResourcesCache.set(fileId, promise);
            return promise;
        }
    }
    static LoadMaterialAsync(path, fileId) {
        const loader = new MaterialLoader();
        const promise = new Promise((resolve, reject) => {
            this.LoadFile(path).then(async (blob) => {
                const text = await blob.text();
                const json = JSON.parse(text);
                const material = loader.parse(json);
                const userData = {
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
                        });
                        promises.push(promise);
                    }
                }
                Promise.all(promises).then(() => {
                    material.needsUpdate = true;
                    resolve(material);
                });
            });
        });
        ResourcesCache.set(fileId, promise);
        return promise;
    }
    static LoadComponentAsync(path, fileId) {
        const promise = new Promise((resolve, reject) => {
            import(path).then(component => {
                const componentKeys = Object.keys(component);
                if (componentKeys.length > 0) {
                    const key = componentKeys[0];
                    const userData = {
                        type: FileType.COMPONENT,
                        fileId: fileId
                    };
                    component[key].prototype.userData = userData;
                    resolve(component[key]);
                }
            });
        });
        ResourcesCache.set(fileId, promise);
        return promise;
    }
    static LoadSceneAsync(path, fileId) {
        const promise = new Promise((resolve, reject) => {
            this.LoadFile(path).then(async (blob) => {
                const text = await blob.text();
                const sceneSerialized = JSON.parse(text);
                SceneDeserializer.Deserialize(sceneSerialized)
                    .then(scene => {
                    const userData = {
                        type: FileType.COMPONENT,
                        fileId: fileId
                    };
                    scene.userData = userData;
                    resolve(scene);
                });
            });
        });
        ResourcesCache.set(fileId, promise);
        return promise;
    }
    static LoadTextureAsync(path, fileId, type) {
        const promise = new Promise((resolve, reject) => {
            const userData = {
                type: FileType.TEXTURE,
                fileId: fileId
            };
            if (type == ResourceExtensions.TEXTURE_HDR) {
                const loader = new RGBELoader();
                loader.load(path, (hdrTexture) => {
                    hdrTexture["userData"] = userData;
                    resolve(hdrTexture);
                });
            }
            else if (type == ResourceExtensions.TEXTURE_TGA) {
                const loader = new TGALoader();
                loader.load(path, (texture) => {
                    texture["userData"] = userData;
                    resolve(texture);
                });
            }
            else if (type == ResourceExtensions.TEXTURE_BMP ||
                type == ResourceExtensions.TEXTURE_JPG ||
                type == ResourceExtensions.TEXTURE_PNG) {
                const loader = new TextureLoader();
                loader.load(path, (texture) => {
                    texture["userData"] = userData;
                    resolve(texture);
                });
            }
        });
        ResourcesCache.set(fileId, promise);
        return promise;
    }
    static async LoadAsync(path) {
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
//# sourceMappingURL=Resources.js.map