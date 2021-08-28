import { MeshFilter, MeshRenderer } from ".";
import { Component } from "./Component";

import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";
import { CapsuleCollider } from "./CapsuleCollider";
import { MeshBasicMaterial } from "three";

export class Capsule extends Component {
    public OnEnable() {
        const geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 4, 4, 0, 2*Math.PI);
        geometry.rotateZ(Math.PI / 2);

        const meshFilter = this.gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = this.gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = this.gameObject.AddComponent(CapsuleCollider) as CapsuleCollider;
    }
}