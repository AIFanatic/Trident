import { BoxGeometry, Mesh } from "three";
import { BoxCollider, MeshFilter, MeshRenderer } from ".";
import { Component } from "./Component";

/**
 * A cube primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
 * 
 * @noInheritDoc
 */
export class Cube extends Component {
    public OnEnable() {
        const geometry = new BoxGeometry(
            this.transform.localScale.x,
            this.transform.localScale.y,
            this.transform.localScale.z
        );

        const meshFilter = this.gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = this.gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = this.gameObject.AddComponent(BoxCollider) as BoxCollider;
    }
}