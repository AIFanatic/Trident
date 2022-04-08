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
import PhysX from 'trident-physx-js-webidl';
import { Quaternion, Vector3 } from 'three';
import { Component } from "./Component";
import { Collider } from './Collider';
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
import { PhysicsShape } from '../physics/PhysicsShape';
import { PhysicsUtils } from '../physics/PhysicsUtils';
import { ForceMode } from '../enums/ForceMode';
import { RigidbodyConstraints } from '../enums/RigidbodyConstraints';
import { RigidBodyFlags } from '../enums/RigidbodyFlags';
import { LayerMask } from '../enums/LayerMask';
import { Mathf } from '../utils/Mathf';
import { SerializeField } from '../utils/SerializeField';
/**
 * RigidBody adds physics properties to an object.
 *
 * When added the GameObject Transform will be controlled by the RigidBody component.
 *
 * Rigid bodies obbey physics such as gravity collisions etc, therefore it should only by controlled
 * with forces, although setting the position, rotation, scale directly works.
 *
 * @noInheritDoc
 */
var Rigidbody = /** @class */ (function (_super) {
    __extends(Rigidbody, _super);
    function Rigidbody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.position = new Vector3();
        _this.rotation = new Quaternion();
        _this.localScale = new Vector3();
        _this.previousLayer = LayerMask.LAYER0;
        return _this;
    }
    Rigidbody.prototype.OnEnable = function () {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        var collider = this.gameObject.GetComponent(Collider);
        if (collider) {
            this.body = collider.body;
            this.body.ConvertToDynamic();
            this.body.UpdatePose(this.transform.position, this.transform.rotation, this.transform.localScale);
            this.rigidbody = this.body.rigidbody;
        }
        else {
            var shape = PhysicsShape.CreateBox(this.physxPhysics, new Vector3(1, 1, 1));
            var geometry = shape.getGeometry().box();
            var transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
            var rigidbody = this.physxPhysics.createRigidDynamic(transform);
            var physicsBody = {
                rigidbody: rigidbody,
                geometry: geometry,
                shape: shape
            };
            this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
            this.rigidbody = rigidbody;
        }
    };
    Object.defineProperty(Rigidbody.prototype, "isKinematic", {
        /**
         * Set or get the kinematic propery of the rigid body.
         * Kinematic rigid bodies will not obey physics
         *
         * @returns True if the object is kinematic, false otherwise
         */
        get: function () {
            var flags = this.rigidbody.getRigidBodyFlags();
            return flags.isSet(RigidBodyFlags.KINEMATIC.valueOf());
        },
        set: function (kinematic) {
            this.rigidbody.setRigidBodyFlag(RigidBodyFlags.KINEMATIC.valueOf(), kinematic);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "mass", {
        get: function () {
            return this.rigidbody.getMass();
        },
        set: function (mass) {
            this.rigidbody.setMass(mass);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "velocity", {
        get: function () {
            var velocity = this.rigidbody.getLinearVelocity();
            return new Vector3(velocity.x, velocity.y, velocity.z);
        },
        set: function (velocity) {
            var pxVec3 = new PhysX.PxVec3(velocity.x, velocity.y, velocity.z);
            this.rigidbody.setLinearVelocity(pxVec3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "angularVelocity", {
        get: function () {
            var angularVelocity = this.rigidbody.getAngularVelocity();
            return new Vector3(angularVelocity.x, angularVelocity.y, angularVelocity.z);
        },
        set: function (angularVelocity) {
            var pxVec3 = new PhysX.PxVec3(angularVelocity.x, angularVelocity.y, angularVelocity.z);
            this.rigidbody.setAngularVelocity(pxVec3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "drag", {
        get: function () {
            return this.rigidbody.getLinearDamping();
        },
        set: function (drag) {
            this.rigidbody.setLinearDamping(drag);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "angularDrag", {
        get: function () {
            return this.rigidbody.getAngularDamping();
        },
        set: function (angularDrag) {
            this.rigidbody.setAngularDamping(angularDrag);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody.prototype, "constraints", {
        // public get freezeRotation(): Vector3 {
        //     const vec = this.body.ammo.getAngularFactor();
        //     return new Vector3(vec.x(), vec.y(), vec.z());
        // }
        // public set freezeRotation(vector: Vector3) {
        //     const vec = new Ammo.btVector3(vector.x, vector.y, vector.z);
        //     this.body.ammo.setAngularFactor(vec);
        // }
        // public get constraints(): RigidbodyConstraints {
        //     return this.rigidbody.getRigidDynamicLockFlags();
        // }
        set: function (constraint) {
            if (constraint == RigidbodyConstraints.FreezePosition) {
                constraint = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
            }
            else if (constraint == RigidbodyConstraints.FreezeRotation) {
                constraint = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ;
            }
            else if (constraint == RigidbodyConstraints.FreezeAll) {
                constraint = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ |
                    RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ;
            }
            var flags = new PhysX.PxRigidDynamicLockFlags(constraint);
            this.rigidbody.setRigidDynamicLockFlags(flags);
            this.rigidbody.wakeUp();
        },
        enumerable: false,
        configurable: true
    });
    Rigidbody.prototype.AddForce = function (force, mode) {
        if (mode === void 0) { mode = ForceMode.FORCE; }
        var pxVec3 = new PhysX.PxVec3(force.x, force.y, force.z);
        this.rigidbody.addForce(pxVec3, mode.valueOf());
    };
    // public AddRelativeForce(force: Vector3) {
    //     this.body.applyCentralLocalForce(force.x, force.y , force.z);
    // }
    Rigidbody.prototype.AddTorque = function (torque, mode) {
        if (mode === void 0) { mode = ForceMode.FORCE; }
        var pxVec3 = new PhysX.PxVec3(torque.x, torque.y, torque.z);
        this.rigidbody.addTorque(pxVec3, mode.valueOf());
    };
    // public AddRelativeTorque(torque: Vector3) {
    //     this.body.applyLocalTorque(torque.x, torque.y, torque.z);
    // }
    Rigidbody.prototype.MovePosition = function (position) {
        var dt = 1 / 60; // TODO: Should be fixedTimestep instead
        var pNew = position.clone(); //our new desired position
        var p = this.transform.position.clone(); //our current position
        var v = this.velocity.clone(); //our current velocity
        var force = pNew.sub(p).sub(v.multiplyScalar(dt)).divideScalar(dt).multiplyScalar(this.mass);
        this.velocity = new Vector3(0, 0, 0);
        this.AddForce(force);
    };
    Rigidbody.prototype.Start = function () {
    };
    Rigidbody.prototype.HandleTransformChanges = function () {
        if (this.transform.position.distanceToSquared(this.position) > Number.EPSILON) {
            this.body.UpdatePosition(this.transform.position);
        }
        if (Mathf.QuaternionDifferent(this.transform.rotation, this.rotation, Mathf.Epsilon)) {
            this.body.UpdateRotation(this.transform.rotation);
        }
        if (this.transform.localScale.distanceToSquared(this.localScale) > Number.EPSILON) {
            this.body.UpdateScale(this.transform.localScale);
        }
    };
    Rigidbody.prototype.FixedUpdate = function () {
        this.HandleTransformChanges();
        if (this.body) {
            var body = this.body.rigidbody;
            if (body.isSleeping())
                return;
            var transform = body.getGlobalPose();
            this.transform.position.set(transform.p.x, transform.p.y, transform.p.z);
            this.transform.rotation.set(transform.q.x, transform.q.y, transform.q.z, transform.q.w);
            this.position.copy(this.transform.position);
            this.rotation.copy(this.transform.rotation);
            this.localScale.set(this.transform.localScale.x, this.transform.localScale.y, this.transform.localScale.z);
            if (this.previousLayer != this.gameObject.layer) {
                var filterData = new PhysX.PxFilterData();
                filterData.word2 = this.gameObject.layer;
                this.body.shape.setQueryFilterData(filterData);
                this.previousLayer = this.gameObject.layer;
            }
        }
    };
    Rigidbody.prototype.Destroy = function () {
        var collider = this.gameObject.GetComponent(Collider);
        if (collider) {
            this.body = collider.body;
            this.body.ConvertToStatic();
        }
        else {
            if (this.body && this.body.rigidbody) {
                this.body.rigidbody.detachShape(this.body.shape);
                this.body.shape.release();
                this.body.rigidbody.release();
                this.body = null;
            }
        }
        this.gameObject.RemoveComponent(this);
    };
    __decorate([
        SerializeField
    ], Rigidbody.prototype, "isKinematic", null);
    __decorate([
        SerializeField
    ], Rigidbody.prototype, "mass", null);
    __decorate([
        SerializeField
    ], Rigidbody.prototype, "drag", null);
    __decorate([
        SerializeField
    ], Rigidbody.prototype, "angularDrag", null);
    return Rigidbody;
}(Component));
export { Rigidbody };
//# sourceMappingURL=Rigidbody.js.map