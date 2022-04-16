import { CylinderGeometry } from "three";
import { CapsuleCollider, GameObject, MeshFilter, MeshRenderer } from "../components";

export class Cylinder {
    public static Create(gameObject: GameObject) {
        const geometry = new CylinderGeometry(0.5, 0.5, 2, 16, 1);
        geometry.rotateZ(Math.PI / 2);

        const meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer);
        const colllider = gameObject.AddComponent(CapsuleCollider);
    }
}