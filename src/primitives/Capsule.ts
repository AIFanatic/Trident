import { CapsuleCollider, GameObject, MeshFilter, MeshRenderer } from "../components";
import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";

export class Capsule {
    public static Create(gameObject: GameObject) {
        const geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 8, 8, 0, 2*Math.PI);
        geometry.rotateZ(Math.PI / 2);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;

        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(CapsuleCollider) as CapsuleCollider;
    }
}