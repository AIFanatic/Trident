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
var Transform = /** @class */ (function () {
    function Transform(gameObject) {
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
        this.gameObject = gameObject;
        this.group = new Object3DExtended();
        this.group["transform"] = this;
        this.gameObject.scene.GetRenderer().scene.add(this.group);
    }
    Object.defineProperty(Transform.prototype, "position", {
        /**
        * Get the world position of this transform.
        * @returns {Vector3} The transform world position.
        */
        get: function () {
            return this.group.worldPosition;
        },
        /**
        * Set the world position of this transform.
        * @param {Vector3} position - The world position to be applied to the transform.
        */
        set: function (position) {
            this.group.worldPosition.copy(position);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "localPosition", {
        /**
        * Get the local position of this transform.
        * @returns {Vector3} The transform local position.
        */
        get: function () {
            return this.group.position;
        },
        /**
        * Set the local position of this transform.
        * @param {Vector3} localPosition - The local position to be applied to the transform.
        */
        set: function (localPosition) {
            this.group.position.copy(localPosition);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        /**
        * Get the world rotation of this transform.
        * @returns {Quaternion} The transform world rotation.
        */
        get: function () {
            return this.group.worldRotation;
        },
        /**
        * Set the world rotation of this transform.
        * @param {Quaternion} rotation - The world rotation to be applied to the transform.
        */
        set: function (rotation) {
            this.group.worldRotation.copy(rotation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "localRotation", {
        /**
        * Get the local rotation of this transform.
        * @returns {Quaternion} The transform local rotation.
        */
        get: function () {
            return this.group.quaternion;
        },
        /**
        * Set the local rotation of this transform.
        * @param {Quaternion} localRotation - The local rotation to be applied to the transform.
        */
        set: function (localRotation) {
            this.group.quaternion.copy(localRotation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "eulerAngles", {
        /**
        * Get the world euler angles of this transform.
        * The euler angles are in degrees.
        * @returns {Vector3} The transform world euler angles.
        */
        get: function () {
            return this.group.worldEuler;
        },
        /**
        * Set the world euler angles of this transform.
        * The euler angles are in degrees.
        * @param {Vector3} eulerAngles - The world euler angles to be applied to the transform.
        */
        set: function (eulerAngles) {
            this.group.worldEuler.copy(eulerAngles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "localEulerAngles", {
        /**
        * Get the local euler angles of this transform.
        * The euler angles are in degrees.
        * @returns {Vector3} The transform local euler angles.
        */
        get: function () {
            return this.group.euler;
        },
        /**
        * Set the local euler angles of this transform.
        * The euler angles are in degrees.
        * @param {Vector3} localEulerAngles - The local euler angles to be applied to the transform.
        */
        set: function (localEulerAngles) {
            this.group.euler.copy(localEulerAngles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "localScale", {
        /**
        * Get the local scale of this transform.
        * @returns {Vector3} The transform local scale.
        */
        get: function () {
            return this.group.scale;
        },
        /**
        * Set the local scale of this transform.
        * @param {Vector3} localScale - The local scale to be applied to the transform.
        */
        set: function (localScale) {
            this.group.scale.copy(localScale);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "parent", {
        /**
        * Get the parent of this transform.
        * @returns {Transform} The transform parent.
        */
        get: function () {
            return this._parent;
        },
        /**
        * Set the parent of this transform.
        * Position, rotation and scale of this transform will be affected by the parent.
        * @param {Transform} parent - Parent transform.
        */
        set: function (parent) {
            if (parent == null) {
                this._parent = null;
                this.gameObject.scene.GetRenderer().scene.attach(this.group);
                return;
            }
            this._parent = parent;
            parent.group.attach(this.group);
        },
        enumerable: false,
        configurable: true
    });
    Transform.prototype.Translate = function (translation) {
        this.group.translateX(translation.x);
        this.group.translateY(translation.y);
        this.group.translateZ(translation.z);
    };
    /**
     * Rotates transform around a point.
     * This method changes both the transform position and rotation.
     *
     * @param {Vector3} point - Point in world space
     * @param {Vector3} axis - Rotation axis
     * @param {number} angle - Angle in degrees
     */
    Transform.prototype.RotateAround = function (point, axis, angle) {
        var q = new Quaternion();
        q.setFromAxisAngle(axis, angle * Mathf.Deg2Rad);
        this.group.applyQuaternion(q);
        this.group.position.sub(point);
        this.group.position.applyQuaternion(q);
        this.group.position.add(point);
    };
    Transform.prototype.Tick = function () {
    };
    Transform.prototype.FixedUpdate = function () {
    };
    Transform.prototype.LateUpdate = function () {
    };
    Transform.prototype.Update = function () {
        this.up.copy(TransformDefaults.VectorUp);
        this.up.applyQuaternion(this.rotation);
        this.right.copy(TransformDefaults.VectorRight);
        this.right.applyQuaternion(this.rotation);
        this.forward.copy(TransformDefaults.VectorForward);
        this.forward.applyQuaternion(this.rotation);
    };
    Transform.prototype.Start = function () {
    };
    Transform.prototype.Stop = function () {
    };
    Transform.prototype.Destroy = function () {
        if (this.parent) {
            this.parent.group.remove(this.group);
        }
        else {
            this.gameObject.scene.GetRenderer().scene.remove(this.group);
        }
        this.group.clear();
    };
    __decorate([
        SerializeField
    ], Transform.prototype, "localPosition", null);
    __decorate([
        SerializeField
    ], Transform.prototype, "localEulerAngles", null);
    __decorate([
        SerializeField
    ], Transform.prototype, "localScale", null);
    return Transform;
}());
export { Transform };
//# sourceMappingURL=Transform.js.map