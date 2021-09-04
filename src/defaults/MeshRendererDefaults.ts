import { Material, MeshStandardMaterial } from "three";

export class MeshRendererDefaults {
    static DefaultMaterial(): Material {
        return new MeshStandardMaterial();
    }
}