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
/**
 * Renders a geometry from MeshFilter into the scene.
 *
 * @noInheritDoc
 */
export class MeshRenderer extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this._material = new MeshStandardMaterial();
        this.AddMeshFromMeshFilter();
    }
    get material() {
        return this._material;
    }
    set material(material) {
        if (material === null) {
            material = new MeshStandardMaterial();
        }
        this._material = material;
        if (this.mesh) {
            this.mesh.material = this._material;
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
        if (this.mesh) {
            this.transform.group.remove(this.mesh);
            this.gameObject.scene.rendererScene.remove(this.mesh);
            const material = this.mesh.material;
            if (material && material.dispose) {
                material.dispose();
            }
        }
    }
    AddMeshFromMeshFilter() {
        const geometry = this.GetMeshFromMeshFilter();
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