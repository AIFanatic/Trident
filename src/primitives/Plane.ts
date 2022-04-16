import { PlaneGeometry } from "three";
import { GameObject, MeshFilter, MeshRenderer, PlaneCollider } from "../components";

export class Plane {
    public static Create(gameObject: GameObject) {
        const geometry = new PlaneGeometry(1, 1);

        geometry.rotateX(-Math.PI/2);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;

        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(PlaneCollider) as PlaneCollider;
    }
}