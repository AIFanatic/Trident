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
import { PerspectiveCamera, Vector3, CameraHelper } from "three";
import { Component } from "./Component";
export var ProjectionTypes;
(function (ProjectionTypes) {
    ProjectionTypes[ProjectionTypes["Perspective"] = 0] = "Perspective";
    ProjectionTypes[ProjectionTypes["Orthographic"] = 1] = "Orthographic";
})(ProjectionTypes || (ProjectionTypes = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.previousTransformPosition = new Vector3();
        _this.previousCameraPosition = new Vector3();
        return _this;
    }
    Object.defineProperty(Camera.prototype, "far", {
        // private _projection: ProjectionTypes;
        // public get projection(): ProjectionTypes {
        //     return this._projection;
        // }
        // public set projection(projection: ProjectionTypes) {
        // }
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
    Camera.prototype.OnEnable = function () {
        var _this = this;
        var canvas = this.gameObject.scene.GetRenderer().renderer.domElement;
        this.camera = new PerspectiveCamera(59, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        this.transform.group.add(this.camera);
        this.previousTransformPosition.copy(this.transform.localPosition);
        this.previousCameraPosition.copy(this.transform.localPosition);
        window.addEventListener("resize", function (event) {
            var canvas = _this.gameObject.scene.GetRenderer().renderer.domElement;
            _this.camera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
            _this.camera.updateProjectionMatrix();
        });
    };
    Camera.prototype.GetCamera = function () {
        return this.camera;
    };
    Camera.prototype.OnGizmosEnabled = function () {
        if (!this.helper) {
            this.helper = new CameraHelper(this.camera);
            this.transform.group.add(this.helper);
        }
    };
    Camera.prototype.OnDrawGizmos = function () {
        if (this.helper) {
            this.helper.update();
        }
    };
    Camera.prototype.OnGizmosDisabled = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper = undefined;
        }
    };
    Camera.prototype.Destroy = function () {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.camera);
        this.gameObject.RemoveComponent(this);
    };
    return Camera;
}(Component));
export { Camera };
//# sourceMappingURL=Camera.js.map