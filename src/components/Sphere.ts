import { Mesh, SphereGeometry } from "three";
import { MeshFilter, MeshRenderer, SphereCollider } from ".";
import { Component } from "./Component";

/**
 * A sphere primitive, it consists of a MeshFilter, MeshRenderer and SphereCollider.
 * 
 * @noInheritDoc
 */
export class Sphere extends Component {
    public OnEnable() {
        const geometry = new SphereGeometry(this.transform.localScale.length(), 32, 32 );

        const meshFilter = this.gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = this.gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = this.gameObject.AddComponent(SphereCollider) as SphereCollider;
    }
}