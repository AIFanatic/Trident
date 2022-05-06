import { BufferGeometry, Material, Texture } from "three";
import { Scene } from "../Scene";
import { Component } from "../components/Component";
import { ResourcesCacheEntry } from "./ResourcesCache";
export declare enum ResourceExtensions {
    MATERIAL = "MAT",
    MESH_OBJ = "OBJ",
    COMPONENT = "JS",
    SCENE = "SCENE",
    TEXTURE_HDR = "HDR",
    TEXTURE_TGA = "TGA",
    TEXTURE_JPG = "JPG",
    TEXTURE_BMP = "BMP",
    TEXTURE_PNG = "PNG"
}
export declare class Resources {
    static LoadFile(path: any): Promise<Blob>;
    static LoadMeshAsync(path: string, type: ResourceExtensions, fileId: string): Promise<BufferGeometry>;
    static LoadMaterialAsync(path: string, fileId: string): Promise<Material>;
    static LoadComponentAsync(path: string, fileId: string): Promise<Component>;
    static LoadSceneAsync(path: string, fileId: string): Promise<Scene>;
    static LoadTextureAsync(path: string, fileId: string, type: ResourceExtensions): Promise<Texture>;
    static LoadAsync(path: string): Promise<ResourcesCacheEntry>;
}
