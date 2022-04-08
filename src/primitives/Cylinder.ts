import { CylinderGeometry } from "three";
import { CapsuleCollider, GameObject, MeshFilter, MeshRenderer } from "../components";

export class Cylinder {
    public static Create(gameObject: GameObject) {
        const geometry = new CylinderGeometry(
            gameObject.transform.localScale.length(), 
            gameObject.transform.localScale.length(),
            gameObject.transform.localScale.y, 32, 32);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(CapsuleCollider) as CapsuleCollider;
    }
}