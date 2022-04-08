import { BoxGeometry } from "three";
import { BoxCollider, GameObject, MeshFilter, MeshRenderer } from "../components";

export class Cube {
    public static Create(gameObject: GameObject) {
        const geometry = new BoxGeometry(
            gameObject.transform.localScale.x,
            gameObject.transform.localScale.y,
            gameObject.transform.localScale.z
        );

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(BoxCollider) as BoxCollider;
    }
}