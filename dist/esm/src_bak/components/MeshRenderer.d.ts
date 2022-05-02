import { Component } from "./Component";
import { BufferGeometry, Geometry, Material, Mesh, MeshStandardMaterial } from "three";
import { GameObject, Transform } from ".";
export declare const DefaultMaterial: MeshStandardMaterial;
/**
 * Renders a geometry from MeshFilter into the scene.
 *
 * @noInheritDoc
 */
export declare class MeshRenderer extends Component {
    private renderer;
    private _material;
    private _mesh;
    get mesh(): Mesh;
    set mesh(mesh: Mesh);
    get material(): Material;
    set material(material: Material);
    get castShadows(): boolean;
    set castShadows(castShadows: boolean);
    get receiveShadows(): boolean;
    set receiveShadows(receiveShadows: boolean);
    constructor(gameObject: GameObject, transform: Transform);
    MeshFilterModelChanged(mesh: Geometry | BufferGeometry): void;
    private RemoveMesh;
    private AddMeshFromMeshFilter;
    private AddMeshToViewer;
    private GetMeshFromMeshFilter;
    Destroy(): void;
}