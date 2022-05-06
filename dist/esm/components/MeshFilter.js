var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./Component";
import { BufferGeometry } from "three";
import { SerializeField } from "../utils/SerializeField";
/**
 * Stores a geometry that later can be rendered to the scene.
 *
 * @noInheritDoc
 */
export class MeshFilter extends Component {
    constructor() {
        super(...arguments);
        this._mesh = new BufferGeometry();
    }
    get mesh() {
        return this._mesh;
    }
    set mesh(mesh) {
        if (mesh === null) {
            mesh = new BufferGeometry();
        }
        this._mesh = mesh;
        this.gameObject.BroadcastMessage("MeshFilterModelChanged", this._mesh);
    }
    Destroy() {
        if (this.mesh) {
            this.mesh.dispose();
        }
        this.gameObject.RemoveComponent(this);
    }
}
__decorate([
    SerializeField
], MeshFilter.prototype, "mesh", null);
//# sourceMappingURL=MeshFilter.js.map