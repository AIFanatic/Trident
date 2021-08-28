var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Euler, MathUtils, Object3D, Quaternion, Vector3 } from "three";
import { Mathf } from "./Mathf";
var Object3DExtended = /** @class */ (function (_super) {
    __extends(Object3DExtended, _super);
    function Object3DExtended() {
        var _this = _super.call(this) || this;
        _this.worldPosition = new Vector3();
        _this.worldEuler = new Vector3();
        _this.worldRotation = new Quaternion();
        _this.worldScale = new Vector3();
        _this.euler = new Vector3();
        _this.previousWorldPosition = new Vector3();
        _this.previousWorldEuler = new Vector3();
        _this.previousWorldRotation = new Quaternion();
        _this.previousEuler = new Vector3();
        _this._e1 = new Euler();
        _this._v1 = new Vector3();
        _this._v2 = new Vector3();
        _this._q1 = new Quaternion();
        _this._q2 = new Quaternion();
        return _this;
    }
    Object3DExtended.prototype.updateMatrix = function () {
        this.CheckWorldPosition();
        this.CheckWorldEuler();
        this.CheckWorldRotation();
        this.CheckEuler();
        _super.prototype.updateMatrix.call(this);
    };
    Object3DExtended.prototype.updateMatrixWorld = function (force) {
        _super.prototype.updateMatrixWorld.call(this, force);
        this.matrixWorld.decompose(this.worldPosition, this.worldRotation, this.worldScale);
        this.worldEuler.copy(this.getWorldEuler());
        this.previousWorldEuler.copy(this.worldEuler);
        // this.worldPosition.copy(this.getWorldPositiona());
        this.previousWorldPosition.copy(this.worldPosition);
        // this.worldRotation.copy(this.getWorldRotation());
        this.previousWorldRotation.copy(this.worldRotation);
        this.euler.copy(this.getEuler());
        this.previousEuler.copy(this.euler);
    };
    Object3DExtended.prototype.getWorldEuler = function () {
        this._e1.copy(this.rotation);
        if (this.parent) {
            this._e1.x += this.parent.rotation.x;
            this._e1.y += this.parent.rotation.y;
            this._e1.z += this.parent.rotation.z;
        }
        this._e1.toVector3(this._v1);
        return this._v1.multiplyScalar(MathUtils.RAD2DEG);
    };
    Object3DExtended.prototype.setWorldEuler = function (x, y, z) {
        this._e1.set(x * MathUtils.DEG2RAD, y * MathUtils.DEG2RAD, z * MathUtils.DEG2RAD);
        if (this.parent) {
            this._e1.x -= this.parent.rotation.x;
            this._e1.y -= this.parent.rotation.y;
            this._e1.z -= this.parent.rotation.z;
            this.rotation.copy(this._e1);
        }
    };
    Object3DExtended.prototype.getWorldPositiona = function () {
        this._v1.copy(this.position);
        this.getWorldPosition(this._v1);
        return this._v1;
    };
    Object3DExtended.prototype.setWorldPosition = function (x, y, z) {
        this._v1.set(x, y, z);
        if (this.parent) {
            this.parent.getWorldPosition(this._v2);
            this._q1.copy(this.parent.quaternion);
            this.position.copy(this._v1.sub(this._v2).applyQuaternion(this._q1.invert()).divide(this.parent.scale));
        }
    };
    Object3DExtended.prototype.getWorldRotation = function () {
        this.getWorldQuaternion(this._q1);
        return this._q1;
    };
    Object3DExtended.prototype.setWorldRotation = function (x, y, z, w) {
        this._q1.set(x, y, z, w);
        if (this.parent) {
            this.parent.getWorldQuaternion(this._q2);
            this.quaternion.copy(this._q1.multiply(this._q2.invert()));
        }
    };
    Object3DExtended.prototype.getEuler = function () {
        return this._v1.set(this.rotation.x * MathUtils.RAD2DEG, this.rotation.y * MathUtils.RAD2DEG, this.rotation.z * MathUtils.RAD2DEG);
    };
    Object3DExtended.prototype.setEuler = function (x, y, z) {
        this.rotation.set(x * MathUtils.DEG2RAD, y * MathUtils.DEG2RAD, z * MathUtils.DEG2RAD);
    };
    Object3DExtended.prototype.CheckWorldPosition = function () {
        if (this.previousWorldPosition.distanceToSquared(this.worldPosition) > Number.EPSILON) {
            this.setWorldPosition(this.worldPosition.x, this.worldPosition.y, this.worldPosition.z);
            this.previousWorldPosition.copy(this.worldPosition);
        }
    };
    Object3DExtended.prototype.CheckWorldEuler = function () {
        if (this.previousWorldEuler.distanceToSquared(this.worldEuler) > Number.EPSILON) {
            this.setWorldEuler(this.worldEuler.x, this.worldEuler.y, this.worldEuler.z);
            this.previousWorldEuler.copy(this.worldEuler);
        }
    };
    Object3DExtended.prototype.CheckWorldRotation = function () {
        if (Mathf.QuaternionDifferent(this.previousWorldRotation, this.worldRotation, Mathf.Epsilon)) {
            this.setWorldRotation(this.worldRotation.x, this.worldRotation.y, this.worldRotation.z, this.worldRotation.w);
            this.previousWorldRotation.copy(this.worldRotation);
        }
    };
    Object3DExtended.prototype.CheckEuler = function () {
        if (this.previousEuler.distanceToSquared(this.euler) > Number.EPSILON) {
            this.setEuler(this.euler.x, this.euler.y, this.euler.z);
            this.previousEuler.copy(this.euler);
        }
    };
    return Object3DExtended;
}(Object3D));
export { Object3DExtended };
//# sourceMappingURL=Object3DExtended.js.map