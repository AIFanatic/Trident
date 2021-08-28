import { Material, MeshBasicMaterial } from "three";

export class MeshRendererDefaults {
    static DefaultMaterial(): Material {
        return new MeshBasicMaterial( { color: 0x00ff00 } );

    }
}