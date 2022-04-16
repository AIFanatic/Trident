var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PerspectiveCamera, CameraHelper } from "three";
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
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = new PerspectiveCamera(60, 1, 0.1, 1000);
        return _this;
    }
    Object.defineProperty(Camera.prototype, "far", {
        get: function () {
            return this.camera.far;
        },
        set: function (far) {
            this.camera.far = far;
            this.camera.updateProjectionMatrix();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "near", {
        get: function () {
            return this.camera.near;
        },
        set: function (near) {
            this.camera.near = near;
            this.camera.updateProjectionMatrix();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "fieldOfView", {
        get: function () {
            return this.camera.fov;
        },
        set: function (fieldOfView) {
            this.camera.fov = fieldOfView;
            this.camera.updateProjectionMatrix();
        },
        enumerable: false,
        configurable: true
    });
    Camera.prototype.Awake = function () {
        var _this = this;
        this.transform.group.add(this.camera);
        window.addEventListener("resize", function (event) {
            _this.OnResize();
        });
        this.OnResize();
    };
    Camera.prototype.GetCamera = function () {
        return this.camera;
    };
    Camera.prototype.OnResize = function () {
        var canvas = this.gameObject.scene.GetRenderer().renderer.domElement;
        this.camera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
        this.camera.updateProjectionMatrix();
    };
    Camera.prototype.OnDrawGizmos = function () {
        if (!this.helper) {
            this.helper = new CameraHelper(this.camera);
            this.transform.group.add(this.helper);
        }
        this.helper.update();
    };
    Camera.prototype.Destroy = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper = undefined;
        }
        this.transform.group.remove(this.camera);
        this.gameObject.RemoveComponent(this);
    };
    __decorate([
        SerializeField
    ], Camera.prototype, "far", null);
    __decorate([
        SerializeField
    ], Camera.prototype, "near", null);
    __decorate([
        SerializeField
    ], Camera.prototype, "fieldOfView", null);
    return Camera;
}(Component));
export { Camera };
//# sourceMappingURL=Camera.js.map