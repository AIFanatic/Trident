import { Component } from "./Component";
import { BufferGeometry, Geometry } from "three";
export declare class MeshFilter extends Component {
    _mesh: Geometry | BufferGeometry;
    OnEnable(): void;
    get mesh(): Geometry | BufferGeometry;
    set mesh(mesh: Geometry | BufferGeometry);
    Destroy(): void;
}
