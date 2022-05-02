import { MaterialLoader, Mesh } from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FileType } from "../interfaces/IFile";
import { ResourcesCache } from "./ResourcesCache";
import { SceneDeserializer } from "..";
export var ResourceExtensions;
(function (ResourceExtensions) {
    ResourceExtensions["MATERIAL"] = "MAT";
    ResourceExtensions["MESH_OBJ"] = "OBJ";
    ResourceExtensions["COMPONENT"] = "JS";
    ResourceExtensions["SCENE"] = "SCENE";
})(ResourceExtensions || (ResourceExtensions = {}));
;
export class Resources {
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
            loader.load(path, 
            // onLoad callback
            (material) => {
                const userData = {
                    type: FileType.MATERIAL,
                    fileId: fileId
                };
                material.userData = userData;
                resolve(material);
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
            fetch(path)
                .then(response => response.json())
                .then((sceneSerialized) => {
                SceneDeserializer.Deserialize(sceneSerialized)
                    .then(scene => {
                    const userData = {
                        type: FileType.COMPONENT,
                        fileId: fileId
                    };
                    scene.userData = userData;
                    resolve(scene);
                });
            })
                .catch(error => {
                reject(error);
            });
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
    }
}
//# sourceMappingURL=Resources.js.map