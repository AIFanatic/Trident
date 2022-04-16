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
import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../../enums/ArticulationAxis";
import { ArticulationJointType } from "../../enums/ArticulationJointType";
import { ArticulationDofLock } from "../../enums/ArticulationDofLock";
import { Collider } from "./../Collider";
import { Component } from "./../Component";
import { SerializeField } from "../../utils/SerializeField";
import { JointDriver } from "./JointDriver";
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
var ArticulationRevolute = /** @class */ (function (_super) {
    __extends(ArticulationRevolute, _super);
    function ArticulationRevolute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArticulationRevolute.prototype, "immovable", {
        get: function () {
            var flags = this.articulation.getArticulationFlags();
            // @ts-ignore
            return flags.isSet(PhysX.eFIX_BASE);
        },
        set: function (immovable) {
            // @ts-ignore
            this.articulation.setArticulationFlag(PhysX.eFIX_BASE, immovable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "jointType", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getJointType();
        },
        set: function (jointType) {
            if (this.inboundJoint) {
                if (jointType == ArticulationJointType.FixedJoint) {
                    // @ts-ignore
                    this.inboundJoint.setJointType(ArticulationJointType.FixedJoint);
                }
                else if (jointType == ArticulationJointType.PrismaticJoint) {
                    // @ts-ignore
                    this.inboundJoint.setJointType(ArticulationJointType.PrismaticJoint);
                    this.xDrive = new JointDriver(this.inboundJoint, ArticulationAxis.X);
                    this.yDrive = new JointDriver(this.inboundJoint, ArticulationAxis.Y);
                    this.zDrive = new JointDriver(this.inboundJoint, ArticulationAxis.Z);
                    this.linearLockX = ArticulationDofLock.FreeMotion;
                }
                else if (jointType == ArticulationJointType.RevoluteJoint) {
                    // @ts-ignore
                    this.inboundJoint.setJointType(ArticulationJointType.RevoluteJoint);
                    this.xDrive = new JointDriver(this.inboundJoint, ArticulationAxis.SWING1);
                    this.yDrive = undefined;
                    this.zDrive = undefined;
                    this.swingZLock = ArticulationDofLock.FreeMotion;
                }
                else if (jointType == ArticulationJointType.SphericalJoint) {
                    // @ts-ignore
                    this.inboundJoint.setJointType(ArticulationJointType.SphericalJoint);
                    this.xDrive = new JointDriver(this.inboundJoint, ArticulationAxis.TWIST);
                    this.yDrive = new JointDriver(this.inboundJoint, ArticulationAxis.SWING2);
                    this.zDrive = new JointDriver(this.inboundJoint, ArticulationAxis.SWING1);
                    this.twistLock = ArticulationDofLock.FreeMotion;
                    this.swingYLock = ArticulationDofLock.FreeMotion;
                    this.swingZLock = ArticulationDofLock.FreeMotion;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    ArticulationRevolute.prototype.setLinearLock = function (axis, motion) {
        // A Prismatic joint can only have one active axis and the articulation needs to be re-added to the scene.
        if (this.jointType == ArticulationJointType.PrismaticJoint) {
            this.physicsScene.removeArticulation(this.articulation);
            // @ts-ignore
            this.inboundJoint.setMotion(ArticulationAxis.X, ArticulationDofLock.LockedMotion);
            // @ts-ignore
            this.inboundJoint.setMotion(ArticulationAxis.Y, ArticulationDofLock.LockedMotion);
            // @ts-ignore
            this.inboundJoint.setMotion(ArticulationAxis.Z, ArticulationDofLock.LockedMotion);
            // @ts-ignore
            this.inboundJoint.setMotion(axis, motion);
            this.physicsScene.addArticulation(this.articulation);
            return;
        }
        // @ts-ignore
        this.inboundJoint.setMotion(axis, motion);
    };
    Object.defineProperty(ArticulationRevolute.prototype, "linearLockX", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.X);
        },
        set: function (linearLockX) {
            this.setLinearLock(ArticulationAxis.X, linearLockX);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "linearLockY", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.Y);
        },
        set: function (linearLockY) {
            this.setLinearLock(ArticulationAxis.Y, linearLockY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "linearLockZ", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.Z);
        },
        set: function (linearLockZ) {
            this.setLinearLock(ArticulationAxis.Z, linearLockZ);
        },
        enumerable: false,
        configurable: true
    });
    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    ArticulationRevolute.prototype.setSwingLock = function (axis, motion) {
        // A Spherical joint needs to be re-added to the scene.
        if (this.jointType == ArticulationJointType.SphericalJoint) {
            this.physicsScene.removeArticulation(this.articulation);
            // @ts-ignore
            this.inboundJoint.setMotion(axis, motion);
            this.physicsScene.addArticulation(this.articulation);
            return;
        }
        // @ts-ignore
        this.inboundJoint.setMotion(axis, motion);
    };
    Object.defineProperty(ArticulationRevolute.prototype, "swingYLock", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.SWING2);
        },
        set: function (swingYLock) {
            this.setSwingLock(ArticulationAxis.SWING2, swingYLock);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "swingZLock", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.SWING1);
        },
        set: function (swingZLock) {
            // @ts-ignore
            this.setSwingLock(ArticulationAxis.SWING1, swingZLock);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "twistLock", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.TWIST);
        },
        set: function (twistLock) {
            this.setSwingLock(ArticulationAxis.TWIST, twistLock);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationRevolute.prototype, "mass", {
        get: function () {
            return this.link.getMass();
        },
        set: function (mass) {
            this.link.setMass(mass);
        },
        enumerable: false,
        configurable: true
    });
    ArticulationRevolute.prototype.Awake = function () {
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();
        var parentArticulation = this.transform.parent ? this.transform.parent.gameObject.GetComponent(ArticulationBody) : null;
        if (parentArticulation) {
            var position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            var rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
            var pose = new PhysX.PxTransform(position, rotation);
            this.articulation = parentArticulation.articulation;
            this.physicsScene.removeArticulation(this.articulation);
            this.link = this.articulation.createLink(parentArticulation.link, pose);
            var collider = this.gameObject.GetComponent(Collider);
            if (collider) {
                collider.body.rigidbody.detachShape(collider.body.shape);
                this.link.attachShape(collider.body.shape);
            }
            var inboundJoint = this.link.getInboundJoint();
            // @ts-ignore
            this.inboundJoint = PhysX.castObject(inboundJoint, PhysX.PxArticulationJointReducedCoordinate);
            var p = this.transform.position.clone().sub(this.transform.parent.position);
            var localPosition = new PhysX.PxVec3(p.x, p.y, p.z);
            var localRotation = new PhysX.PxQuat(this.transform.localRotation.x, this.transform.localRotation.y, this.transform.localRotation.z, this.transform.localRotation.w);
            var localPose = new PhysX.PxTransform(localPosition, localRotation);
            this.inboundJoint.setParentPose(localPose);
            this.jointType = ArticulationJointType.FixedJoint;
            this.physicsScene.addArticulation(this.articulation);
        }
        else {
            var position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            var rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
            var pose = new PhysX.PxTransform(position, rotation);
            this.articulation = this.physics.createArticulationReducedCoordinate();
            this.link = this.articulation.createLink(null, pose);
            this.physicsScene.addArticulation(this.articulation);
        }
        this.link.setLinearDamping(0.05);
        this.link.setAngularDamping(0.05);
        if (this.inboundJoint) {
            this.inboundJoint.setFrictionCoefficient(0.05);
        }
        this.mass = 1;
        // @ts-ignore
        PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
    };
    ArticulationRevolute.prototype.FixedUpdate = function () {
        if (!this.link)
            return;
        if (!this.inboundJoint)
            return;
        var pose = this.link.getGlobalPose();
        // Prismatic joints move the position while spherical and revolute joints move the rotation.
        // Positions are updated by THREE since they are grouped/parented.
        if (this.inboundJoint && this.jointType && this.jointType == ArticulationJointType.PrismaticJoint) {
            this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        }
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);
        // No lazy articulations
        if (this.articulation) {
            this.articulation.wakeUp();
        }
    };
    ArticulationRevolute.prototype.Destroy = function () {
        // TODO: Check if link is leaf
        if (this.link) {
            var collider = this.gameObject.GetComponent(Collider);
            if (collider) {
                this.link.detachShape(collider.body.shape);
                collider.body.rigidbody.attachShape(collider.body.shape);
            }
            this.link.release();
            this.link = undefined;
            this.inboundJoint = undefined;
        }
        this.gameObject.RemoveComponent(this);
    };
    __decorate([
        SerializeField
    ], ArticulationRevolute.prototype, "immovable", null);
    __decorate([
        SerializeField(ArticulationJointType)
    ], ArticulationRevolute.prototype, "jointType", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "linearLockX", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "linearLockY", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "linearLockZ", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "swingYLock", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "swingZLock", null);
    __decorate([
        SerializeField(ArticulationDofLock)
    ], ArticulationRevolute.prototype, "twistLock", null);
    __decorate([
        SerializeField
    ], ArticulationRevolute.prototype, "mass", null);
    return ArticulationRevolute;
}(Component));
export { ArticulationRevolute };
//# sourceMappingURL=ArticulationRevolute.js.map