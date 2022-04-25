import { PlaneGeometry } from "three";
import { MeshFilter, MeshRenderer, PlaneCollider } from "../components";
export class Plane {
    static Create(gameObject) {
        const geometry = new PlaneGeometry(1, 1);
        geometry.rotateX(-Math.PI / 2);
        const meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        const meshRenderer = gameObject.AddComponent(MeshRenderer);
        const colllider = gameObject.AddComponent(PlaneCollider);
    }
}
//# sourceMappingURL=Plane.js.map