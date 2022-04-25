import { BufferGeometry, Material } from "three";
import { Component } from "../components/Component";
export declare enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ",
    COMPONENT = "JS"
}
export declare class Resources {
    static LoadMeshAsync(path: string, type: ResourceExtensions, fileId: string): Promise<BufferGeometry>;
    static LoadMaterialAsync(path: string, fileId: string): Promise<Material>;
    static LoadComponentAsync(path: string, fileId: string): Promise<Component>;
    static LoadAsync(path: string): Promise<BufferGeometry | Material | Component>;
}
