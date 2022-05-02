import { BufferGeometry, Material } from "three";
import { Scene } from "../Scene";
import { Component } from "../components/Component";
import { ResourcesCacheEntry } from "./ResourcesCache";
export declare enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ",
    COMPONENT = "JS",
    SCENE = "SCENE"
}
export declare class Resources {
    static LoadMeshAsync(path: string, type: ResourceExtensions, fileId: string): Promise<BufferGeometry>;
    static LoadMaterialAsync(path: string, fileId: string): Promise<Material>;
    static LoadComponentAsync(path: string, fileId: string): Promise<Component>;
    static LoadSceneAsync(path: string, fileId: string): Promise<Scene>;
    static LoadAsync(path: string): Promise<ResourcesCacheEntry>;
}
