import { MeshFilter } from "./MeshFilter";

import { Component } from "./Component";
import { Renderer } from "../Renderer";
import { MeshRendererDefaults } from "../defaults/MeshRendererDefaults";
import { BufferGeometry, Geometry, Material, Mesh } from "three";

/**
 * Renders a geometry from MeshFilter into the scene.
 * 
 * @noInheritDoc
 */
export class MeshRenderer extends Component {
    private renderer: Renderer;
    private _material: Material = MeshRendererDefaults.DefaultMaterial();
    private _mesh: Mesh;

    public get mesh(): Mesh {
        return this._mesh;
    }

    public set mesh(mesh: Mesh) {
        this.RemoveMesh();
        this.AddMeshToViewer(mesh);

        this._mesh = mesh;
    }

    public get material(): Material {
        return this._material;
    }

    public set material(material: Material) {
        this._material = material;

        if (this._mesh) {
            this._mesh.material = this._material;
        }
    }

    public get castShadows(): boolean {
        return this.transform.group.castShadow;
    }

    public set castShadows(castShadows: boolean) {
        this.transform.group.castShadow = castShadows;
        this.transform.group.traverse(object => {
            object.castShadow = castShadows;
        })
    }

    public get receiveShadows(): boolean {
        return this.transform.group.receiveShadow;
    }

    public set receiveShadows(receiveShadows: boolean) {
        // this.transform.group.receiveShadow = receiveShadows;
        this.transform.group.receiveShadow = receiveShadows;
        this.transform.group.traverse(object => {
            object.receiveShadow = receiveShadows;
        })
    }

    public OnEnable() {
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