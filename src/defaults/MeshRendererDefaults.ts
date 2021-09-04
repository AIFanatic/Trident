import { Material, MeshBasicMaterial } from "three";

export class MeshRendererDefaults {
    static DefaultMaterial(): Material {
        return new MeshBasicMaterial();   
    }
}