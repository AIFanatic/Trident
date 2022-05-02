var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MeshFilter } from "./MeshFilter";
import { Component } from "./Component";
import { Mesh, MeshStandardMaterial } from "three";
import { SerializeField } from "../utils/SerializeField";
export const DefaultMaterial = new MeshStandardMaterial();
/**
 * Renders a geometry from MeshFilter into the scene.
 *
 * @noInheritDoc
 */
export class MeshRenderer extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this._material = DefaultMaterial;
        this.renderer = this.gameObject.scene.GetRenderer();
        this.AddMeshFromMeshFilter();
    }
    get mesh() {
        return this._mesh;
    }
    set mesh(mesh) {
        this.RemoveMesh();
        this.AddMeshToViewer(mesh);
        this._mesh = mesh;
    }
    get material() {
        return this._material;
    }
    set material(material) {
        this._material = material;
        if (this._mesh) {
            this._mesh.material = this._material;
        }
    }
    get castShadows() {
        return this.transform.group.castShadow;
    }
    set castShadows(castShadows) {
        this.transform.group.castShadow = castShadows;
        this.transform.group.traverse(object => {
            object.castShadow = castShadows;
        });
    }
    get receiveShadows() {
        return this.transform.group.receiveShadow;
    }
    set receiveShadows(receiveShadows) {
        this.transform.group.receiveShadow = receiveShadows;
        this.transform.group.traverse(object => {
            object.receiveShadow = receiveShadows;
        });
    }
    MeshFilterModelChanged(mesh) {
        this.AddMeshFromMeshFilter();
    }
    RemoveMesh() {
        if (this._mesh) {
            this.transform.group.remove(this._mesh);
            this.renderer.scene.remove(this._mesh);
            const material = this._mesh.material;
            if (material && material.dispose) {
                material.dispose();
            }
        }
    }
    AddMeshFromMeshFilter() {
        const geometry = this.GetMeshFromMeshFilter();
        if (geometry) {
            this.mesh = new Mesh(geometry, this.material);
            this.mesh.userData.transform = this.transform;
            this.castShadows = true;
            this.receiveShadows = true;
        }
    }
    AddMeshToViewer(mesh) {
        if (mesh.name == "") {
            mesh.name = mesh.uuid;
        }
        this.transform.group.add(mesh);
    }
    GetMeshFromMeshFilter() {
        const meshFilter = this.gameObject.GetComponent(MeshFilter);
        if (meshFilter) {
            return meshFilter.mesh;
        }
        return null;
    }
    Destroy() {
        this.RemoveMesh();
        this.gameObject.RemoveComponent(this);
    }
}
__decorate([
    SerializeField
], MeshRenderer.prototype, "material", null);
__decorate([
    SerializeField
], MeshRenderer.prototype, "castShadows", null);
__decorate([
    SerializeField
], MeshRenderer.prototype, "receiveShadows", null);
//# sourceMappingURL=MeshRenderer.js.map