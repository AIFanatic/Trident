import { Mesh, PlaneGeometry } from "three";
import { MeshFilter, MeshRenderer, PlaneCollider } from ".";
import { Component } from "./Component";

/**
 * A plane primitive, it consists of a MeshFilter, MeshRenderer and PlaneCollider.
 * 
 * @noInheritDoc
 */
export class Plane extends Component {
    public OnEnable() {
        const geometry = new PlaneGeometry(
            this.transform.localScale.x,
            this.transform.localScale.z,
        );

        geometry.rotateX(-Math.PI/2);

        const meshFilter = this.gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;

        const meshRenderer = this.gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = this.gameObject.AddComponent(PlaneCollider) as PlaneCollider;
    }
}