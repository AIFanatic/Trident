import { Component } from "./Component";

import { BufferGeometry, Geometry } from "three";
import { SerializeField } from "../utils/SerializeField";

/**
 * Stores a geometry that later can be rendered to the scene.
 * 
 * @noInheritDoc
 */
export class MeshFilter extends Component {
    public _mesh: Geometry | BufferGeometry;
    
    @SerializeField
    public get mesh(): Geometry | BufferGeometry {
        return this._mesh;
    }

    public set mesh(mesh: Geometry | BufferGeometry) {
        this._mesh = mesh;

        this.gameObject.BroadcastMessage("MeshFilterModelChanged", this._mesh);
    }

    public Destroy() {
        if (this.mesh) {
            this.mesh.dispose();
        }
        this.gameObject.RemoveComponent(this);
    }
}