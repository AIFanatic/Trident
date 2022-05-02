import { BoxGeometry } from "three";
import { BoxCollider, MeshFilter, MeshRenderer } from "../components";
export class Cube {
    static Create(gameObject) {
        const geometry = new BoxGeometry(1, 1, 1);
        const meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        const meshRenderer = gameObject.AddComponent(MeshRenderer);
        const colllider = gameObject.AddComponent(BoxCollider);
    }
}
//# sourceMappingURL=Cube.js.map