var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PerspectiveCamera, CameraHelper } from "three";
import { Runtime } from "..";
import { SerializeField } from "../utils/SerializeField";
import { Component } from "./Component";
export var ProjectionTypes;
(function (ProjectionTypes) {
    ProjectionTypes[ProjectionTypes["Perspective"] = 0] = "Perspective";
    ProjectionTypes[ProjectionTypes["Orthographic"] = 1] = "Orthographic";
})(ProjectionTypes || (ProjectionTypes = {}));
/**
 * Camera allows to create multiple cameras for the same scene.
 *
 * Use scene.SetActiveCamera(camera) to set it as the main camera.
 *
 * @noInheritDoc
 */
export class Camera extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.camera = new PerspectiveCamera(60, 1, 0.1, 1000);
        this.transform.group.add(this.camera);
        const canvasDom = Runtime.Renderer.renderer.domElement;
        const resizeObserver = new ResizeObserver(() => { this.OnResize(); }).observe(canvasDom);
        this.OnResize();
    }
    get far() {
        return this.camera.far;
    }
    set far(far) {
        this.camera.far = far;
        this.camera.updateProjectionMatrix();
    }
    get near() {
        return this.camera.near;
    }
    set near(near) {
        this.camera.near = near;
        this.camera.updateProjectionMatrix();
    }
    get fieldOfView() {
        return this.camera.fov;
    }
    set fieldOfView(fieldOfView) {
        this.camera.fov = fieldOfView;
        this.camera.updateProjectionMatrix();
    }
    GetCamera() {
        return this.camera;
    }
    OnResize() {
        const canvas = Runtime.Renderer.renderer.domElement;
        this.camera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
        this.camera.updateProjectionMatrix();
    }
    OnDrawGizmos() {
        if (!this.helper) {
            this.helper = new CameraHelper(this.camera);
            this.transform.group.add(this.helper);
        }
        this.helper.update();
    }
    Destroy() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper = undefined;
        }
        this.transform.group.remove(this.camera);
        this.gameObject.RemoveComponent(this);
    }
}
__decorate([
    SerializeField
], Camera.prototype, "far", null);
__decorate([
    SerializeField
], Camera.prototype, "near", null);
__decorate([
    SerializeField
], Camera.prototype, "fieldOfView", null);
//# sourceMappingURL=Camera.js.map