import { Component } from "./Component";
import { BufferGeometry, Geometry } from "three";
/**
 * Stores a geometry that later can be rendered to the scene.
 *
 * @noInheritDoc
 */
export declare class MeshFilter extends Component {
    _mesh: Geometry | BufferGeometry;
    get mesh(): Geometry | BufferGeometry;
    set mesh(mesh: Geometry | BufferGeometry);
    Destroy(): void;
}
