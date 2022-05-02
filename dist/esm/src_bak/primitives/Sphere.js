import { SphereGeometry } from "three";
import { MeshFilter, MeshRenderer, SphereCollider } from "../components";
export class Sphere {
    static Create(gameObject) {
        const geometry = new SphereGeometry(0.5, 32, 32);
        const meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        const meshRenderer = gameObject.AddComponent(MeshRenderer);
        const colllider = gameObject.AddComponent(SphereCollider);
    }
}
//# sourceMappingURL=Sphere.js.map