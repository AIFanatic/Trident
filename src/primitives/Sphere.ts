import { SphereGeometry } from "three";
import { GameObject, MeshFilter, MeshRenderer, SphereCollider } from "../components";

export class Sphere {
    public static Create(gameObject: GameObject) {
        const geometry = new SphereGeometry(0.5, 32, 32 );

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(SphereCollider) as SphereCollider;
    }
}