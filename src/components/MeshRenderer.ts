import { MeshFilter } from "./MeshFilter";

import { Component } from "./Component";
import { BufferGeometry, Geometry, Material, Mesh, MeshStandardMaterial } from "three";
import { SerializeField } from "../utils/SerializeField";
import { GameObject, Transform } from ".";

/**
 * Renders a geometry from MeshFilter into the scene.
 * 
 * @noInheritDoc
 */
export class MeshRenderer extends Component {
    private _material: Material = new MeshStandardMaterial();
    public mesh: Mesh;

    @SerializeField
    public get material(): Material {
        return this._material;
    }

    public set material(material: Material) {
        if (material === null) {
            material = new MeshStandardMaterial();
        }

        this._material = material;
        
        if (this.mesh) {
            this.mesh.material = this._material;
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

    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);
        this.AddMeshFromMeshFilter();
    }

    public MeshFilterModelChanged(mesh: Geometry | BufferGeometry) {
        this.AddMeshFromMeshFilter();
    }

    private RemoveMesh() {
        if (this.mesh) {
            this.transform.group.remove(this.mesh);
            this.gameObject.scene.rendererScene.remove(this.mesh);

            const material = this.mesh.material as any;

            if (material && material.dispose) {
                material.dispose();
            }
        }
    }

    private AddMeshFromMeshFilter() {
        const geometry: Geometry | BufferGeometry = this.GetMeshFromMeshFilter();

        if (geometry) {
            
            const mesh = new Mesh(geometry, this.material);

            this.RemoveMesh();
            if (mesh.name == "") {  
                mesh.name = mesh.uuid;
            }
            this.transform.group.add(mesh);
    
            this.mesh = mesh;
            this.castShadows = true;
            this.receiveShadows = true;
        }
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