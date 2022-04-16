import { BufferGeometry, Material } from "three";
export declare class Resources {
    private static LoadMeshAsync;
    private static LoadMaterialAsync;
    static LoadAsync(path: string): Promise<BufferGeometry | Material>;
}
