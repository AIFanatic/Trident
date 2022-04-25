import { CapsuleCollider, MeshFilter, MeshRenderer } from "../components";
import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";
export class Capsule {
    static Create(gameObject) {
        const geometry = CapsuleBufferGeometry(0.5, 0.5, 1, 16, 1, 8, 8, 0, 2 * Math.PI);
        geometry.rotateZ(Math.PI / 2);
        const meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        const meshRenderer = gameObject.AddComponent(MeshRenderer);
        const colllider = gameObject.AddComponent(CapsuleCollider);
    }
}
//# sourceMappingURL=Capsule.js.map