var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TransformDefaults } from '../defaults/TransformDefaults';
import { ComponentsEnum } from '../enums/ComponentsEnum';
import { Quaternion } from 'three';
import { UUID } from '../utils/UUID';
import { Mathf } from '../utils/Mathf';
import { Object3DExtended } from '../utils/Object3DExtended';
import { SerializeField } from '../utils/SerializeField';
/**
 * Every GameObject has a Transform.
 *
 * It allows for control over the position, scale and rotation of an object.
 *
 * Transforms can be have a parent which allows for simultaneous control of parents and children.
 *
 * @noInheritDoc
 */
export class Transform {
    constructor(gameObject) {
        this.uuid = UUID.v4();
        this.classtype = ComponentsEnum.Transform;
        this.tag = "Untagged";
        /**
        * The local up vector for this transform.
        */
        this.up = TransformDefaults.VectorUp.clone();
        /**
        * The local right vector for this transform.
        */
        this.right = TransformDefaults.VectorRight.clone();
        /**
        * The local forward vector for this transform.
        */
        this.forward = TransformDefaults.VectorForward.clone();
        this.children = [];
        this.gameObject = gameObject;
        this.group = new Object3DExtended();
        this.group["transform"] = this;
        this.gameObject.scene.GetRenderer().scene.add(this.group);
    }
    /**
    * Get the world position of this transform.
    * @returns {Vector3} The transform world position.
    */
    get position() {
        return this.group.worldPosition;
    }
    /**
    * Set the world position of this transform.
    * @param {Vector3} position - The world position to be applied to the transform.
    */
    set position(position) {
        this.group.worldPosition.copy(position);
    }
    /**
    * Get the local position of this transform.
    * @returns {Vector3} The transform local position.
    */
    get localPosition() {
        return this.group.position;
    }
    /**
    * Set the local position of this transform.
    * @param {Vector3} localPosition - The local position to be applied to the transform.
    */
    set localPosition(localPosition) {
        this.group.position.copy(localPosition);
    }
    /**
    * Get the world rotation of this transform.
    * @returns {Quaternion} The transform world rotation.
    */
    get rotation() {
        return this.group.worldRotation;
    }
    /**
    * Set the world rotation of this transform.
    * @param {Quaternion} rotation - The world rotation to be applied to the transform.
    */
    set rotation(rotation) {
        this.group.worldRotation.copy(rotation);
    }
    /**
    * Get the local rotation of this transform.
    * @returns {Quaternion} The transform local rotation.
    */
    get localRotation() {
        return this.group.quaternion;
    }
    /**
    * Set the local rotation of this transform.
    * @param {Quaternion} localRotation - The local rotation to be applied to the transform.
    */
    set localRotation(localRotation) {
        this.group.quaternion.copy(localRotation);
    }
    /**
    * Get the world euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform world euler angles.
    */
    get eulerAngles() {
        return this.group.worldEuler;
    }
    /**
    * Set the world euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} eulerAngles - The world euler angles to be applied to the transform.
    */
    set eulerAngles(eulerAngles) {
        this.group.worldEuler.copy(eulerAngles);
    }
    /**
    * Get the local euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform local euler angles.
    */
    get localEulerAngles() {
        return this.group.euler;
    }
    /**
    * Set the local euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} localEulerAngles - The local euler angles to be applied to the transform.
    */
    set localEulerAngles(localEulerAngles) {
        this.group.euler.copy(localEulerAngles);
    }
    /**
    * Get the local scale of this transform.
    * @returns {Vector3} The transform local scale.
    */
    get localScale() {
        return this.group.scale;
    }
    /**
    * Set the local scale of this transform.
    * @param {Vector3} localScale - The local scale to be applied to the transform.
    */
    set localScale(localScale) {
        this.group.scale.copy(localScale);
    }
    /**
     * Get a transform child by index.
     * @returns {Transform | null} Returns the child Transform or null if not found.
     */
    GetChild(index) {
        if (index < this.children.length) {
            return this.children[index];
        }
        return null;
    }
    /**
     * The number of children the Transform has.
     * @returns {number} The number of children this Transform has.
     */
    get childCount() {
        return this.children.length;
    }
    /**
    * Get the parent of this transform.
    * @returns {Transform} The transform parent.
    */
    get parent() {
        return this._parent;
    }
    /**
    * Set the parent of this transform.
    * Position, rotation and scale of this transform will be affected by the parent.
    * @param {Transform} parent - Parent transform.
    */
    set parent(parent) {
        if (parent == null) {
            if (this._parent) {
                const childIndex = this._parent.children.indexOf(this);
                if (childIndex != -1) {
                    this._parent.children.splice(childIndex, 1);
                }
                this._parent = null;
            }
            this.gameObject.scene.GetRenderer().scene.attach(this.group);
            return;
        }
        this._parent = parent;
        this._parent.children.push(this);
        parent.group.attach(this.group);
    }
    Translate(translation) {
        this.group.translateX(translation.x);
        this.group.translateY(translation.y);
        this.group.translateZ(translation.z);
    }
    /**
     * Rotates transform around a point.
     * This method changes both the transform position and rotation.
     *
     * @param {Vector3} point - Point in world space
     * @param {Vector3} axis - Rotation axis
     * @param {number} angle - Angle in degrees
     */
    RotateAround(point, axis, angle) {
        const q = new Quaternion();
        q.setFromAxisAngle(axis, angle * Mathf.Deg2Rad);
        this.group.applyQuaternion(q);
        this.group.position.sub(point);
        this.group.position.applyQuaternion(q);
        this.group.position.add(point);
    }
    Tick() {
    }
    FixedUpdate() {
    }
    LateUpdate() {
    }
    Update() {
        this.up.copy(TransformDefaults.VectorUp);
        this.up.applyQuaternion(this.rotation);
        this.right.copy(TransformDefaults.VectorRight);
        this.right.applyQuaternion(this.rotation);
        this.forward.copy(TransformDefaults.VectorForward);
        this.forward.applyQuaternion(this.rotation);
    }
    Start() {
    }
    Stop() {
    }
    Destroy() {
        if (this.parent) {
            this.parent.group.remove(this.group);
        }
        else {
            this.gameObject.scene.GetRenderer().scene.remove(this.group);
        }
        this.group.clear();
    }
}
__decorate([
    SerializeField
], Transform.prototype, "localPosition", null);
__decorate([
    SerializeField
], Transform.prototype, "localEulerAngles", null);
__decorate([
    SerializeField
], Transform.prototype, "localScale", null);
//# sourceMappingURL=Transform.js.map