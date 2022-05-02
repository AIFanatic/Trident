import { Euler, MathUtils, Object3D, Quaternion, Vector3 } from "three";
import { Mathf } from "./Mathf";
export class Object3DExtended extends Object3D {
    constructor() {
        super();
        this.worldPosition = new Vector3();
        this.worldEuler = new Vector3();
        this.worldRotation = new Quaternion();
        this.worldScale = new Vector3();
        this.euler = new Vector3();
        this.previousWorldPosition = new Vector3();
        this.previousWorldEuler = new Vector3();
        this.previousWorldRotation = new Quaternion();
        this.previousEuler = new Vector3();
        this._e1 = new Euler();
        this._v1 = new Vector3();
        this._v2 = new Vector3();
        this._q1 = new Quaternion();
        this._q2 = new Quaternion();
    }
    updateMatrix() {
        this.CheckWorldPosition();
        this.CheckWorldEuler();
        this.CheckWorldRotation();
        this.CheckEuler();
        super.updateMatrix();
    }
    updateMatrixWorld(force) {
        super.updateMatrixWorld(force);
        this.matrixWorld.decompose(this.worldPosition, this.worldRotation, this.worldScale);
        this.worldEuler.copy(this.getWorldEuler());
        this.previousWorldEuler.copy(this.worldEuler);
        // this.worldPosition.copy(this.getWorldPositiona());
        this.previousWorldPosition.copy(this.worldPosition);
        // this.worldRotation.copy(this.getWorldRotation());
        this.previousWorldRotation.copy(this.worldRotation);
        this.euler.copy(this.getEuler());
        this.previousEuler.copy(this.euler);
    }
    getWorldEuler() {
        this._e1.copy(this.rotation);
        if (this.parent) {
            this._e1.x += this.parent.rotation.x;
            this._e1.y += this.parent.rotation.y;
            this._e1.z += this.parent.rotation.z;
        }
        this._e1.toVector3(this._v1);
        return this._v1.multiplyScalar(MathUtils.RAD2DEG);
    }
    setWorldEuler(x, y, z) {
        this._e1.set(x * MathUtils.DEG2RAD, y * MathUtils.DEG2RAD, z * MathUtils.DEG2RAD);
        if (this.parent) {
            this._e1.x -= this.parent.rotation.x;
            this._e1.y -= this.parent.rotation.y;
            this._e1.z -= this.parent.rotation.z;
            this.rotation.copy(this._e1);
        }
    }
    getWorldPositiona() {
        this._v1.copy(this.position);
        this.getWorldPosition(this._v1);
        return this._v1;
    }
    setWorldPosition(x, y, z) {
        this._v1.set(x, y, z);
        if (this.parent) {
            this.parent.getWorldPosition(this._v2);
            this._q1.copy(this.parent.quaternion);
            this.position.copy(this._v1.sub(this._v2).applyQuaternion(this._q1.invert()).divide(this.parent.scale));
        }
    }
    getWorldRotation() {
        this.getWorldQuaternion(this._q1);
        return this._q1;
    }
    setWorldRotation(x, y, z, w) {
        this._q1.set(x, y, z, w);
        if (this.parent) {
            this.parent.getWorldQuaternion(this._q2);
            this.quaternion.copy(this._q1.multiply(this._q2.invert()));
        }
    }
    getEuler() {
        return this._v1.set(this.rotation.x * MathUtils.RAD2DEG, this.rotation.y * MathUtils.RAD2DEG, this.rotation.z * MathUtils.RAD2DEG);
    }
    setEuler(x, y, z) {
        this.rotation.set(x * MathUtils.DEG2RAD, y * MathUtils.DEG2RAD, z * MathUtils.DEG2RAD);
    }
    CheckWorldPosition() {
        if (this.previousWorldPosition.distanceToSquared(this.worldPosition) > Number.EPSILON) {
            this.setWorldPosition(this.worldPosition.x, this.worldPosition.y, this.worldPosition.z);
            this.previousWorldPosition.copy(this.worldPosition);
        }
    }
    CheckWorldEuler() {
        if (this.previousWorldEuler.distanceToSquared(this.worldEuler) > Number.EPSILON) {
            this.setWorldEuler(this.worldEuler.x, this.worldEuler.y, this.worldEuler.z);
            this.previousWorldEuler.copy(this.worldEuler);
        }
    }
    CheckWorldRotation() {
        if (Mathf.QuaternionDifferent(this.previousWorldRotation, this.worldRotation, Mathf.Epsilon)) {
            this.setWorldRotation(this.worldRotation.x, this.worldRotation.y, this.worldRotation.z, this.worldRotation.w);
            this.previousWorldRotation.copy(this.worldRotation);
        }
    }
    CheckEuler() {
        if (this.previousEuler.distanceToSquared(this.euler) > Number.EPSILON) {
            this.setEuler(this.euler.x, this.euler.y, this.euler.z);
            this.previousEuler.copy(this.euler);
        }
    }
}
//# sourceMappingURL=Object3DExtended.js.map