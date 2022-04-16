import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationDofLock } from "../enums/ArticulationDofLock";
import { Collider } from "./Collider";
import { Component } from "./Component";
import { SerializeField } from "../utils/SerializeField";
import { GameObject, Transform } from ".";

class JointDriver {
    private joint: PhysX.PxArticulationJointReducedCoordinate;
    private axis: ArticulationAxis;

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
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }

    @SerializeField
    public get upperLimit(): number {
        return this._upperLimit;
    }

    public set upperLimit(upperLimit: number) {
        this._upperLimit = upperLimit;
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }
    
    @SerializeField
    public get stiffness(): number {
        return this._stiffness;
    }

    public set stiffness(stiffness: number) {
        this._stiffness = stiffness;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get damping(): number {
        return this._damping;
    }

    public set damping(damping: number) {
        this._damping = damping;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get forceLimit(): number {
        return this._forceLimit;
    }

    public set forceLimit(forceLimit: number) {
        this._forceLimit = forceLimit;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    @SerializeField
    public get target(): number {
        // @ts-ignore
        return this.joint.getDriveTarget(this.axis);
    }

    public set target(target: number) {
        // @ts-ignore
        this.joint.setDriveTarget(this.axis, target);
    }

    @SerializeField
    public get targetVelocity(): number {
        // @ts-ignore
        return this.joint.getDriveVelocity(this.axis);
    }

    public set targetVelocity(targetVelocity: number) {
        // @ts-ignore
        this.joint.setDriveVelocity(this.axis, targetVelocity);
    }

    constructor(joint: PhysX.PxArticulationJointReducedCoordinate, axis: ArticulationAxis) {
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
    public runInEditMode = true;
    
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
        // @ts-ignore
        return flags.isSet(PhysX.eFIX_BASE)
    }

    public set immovable(immovable: boolean) {
        // @ts-ignore
        this.articulation.setArticulationFlag(PhysX.eFIX_BASE, immovable);
    }

    @SerializeField(ArticulationJointType)
    public get jointType(): ArticulationJointType {
        // @ts-ignore
        return this.inboundJoint.getJointType();
    }

    public set jointType(jointType: ArticulationJointType) {
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
    private setLinearLock(axis: ArticulationAxis, motion: ArticulationDofLock) {
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

    @SerializeField(ArticulationDofLock)
    public get linearLockX(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.X);
    }

    public set linearLockX(linearLockX: ArticulationDofLock) {
        this.setLinearLock(ArticulationAxis.X, linearLockX);
    }

    @SerializeField(ArticulationDofLock)
    public get linearLockY(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.Y);
    }

    public set linearLockY(linearLockY: ArticulationDofLock) {
        this.setLinearLock(ArticulationAxis.Y, linearLockY);
    }

    @SerializeField(ArticulationDofLock)
    public get linearLockZ(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.Z);
    }

    public set linearLockZ(linearLockZ: ArticulationDofLock) {
        this.setLinearLock(ArticulationAxis.Z, linearLockZ);
    }

    // TOOD: Why does the articulation need to be re-added? May have to do with existing forces
    private setSwingLock(axis: ArticulationAxis, motion: ArticulationDofLock) {
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

    @SerializeField(ArticulationDofLock)
    public get swingYLock(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.SWING2);
    }

    public set swingYLock(swingYLock: ArticulationDofLock) {
        this.setSwingLock(ArticulationAxis.SWING2, swingYLock);
    }

    @SerializeField(ArticulationDofLock)
    public get swingZLock(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.SWING1);
    }

    public set swingZLock(swingZLock: ArticulationDofLock) {
        // @ts-ignore
        this.setSwingLock(ArticulationAxis.SWING1, swingZLock);
    }

    @SerializeField(ArticulationDofLock)
    public get twistLock(): ArticulationDofLock {
        // @ts-ignore
        return this.inboundJoint.getMotion(ArticulationAxis.TWIST);
    }

    public set twistLock(twistLock: ArticulationDofLock) {
        this.setSwingLock(ArticulationAxis.TWIST, twistLock);
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

    // TODO: Articulation needs several parameters setup at constrcution time, clean.
    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);
        
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();

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

    public Awake() {
        // const parentArticulation: ArticulationBody = this.transform.parent ? this.transform.parent.gameObject.GetComponent(ArticulationBody) : null;

        // if (parentArticulation) {
        //     const position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
        //     const rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
        //     const pose = new PhysX.PxTransform(position, rotation);
            
        //     this.articulation = parentArticulation.articulation;
        //     this.physicsScene.removeArticulation(this.articulation);
        //     this.link = this.articulation.createLink(parentArticulation.link, pose);
            
        //     this.collider = this.gameObject.GetComponent(Collider);
        //     // if (collider) {
        //     //     collider.body.rigidbody.detachShape(collider.body.shape);
        //     //     this.link.attachShape(collider.body.shape);
        //     // }

        //     const inboundJoint = this.link.getInboundJoint();
        //     // @ts-ignore
        //     this.inboundJoint = PhysX.castObject(inboundJoint, PhysX.PxArticulationJointReducedCoordinate);


        //     const p = this.transform.position.clone().sub(this.transform.parent.position);
        //     const localPosition = new PhysX.PxVec3(p.x, p.y, p.z);
        //     const localRotation = new PhysX.PxQuat(this.transform.localRotation.x, this.transform.localRotation.y, this.transform.localRotation.z, this.transform.localRotation.w);
        //     const localPose = new PhysX.PxTransform(localPosition, localRotation);
            
        //     this.inboundJoint.setParentPose(localPose);

        //     this.jointType = ArticulationJointType.FixedJoint;

        //     this.physicsScene.addArticulation(this.articulation);
        // }
        // else {
        //     const position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
        //     const rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
        //     const pose = new PhysX.PxTransform(position, rotation);

        //     this.articulation = this.physics.createArticulationReducedCoordinate();
        //     this.link = this.articulation.createLink(null, pose);
        //     this.physicsScene.addArticulation(this.articulation);
        // }

        // this.link.setLinearDamping(0.05);
        // this.link.setAngularDamping(0.05);
        // if (this.inboundJoint) {
        //     this.inboundJoint.setFrictionCoefficient(0.05);
        // }
        // this.mass = 1;

        // // @ts-ignore
        // PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
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
        if (this.inboundJoint && this.jointType && this.jointType == ArticulationJointType.PrismaticJoint) {
            this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        }
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);

        // No lazy articulations
        if (this.articulation) {
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
            this.link.release();
            this.link = undefined;
            this.inboundJoint = undefined;
        }
        this.gameObject.RemoveComponent(this);
    }
}