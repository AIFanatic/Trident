import { BufferGeometry, Material, MaterialLoader, Mesh } from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Scene } from "../Scene";
import { Component } from "../components/Component";
import { FileType, IFile } from "../interfaces/IFile";
import { ResourcesCache, ResourcesCacheEntry } from "./ResourcesCache";
import { ISceneSerialized } from "../serializer/ISceneSerialized";
import { SceneDeserializer } from "..";

export enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ",
    COMPONENT = "JS",
    SCENE = "SCENE",
};

export class Resources {

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
            loader.load(
                path,
                // onLoad callback
                ( material: Material ) => {
                    const userData: IFile = {
                        type: FileType.MATERIAL,
                        fileId: fileId
                    };
                    material.userData = userData;
                    resolve(material);
                },
                // onProgress callback
                ( xhr ) => {
                },
                // onError callback
                ( err ) => {
                    reject(err);
                }
            );
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
            fetch(path)
                .then(response => response.json())
                .then((sceneSerialized) => {
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
                .catch(error => {
                    reject(error);
                });
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
    }
}