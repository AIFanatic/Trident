import { Component } from "./Component";

import { MeshTypes } from "../enums/MeshTypes";
import { BufferGeometry, Geometry, Mesh } from "three";

export class MeshFilter extends Component {
    public _mesh: Geometry | BufferGeometry;
    
    public OnEnable() {
    }

    public get mesh(): Geometry | BufferGeometry {
        return this._mesh;
    }

    public set mesh(mesh: Geometry | BufferGeometry) {
        this._mesh = mesh;

        this.gameObject.BroadcastMessage("MeshFilterModelChanged", this._mesh);
    }
    // public GetMesh(): Geometry {
    //     return this.mesh;
    // }

    public Destroy() {
        if (this.mesh) {
            this.mesh.dispose();
        }
    }

    // public Tick() {
    //     const position = new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
    //     const quaternion = new Quaternion(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);

    //     this.mesh.position.copy(position);
    //     this.mesh.quaternion.copy(quaternion);
    // }
}