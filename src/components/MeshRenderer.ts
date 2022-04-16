import { MeshFilter } from "./MeshFilter";

import { Component } from "./Component";
import { Renderer } from "../Renderer";
import { BufferGeometry, Geometry, Material, Mesh, MeshStandardMaterial } from "three";
import { SerializeField } from "../utils/SerializeField";

const DefaultMaterial = new MeshStandardMaterial();

/**
 * Renders a geometry from MeshFilter into the scene.
 * 
 * @noInheritDoc
 */
export class MeshRenderer extends Component {
    private renderer: Renderer;
    private _material: Material = DefaultMaterial;
    private _mesh: Mesh;

    public get mesh(): Mesh {
        return this._mesh;
    }

    public set mesh(mesh: Mesh) {
        this.RemoveMesh();
        this.AddMeshToViewer(mesh);

        this._mesh = mesh;
    }

    @SerializeField
    public get material(): Material {
        return this._material;
    }

    public set material(material: Material) {
        this._material = material;
        
        if (this._mesh) {
            this._mesh.material = this._material;
        }
    }

    @SerializeField
    public get castShadows(): boolean {
        return this.transform.group.castShadow;
    }

    public set castShadows(castShadows: boolean) {
        this.transform.group.castShadow = castShadows;
        this.transform.group.traverse(object => {
            object.castShadow = castShadows;
        })
    }

    @SerializeField
    public get receiveShadows(): boolean {
        return this.transform.group.receiveShadow;
    }

    public set receiveShadows(receiveShadows: boolean) {
        this.transform.group.receiveShadow = receiveShadows;
        this.transform.group.traverse(object => {
            object.receiveShadow = receiveShadows;
        })
    }

    public Awake() {
        this.renderer = this.gameObject.scene.GetRenderer();
        this.AddMeshFromMeshFilter();
    }

    public MeshFilterModelChanged(mesh: Geometry | BufferGeometry) {
        this.AddMeshFromMeshFilter();
    }

    private RemoveMesh() {
        if (this._mesh) {
            this.transform.group.remove(this._mesh);
            this.renderer.scene.remove(this._mesh);

            const material = this._mesh.material as any;

            if (material && material.dispose) {
                material.dispose();
            }
        }
    }

    private AddMeshFromMeshFilter() {
        const geometry: Geometry | BufferGeometry = this.GetMeshFromMeshFilter();

        if (geometry) {
            this.mesh = new Mesh(geometry, this.material);
            this.mesh.userData.transform = this.transform;
            this.castShadows = true;
            this.receiveShadows = true;
        }
    }

    private AddMeshToViewer(mesh: Mesh) {
        if (mesh.name == "") {  
            mesh.name = mesh.uuid;
        }
        this.transform.group.add(mesh);
    }

    private GetMeshFromMeshFilter(): Geometry | BufferGeometry {
        const meshFilter: MeshFilter = this.gameObject.GetComponent(MeshFilter);

        if (meshFilter)  {
            return meshFilter.mesh;
        }

        return null;
    }

    public Destroy() {
        this.RemoveMesh();
        this.gameObject.RemoveComponent(this);
    }
}