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
import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationDofLock } from "../enums/ArticulationDofLock";
import { Collider } from "./Collider";
import { Component } from "./Component";
var JointDriver = /** @class */ (function () {
    function JointDriver(joint, axis) {
        this._stiffness = 0;
        this._damping = 0;
        this._forceLimit = 1000;
        this._lowerLimit = 0;
        this._upperLimit = 0;
        this.joint = joint;
        this.axis = axis;
    }
    Object.defineProperty(JointDriver.prototype, "lowerLimit", {
        get: function () {
            return this._lowerLimit;
        },
        set: function (lowerLimit) {
            this.lowerLimit = lowerLimit;
            // @ts-ignore
            this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "upperLimit", {
        get: function () {
            return this._upperLimit;
        },
        set: function (upperLimit) {
            this._upperLimit = upperLimit;
            // @ts-ignore
            this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "stiffness", {
        get: function () {
            return this._stiffness;
        },
        set: function (stiffness) {
            this._stiffness = stiffness;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "damping", {
        get: function () {
            return this._damping;
        },
        set: function (damping) {
            this._damping = damping;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "forceLimit", {
        get: function () {
            return this._forceLimit;
        },
        set: function (forceLimit) {
            this._forceLimit = forceLimit;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "target", {
        get: function () {
            // @ts-ignore
            return this.joint.getDriveTarget(this.axis);
        },
        set: function (target) {
            // @ts-ignore
            this.joint.setDriveTarget(this.axis, target);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "targetVelocity", {
        get: function () {
            // @ts-ignore
            return this.joint.getDriveVelocity(this.axis);
        },
        set: function (targetVelocity) {
            // @ts-ignore
            this.joint.setDriveVelocity(this.axis, targetVelocity);
        },
        enumerable: false,
        configurable: true
    });
    return JointDriver;
}());
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
var ArticulationBody = /** @class */ (function (_super) {
    __extends(ArticulationBody, _super);
    function ArticulationBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArticulationBody.prototype, "immovable", {
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
    Object.defineProperty(ArticulationBody.prototype, "jointType", {
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
    ArticulationBody.prototype.setLinearLock = function (axis, motion) {
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
    Object.defineProperty(ArticulationBody.prototype, "linearLockX", {
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
    Object.defineProperty(ArticulationBody.prototype, "linearLockY", {
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
    Object.defineProperty(ArticulationBody.prototype, "linearLockZ", {
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
    ArticulationBody.prototype.setSwingLock = function (axis, motion) {
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
    Object.defineProperty(ArticulationBody.prototype, "swingYLock", {
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
    Object.defineProperty(ArticulationBody.prototype, "swingZLock", {
        get: function () {
            // @ts-ignore
            return this.inboundJoint.getMotion(ArticulationAxis.SWING1);
        },
        set: function (swingZLock) {
            this.setSwingLock(ArticulationAxis.SWING1, swingZLock);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArticulationBody.prototype, "twistLock", {
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
    Object.defineProperty(ArticulationBody.prototype, "mass", {
        get: function () {
            return this.link.getMass();
        },
        set: function (mass) {
            this.link.setMass(mass);
        },
        enumerable: false,
        configurable: true
    });
    ArticulationBody.prototype.OnEnable = function () {
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
    ArticulationBody.prototype.FixedUpdate = function () {
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
    ArticulationBody.prototype.Destroy = function () {
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
    return ArticulationBody;
}(Component));
export { ArticulationBody };
//# sourceMappingURL=ArticulationBody.js.map