import { PhysX } from "trident-physx-js-webidl";
import { Collider } from "./Collider";
import { Component } from "./Component";
import { SerializeField } from "../utils/SerializeField";
import { GameObject, Transform } from ".";
import { Runtime } from "../Runtime";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationMotion } from "../enums/ArticulationMotion";
import { ArticulationAxis } from "../enums/ArticulationAxis";

class JointDriver {
    private joint: PhysX.PxArticulationJointReducedCoordinate;
    private axis: PhysX.PxArticulationAxisEnum;

    private _stiffness = 0;
    private _damping = 0;
    private _forceLimit = 1000;
    private _lowerLimit = 0;
    private _upperLimit = 0;

    @SerializeField
    public get lowerLimit(): number {
        return this._lowerLimit;
    }

    public set lowerLimit(lowerLimit: number) {
        this.lowerLimit = lowerLimit;
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }

    @SerializeField
    public get upperLimit(): number {
        return this._upperLimit;
    }

    public set upperLimit(upperLimit: number) {
        this._upperLimit = upperLimit;
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }
    
    @SerializeField
    public get stiffness(): number {
        return this._stiffness;
    }

    public set stiffness(stiffness: number) {
        this._stiffness = stiffness;
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get damping(): number {
        return this._damping;
    }

    public set damping(damping: number) {
        this._damping = damping;
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get forceLimit(): number {
        return this._forceLimit;
    }

    public set forceLimit(forceLimit: number) {
        this._forceLimit = forceLimit;
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get target(): number {
        return this.joint.getDriveTarget(this.axis);
    }

    public set target(target: number) {
        this.joint.setDriveTarget(this.axis, target);
    }

    @SerializeField
    public get targetVelocity(): number {
        return this.joint.getDriveVelocity(this.axis);
    }

    public set targetVelocity(targetVelocity: number) {
        this.joint.setDriveVelocity(this.axis, targetVelocity);
    }

    constructor(joint: PhysX.PxArticulationJointReducedCoordinate, axis: PhysX.PxArticulationAxisEnum) {
        this.joint = joint;
        this.axis = axis;
    }
}

/**
 * An ArticulationBody is a joint chain that obbeys physics.
 * 
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 * 
 * @noInheritDoc
 */
export class ArticulationBody extends Component {
    @SerializeField(JointDriver)
    public xDrive: JointDriver;
    @SerializeField(JointDriver)
    public yDrive: JointDriver;
    @SerializeField(JointDriver)
    public zDrive: JointDriver;

    private articulation: PhysX.PxArticulationReducedCoordinate;
    private link: PhysX.PxArticulationLink;
    private inboundJoint: PhysX.PxArticulationJointReducedCoordinate;
    
    private physics: PhysX.PxPhysics;
    private physicsScene: PhysX.PxScene;

    @SerializeField
    public get immovable(): boolean {
        const flags = this.articulation.getArticulationFlags();
        return flags.isSet(PhysX.PxArticulationFlagEnum.FIX_BASE)
    }

    public set immovable(immovable: boolean) {
        this.articulation.setArticulationFlag(PhysX.PxArticulationFlagEnum.FIX_BASE, immovable);
    }

    @SerializeField(ArticulationJointType)
    public get jointType(): ArticulationJointType | PhysX.PxArticulationJointTypeEnum {
        return this.inboundJoint.getJointType();
    }

    public set jointType(jointType: ArticulationJointType | PhysX.PxArticulationJointTypeEnum) {
        if (this.inboundJoint) {
            if (jointType == PhysX.PxArticulationJointTypeEnum.FIX) {
                this.inboundJoint.setJointType(PhysX.PxArticulationJointTypeEnum.FIX);
            }
            else if (jointType == PhysX.PxArticulationJointTypeEnum.PRISMATIC) {
                this.inboundJoint.setJointType(PhysX.PxArticulationJointTypeEnum.PRISMATIC);
                this.xDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.X);
                this.yDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.Y);
                this.zDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.Z);
                
                this.linearLockX = PhysX.PxArticulationMotionEnum.FREE;
            }
            else if (jointType == PhysX.PxArticulationJointTypeEnum.REVOLUTE) {
                this.inboundJoint.setJointType(PhysX.PxArticulationJointTypeEnum.REVOLUTE);
                this.xDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.SWING1);
                this.yDrive = undefined;
                this.zDrive = undefined;
                
                this.swingZLock = PhysX.PxArticulationMotionEnum.FREE;
            }
            else if (jointType == PhysX.PxArticulationJointTypeEnum.SPHERICAL) {
                this.inboundJoint.setJointType(PhysX.PxArticulationJointTypeEnum.SPHERICAL);
                this.xDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.TWIST);
                this.yDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.SWING2);
                this.zDrive = new JointDriver(this.inboundJoint, PhysX.PxArticulationAxisEnum.SWING1);
                
                this.twistLock = PhysX.PxArticulationMotionEnum.FREE;
                this.swingYLock = PhysX.PxArticulationMotionEnum.FREE;
                this.swingZLock = PhysX.PxArticulationMotionEnum.FREE;
            }
        }
    }

    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    private setLinearLock(axis: PhysX.PxArticulationAxisEnum, motion: PhysX.PxArticulationMotionEnum) {
        // A Prismatic joint can only have one active axis and the articulation needs to be re-added to the scene.
        if (this.jointType == PhysX.PxArticulationJointTypeEnum.PRISMATIC) {
            this.physicsScene.removeArticulation(this.articulation);
            this.inboundJoint.setMotion(PhysX.PxArticulationAxisEnum.X, PhysX.PxArticulationMotionEnum.LOCKED);
            this.inboundJoint.setMotion(PhysX.PxArticulationAxisEnum.Y, PhysX.PxArticulationMotionEnum.LOCKED);
            this.inboundJoint.setMotion(PhysX.PxArticulationAxisEnum.Z, PhysX.PxArticulationMotionEnum.LOCKED);
            this.inboundJoint.setMotion(axis, motion);

            this.physicsScene.addArticulation(this.articulation);
            return;
        }

        this.inboundJoint.setMotion(axis, motion);
    }

    @SerializeField(ArticulationMotion)
    public get linearLockX(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.X);
    }

    public set linearLockX(linearLockX: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setLinearLock(PhysX.PxArticulationAxisEnum.X, linearLockX as PhysX.PxArticulationMotionEnum);
    }

    @SerializeField(ArticulationMotion)
    public get linearLockY(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.Y);
    }

    public set linearLockY(linearLockY: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setLinearLock(PhysX.PxArticulationAxisEnum.Y, linearLockY as PhysX.PxArticulationMotionEnum);
    }

    @SerializeField(ArticulationMotion)
    public get linearLockZ(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.Z);
    }

    public set linearLockZ(linearLockZ: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setLinearLock(PhysX.PxArticulationAxisEnum.Z, linearLockZ as PhysX.PxArticulationMotionEnum);
    }

    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    private setSwingLock(axis: ArticulationAxis | PhysX.PxArticulationAxisEnum, motion: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        // A Spherical joint needs to be re-added to the scene.
        if (this.jointType == PhysX.PxArticulationJointTypeEnum.SPHERICAL) {
            this.physicsScene.removeArticulation(this.articulation);
            this.inboundJoint.setMotion(axis as PhysX.PxArticulationAxisEnum, motion as PhysX.PxArticulationMotionEnum);

            this.physicsScene.addArticulation(this.articulation);
            return;
        }

        this.inboundJoint.setMotion(axis as PhysX.PxArticulationAxisEnum, motion as PhysX.PxArticulationMotionEnum);
    }

    @SerializeField(ArticulationMotion)
    public get swingYLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.SWING2);
    }

    public set swingYLock(swingYLock: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setSwingLock(PhysX.PxArticulationAxisEnum.SWING2, swingYLock);
    }

    @SerializeField(ArticulationMotion)
    public get swingZLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.SWING1);
    }

    public set swingZLock(swingZLock: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setSwingLock(PhysX.PxArticulationAxisEnum.SWING1, swingZLock);
    }

    @SerializeField(ArticulationMotion)
    public get twistLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum {
        return this.inboundJoint.getMotion(PhysX.PxArticulationAxisEnum.TWIST);
    }

    public set twistLock(twistLock: ArticulationMotion | PhysX.PxArticulationMotionEnum) {
        this.setSwingLock(PhysX.PxArticulationAxisEnum.TWIST, twistLock);
    }

    @SerializeField
    public get mass(): number {
        return this.link.getMass();
    }

    public set mass(mass: number) {
        this.link.setMass(mass);
    }

    @SerializeField
    public get linearDamping(): number {
        return this.link.getLinearDamping();
    }

    public set linearDamping(linearDamping: number) {
        this.link.setLinearDamping(linearDamping);
    }

    @SerializeField
    public get angularDamping(): number {
        return this.link.getAngularDamping();
    }

    public set angularDamping(angularDamping: number) {
        this.link.setAngularDamping(angularDamping);
    }

    private collider: Collider;
    private hasAttachedShape: boolean = false;
    private isRootArticulation: boolean = false;

    // TODO: Articulation needs several parameters setup at constrcution time, clean.
    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);
        
        this.physics = Runtime.Physics.GetPhysics();
        this.physicsScene = this.gameObject.scene.physicsScene;

        const parentArticulation: ArticulationBody = this.transform.parent ? this.transform.parent.gameObject.GetComponent(ArticulationBody) : null;

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

            this.jointType = PhysX.PxArticulationJointTypeEnum.FIX;

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

    public FixedUpdate() {
        if (!this.link) return;
        if (!this.inboundJoint) return;

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
        if (this.inboundJoint && this.jointType && this.jointType == PhysX.PxArticulationJointTypeEnum.PRISMATIC) {
            this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        }
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);

        // No lazy articulations
        if (this.articulation.isSleeping()) {
            this.articulation.wakeUp();
        }
    }

    public Destroy() {
        // TODO: Check if link is leaf
        if (this.link) {
            const collider = this.gameObject.GetComponent(Collider) as Collider;
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