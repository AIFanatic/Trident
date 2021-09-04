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
import { ArticulationMotion } from "../enums/ArticulationMotion";
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
        // @ts-ignore
        this.axis = axis;
    }
    Object.defineProperty(JointDriver.prototype, "axis", {
        get: function () {
            return this._axis;
        },
        set: function (axis) {
            this._axis = axis;
        },
        enumerable: false,
        configurable: true
    });
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
var JointTypeBase = /** @class */ (function () {
    function JointTypeBase() {
    }
    return JointTypeBase;
}());
var JointTypeFixed = /** @class */ (function (_super) {
    __extends(JointTypeFixed, _super);
    function JointTypeFixed(joint) {
        var _this = _super.call(this) || this;
        _this.joint = joint;
        // @ts-ignore
        joint.setJointType(ArticulationJointType.FIXED);
        return _this;
    }
    return JointTypeFixed;
}(JointTypeBase));
var JointTypeRevolute = /** @class */ (function (_super) {
    __extends(JointTypeRevolute, _super);
    function JointTypeRevolute(joint) {
        var _this = _super.call(this) || this;
        _this.joint = joint;
        _this.xDrive = new JointDriver(joint, ArticulationAxis.SWING2);
        // @ts-ignore
        joint.setJointType(ArticulationJointType.REVOLUTE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING2, ArticulationMotion.FREE);
        return _this;
    }
    Object.defineProperty(JointTypeRevolute.prototype, "motion", {
        get: function () {
            // @ts-ignore
            return this.joint.getMotion(ArticulationAxis.SWING2);
        },
        set: function (motion) {
            // @ts-ignore
            this.joint.setMotion(ArticulationAxis.SWING2, motion);
        },
        enumerable: false,
        configurable: true
    });
    return JointTypeRevolute;
}(JointTypeBase));
var JointTypeSpherical = /** @class */ (function (_super) {
    __extends(JointTypeSpherical, _super);
    function JointTypeSpherical(joint) {
        var _this = _super.call(this) || this;
        _this.joint = joint;
        _this.xDrive = new JointDriver(joint, ArticulationAxis.SWING1);
        _this.yDrive = new JointDriver(joint, ArticulationAxis.SWING2);
        _this.zDrive = new JointDriver(joint, ArticulationAxis.TWIST);
        // @ts-ignore
        joint.setJointType(ArticulationJointType.SPHERICAL);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING1, ArticulationMotion.FREE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING2, ArticulationMotion.FREE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.TWIST, ArticulationMotion.FREE);
        return _this;
    }
    Object.defineProperty(JointTypeSpherical.prototype, "swingY", {
        get: function () {
            // @ts-ignore
            return this.joint.getMotion(ArticulationAxis.SWING1);
        },
        set: function (swingY) {
            // @ts-ignore
            return this.joint.setMotion(ArticulationAxis.SWING1, swingY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointTypeSpherical.prototype, "swingZ", {
        get: function () {
            // @ts-ignore
            return this.joint.getMotion(ArticulationAxis.SWING2);
        },
        set: function (swingZ) {
            // @ts-ignore
            return this.joint.setMotion(ArticulationAxis.SWING2, swingZ);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointTypeSpherical.prototype, "twist", {
        get: function () {
            // @ts-ignore
            return this.joint.getMotion(ArticulationAxis.TWIST);
        },
        set: function (twist) {
            // @ts-ignore
            return this.joint.setMotion(ArticulationAxis.TWIST, twist);
        },
        enumerable: false,
        configurable: true
    });
    return JointTypeSpherical;
}(JointTypeBase));
var JointTypePrismatic = /** @class */ (function (_super) {
    __extends(JointTypePrismatic, _super);
    function JointTypePrismatic(physicsScene, articulation, joint) {
        var _this = _super.call(this) || this;
        _this.physicsScene = physicsScene;
        _this.articulation = articulation;
        _this.joint = joint;
        _this.drive = new JointDriver(joint, ArticulationAxis.X);
        // @ts-ignore
        joint.setJointType(ArticulationJointType.PRISMATIC);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.X, ArticulationMotion.FREE);
        _this.xDrive = _this.drive;
        _this._axis = ArticulationAxis.X;
        return _this;
    }
    Object.defineProperty(JointTypePrismatic.prototype, "motion", {
        get: function () {
            // @ts-ignore
            return this.joint.getMotion(this._axis);
        },
        set: function (motion) {
            // @ts-ignore
            this.joint.setMotion(this._axis, motion);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointTypePrismatic.prototype, "axis", {
        get: function () {
            return this._axis;
        },
        set: function (axis) {
            if (this._axis == axis)
                return;
            this.physicsScene.removeArticulation(this.articulation);
            this.xDrive = undefined;
            this.yDrive = undefined;
            this.zDrive = undefined;
            // @ts-ignore
            this.joint.setMotion(this._axis, ArticulationMotion.LOCKED);
            // @ts-ignore
            this.joint.setMotion(axis, ArticulationMotion.FREE);
            if (axis == ArticulationAxis.X) {
                this.drive.axis = ArticulationAxis.X;
                this.xDrive = this.drive;
            }
            else if (axis == ArticulationAxis.Y) {
                this.drive.axis = ArticulationAxis.Y;
                this.yDrive = this.drive;
            }
            else if (axis == ArticulationAxis.Z) {
                this.drive.axis = ArticulationAxis.Z;
                this.zDrive = this.drive;
            }
            this.physicsScene.addArticulation(this.articulation);
            this._axis = axis;
        },
        enumerable: false,
        configurable: true
    });
    return JointTypePrismatic;
}(JointTypeBase));
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
    Object.defineProperty(ArticulationBody.prototype, "articulationJointType", {
        get: function () {
            // @ts-ignore
            return this.joint.getJointType();
        },
        set: function (articulationJointType) {
            if (this.joint) {
                if (articulationJointType == ArticulationJointType.FIXED) {
                    this.jointType = new JointTypeFixed(this.joint);
                }
                else if (articulationJointType == ArticulationJointType.PRISMATIC) {
                    this.jointType = new JointTypePrismatic(this.gameObject.scene.GetPhysics().GetScene(), this.articulation, this.joint);
                }
                else if (articulationJointType == ArticulationJointType.REVOLUTE) {
                    this.jointType = new JointTypeRevolute(this.joint);
                }
                else if (articulationJointType == ArticulationJointType.SPHERICAL) {
                    this.jointType = new JointTypeSpherical(this.joint);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ArticulationBody.prototype.OnEnable = function () {
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();
        var position = new PhysX.PxVec3(this.transform.localPosition.x, this.transform.localPosition.y, this.transform.localPosition.z);
        var rotation = new PhysX.PxQuat(this.transform.localRotation.x, this.transform.localRotation.y, this.transform.localRotation.z, this.transform.localRotation.w);
        var pose = new PhysX.PxTransform(position, rotation);
        if (this.transform.parent) {
            var parentArticulation = this.transform.parent.gameObject.GetComponent(ArticulationBody);
            if (parentArticulation) {
                this.articulation = parentArticulation.articulation;
                // Articulation needs to be removed and added to the scene
                this.physicsScene.removeArticulation(this.articulation);
                this.link = this.articulation.createLink(parentArticulation.link, pose);
                var collider = this.gameObject.GetComponent(Collider);
                if (collider) {
                    collider.body.rigidbody.detachShape(collider.body.shape);
                    this.link.attachShape(collider.body.shape);
                    // @ts-ignore
                    PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
                }
                var inboundJoint = this.link.getInboundJoint();
                // @ts-ignore
                this.joint = PhysX.castObject(inboundJoint, PhysX.PxArticulationJointReducedCoordinate);
                this.articulationJointType = ArticulationJointType.FIXED;
                this.physicsScene.addArticulation(this.articulation);
            }
        }
        else {
            this.articulation = this.physics.createArticulationReducedCoordinate();
            this.link = this.articulation.createLink(null, pose);
            this.physicsScene.addArticulation(this.articulation);
        }
    };
    ArticulationBody.prototype.FixedUpdate = function () {
        var pose = this.link.getGlobalPose();
        this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);
        // No lazy articulations
        if (this.articulation) {
            this.articulation.wakeUp();
        }
    };
    return ArticulationBody;
}(Component));
export { ArticulationBody };
//# sourceMappingURL=ArticulationBody.js.map