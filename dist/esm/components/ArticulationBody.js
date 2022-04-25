var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PhysX } from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationDofLock } from "../enums/ArticulationDofLock";
import { Collider } from "./Collider";
import { Component } from "./Component";
import { SerializeField } from "../utils/SerializeField";
class JointDriver {
    constructor(joint, axis) {
        this._stiffness = 0;
        this._damping = 0;
        this._forceLimit = 1000;
        this._lowerLimit = 0;
        this._upperLimit = 0;
        this.joint = joint;
        this.axis = axis;
    }
    get lowerLimit() {
        return this._lowerLimit;
    }
    set lowerLimit(lowerLimit) {
        this.lowerLimit = lowerLimit;
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }
    get upperLimit() {
        return this._upperLimit;
    }
    set upperLimit(upperLimit) {
        this._upperLimit = upperLimit;
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }
    get stiffness() {
        return this._stiffness;
    }
    set stiffness(stiffness) {
        this._stiffness = stiffness;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }
    get damping() {
        return this._damping;
    }
    set damping(damping) {
        this._damping = damping;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }
    get forceLimit() {
        return this._forceLimit;
    }
    set forceLimit(forceLimit) {
        this._forceLimit = forceLimit;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }
    get target() {
        // @ts-ignore
        return this.joint.getDriveTarget(this.axis);
    }
    set target(target) {
        // @ts-ignore
        this.joint.setDriveTarget(this.axis, target);
    }
    get targetVelocity() {
        // @ts-ignore
        return this.joint.getDriveVelocity(this.axis);
    }
    set targetVelocity(targetVelocity) {
        // @ts-ignore
        this.joint.setDriveVelocity(this.axis, targetVelocity);
    }
}
__decorate([
    SerializeField
], JointDriver.prototype, "lowerLimit", null);
__decorate([
    SerializeField
], JointDriver.prototype, "upperLimit", null);
__decorate([
    SerializeField
], JointDriver.prototype, "stiffness", null);
__decorate([
    SerializeField
], JointDriver.prototype, "damping", null);
__decorate([
    SerializeField
], JointDriver.prototype, "forceLimit", null);
__decorate([
    SerializeField
], JointDriver.prototype, "target", null);
__decorate([
    SerializeField
], JointDriver.prototype, "targetVelocity", null);
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
export class ArticulationBody extends Component {
    // TODO: Articulation needs several parameters setup at constrcution time, clean.
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.hasAttachedShape = false;
        this.isRootArticulation = false;
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();
        const parentArticulation = this.transform.parent ? this.transform.parent.gameObject.GetComponent(ArticulationBody) : null;
        if (parentArticulation) {
            const position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            const rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
            const pose = new PhysX.PxTransform(position, rotation);
            this.articulation = parentArticulation.articulation;
            this.physicsScene.removeArticulation(this.articulation);
            this.link = this.articulation.createLink(parentArticulation.link, pose);
            this.collider = this.gameObject.GetComponent(Collider);
            // if (collider) {
            //     collider.body.rigidbody.detachShape(collider.body.shape);
            //     this.link.attachShape(collider.body.shape);
            // }
            const inboundJoint = this.link.getInboundJoint();
            // @ts-ignore
            this.inboundJoint = PhysX.castObject(inboundJoint, PhysX.PxArticulationJointReducedCoordinate);
            const p = this.transform.position.clone().sub(this.transform.parent.position);
            const localPosition = new PhysX.PxVec3(p.x, p.y, p.z);
            const localRotation = new PhysX.PxQuat(this.transform.localRotation.x, this.transform.localRotation.y, this.transform.localRotation.z, this.transform.localRotation.w);
            const localPose = new PhysX.PxTransform(localPosition, localRotation);
            this.inboundJoint.setParentPose(localPose);
            this.jointType = ArticulationJointType.FixedJoint;
            this.physicsScene.addArticulation(this.articulation);
        }
        else {
            const position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            const rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
            const pose = new PhysX.PxTransform(position, rotation);
            this.articulation = this.physics.createArticulationReducedCoordinate();
            this.link = this.articulation.createLink(null, pose);
            this.physicsScene.addArticulation(this.articulation);
            this.isRootArticulation = true;
        }
        this.link.setLinearDamping(0.05);
        this.link.setAngularDamping(0.05);
        if (this.inboundJoint) {
            this.inboundJoint.setFrictionCoefficient(0.05);
        }
        this.mass = 1;
        // @ts-ignore
        PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
    }
    get immovable() {
        const flags = this.articulation.getArticulationFlags();
        // @ts-ignore
        return flags.isSet(PhysX.eFIX_BASE);
    }
    set immovable(immovable) {
        // @ts-ignore
        this.articulation.setArticulationFlag(PhysX.eFIX_BASE, immovable);
    }
    get jointType() {
        // @ts-ignore
        return this.inboundJoint.getJointType();
    }
    set jointType(jointType) {
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
    }
    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    setLinearLock(axis, motion) {
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
    }
    get linearLockX() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.X);
    }
    set linearLockX(linearLockX) {
        this.setLinearLock(ArticulationAxis.X, linearLockX);
    }
    get linearLockY() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.Y);
    }
    set linearLockY(linearLockY) {
        this.setLinearLock(ArticulationAxis.Y, linearLockY);
    }
    get linearLockZ() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.Z);
    }
    set linearLockZ(linearLockZ) {
        this.setLinearLock(ArticulationAxis.Z, linearLockZ);
    }
    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    setSwingLock(axis, motion) {
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
    }
    get swingYLock() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.SWING2);
    }
    set swingYLock(swingYLock) {
        this.setSwingLock(ArticulationAxis.SWING2, swingYLock);
    }
    get swingZLock() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.SWING1);
    }
    set swingZLock(swingZLock) {
        // @ts-ignore
        this.setSwingLock(ArticulationAxis.SWING1, swingZLock);
    }
    get twistLock() {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.TWIST);
    }
    set twistLock(twistLock) {
        this.setSwingLock(ArticulationAxis.TWIST, twistLock);
    }
    get mass() {
        return this.link.getMass();
    }
    set mass(mass) {
        this.link.setMass(mass);
    }
    get linearDamping() {
        return this.link.getLinearDamping();
    }
    set linearDamping(linearDamping) {
        this.link.setLinearDamping(linearDamping);
    }
    get angularDamping() {
        return this.link.getAngularDamping();
    }
    set angularDamping(angularDamping) {
        this.link.setAngularDamping(angularDamping);
    }
    FixedUpdate() {
        if (!this.link)
            return;
        if (!this.inboundJoint)
            return;
        if (this.collider && !this.hasAttachedShape) {
            this.collider.body.rigidbody.detachShape(this.collider.body.shape);
            this.link.attachShape(this.collider.body.shape);
            // @ts-ignore
            PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
            this.hasAttachedShape = true;
        }
        const pose = this.link.getGlobalPose();
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
    }
    Destroy() {
        // TODO: Check if link is leaf
        if (this.link) {
            const collider = this.gameObject.GetComponent(Collider);
            if (collider) {
                this.link.detachShape(collider.body.shape);
                collider.body.rigidbody.attachShape(collider.body.shape);
            }
            if (this.isRootArticulation) {
                this.physicsScene.removeArticulation(this.articulation);
            }
            this.link.release();
            this.link = undefined;
            this.inboundJoint = undefined;
        }
        this.gameObject.RemoveComponent(this);
    }
}
__decorate([
    SerializeField(JointDriver)
], ArticulationBody.prototype, "xDrive", void 0);
__decorate([
    SerializeField(JointDriver)
], ArticulationBody.prototype, "yDrive", void 0);
__decorate([
    SerializeField(JointDriver)
], ArticulationBody.prototype, "zDrive", void 0);
__decorate([
    SerializeField
], ArticulationBody.prototype, "immovable", null);
__decorate([
    SerializeField(ArticulationJointType)
], ArticulationBody.prototype, "jointType", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "linearLockX", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "linearLockY", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "linearLockZ", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "swingYLock", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "swingZLock", null);
__decorate([
    SerializeField(ArticulationDofLock)
], ArticulationBody.prototype, "twistLock", null);
__decorate([
    SerializeField
], ArticulationBody.prototype, "mass", null);
__decorate([
    SerializeField
], ArticulationBody.prototype, "linearDamping", null);
__decorate([
    SerializeField
], ArticulationBody.prototype, "angularDamping", null);
//# sourceMappingURL=ArticulationBody.js.map