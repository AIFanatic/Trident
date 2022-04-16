import { BufferGeometry, Material, MaterialLoader, Matrix3, Mesh } from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

type ResourcesCacheEntry = Promise<BufferGeometry | Material>;

class ResourcesCache {
    private cache: Map<string, ResourcesCacheEntry>;

    constructor() {
        this.cache = new Map();
    }
    
    public get(name: string): ResourcesCacheEntry {
        // console.log("get", name)
        return this.cache.get(name);
    }

    public set(name: string, value: ResourcesCacheEntry) {
        console.log("set", name)
        this.cache.set(name, value);
    }

    public has(name: string): boolean {
        return this.cache.has(name);
    }

    public remove(name: string) {
        this.cache.delete(name);
    }

    public size(): number {
        return this.cache.size
    }

    public clear() {
        this.cache.clear();
    }
}

const FilesCache = new ResourcesCache();
// console.warn(`[FilesCache] Removal of files not implemented, deque?`);
// console.warn("[ArticulationBody] Articulation needs to be rethough of, maybe separate into multiple individual components (REVOLUTE, PRISMATIC, SPHERICAL");

enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ"
};

export class Resources {

    private static LoadMeshAsync(path: string, type: ResourceExtensions): Promise<BufferGeometry> {
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
                                resolve(mesh.geometry);
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

            FilesCache.set(path, promise);
            return promise;
        }
    }

    private static LoadMaterialAsync(path: string): Promise<Material> {
        const loader = new MaterialLoader();
        const promise = new Promise<Material>((resolve, reject) => {
            loader.load(
                path,
                // onLoad callback
                ( material ) => {
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

        FilesCache.set(path, promise);

        return promise;
    }

    public static async LoadAsync(path: string): Promise<BufferGeometry | Material> {
        if (FilesCache.has(path)) {
            return FilesCache.get(path);
        }

        const extension = path.substr(path.lastIndexOf('.') + 1).toUpperCase();

        if (extension == ResourceExtensions.MATERIAL) {
            return Resources.LoadMaterialAsync(path);
        }
        else if (extension == ResourceExtensions.MESH_OBJ) {
            return Resources.LoadMeshAsync(path, ResourceExtensions.MESH_OBJ);
        }
    }
}

// const l = Resources.LoadAsync("Cube.fbx", ResourceExtensions.MATERIAL)
// l.then(val => {
    
// })