import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationMotion } from "../enums/ArticulationMotion";
import { Collider } from "./Collider";
import { Component } from "./Component";

class JointDriver {
    private joint: PhysX.PxArticulationJointReducedCoordinate;
    private _axis: ArticulationAxis;

    private _stiffness = 0;
    private _damping = 0;
    private _forceLimit = 1000;
    private _lowerLimit = 0;
    private _upperLimit = 0;

    public get axis(): ArticulationAxis {
        return this._axis;
    }

    public set axis(axis: ArticulationAxis) {
        this._axis = axis;
    }

    public get lowerLimit(): number {
        return this._lowerLimit;
    }

    public set lowerLimit(lowerLimit: number) {
        this.lowerLimit = lowerLimit;
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }

    public get upperLimit(): number {
        return this._upperLimit;
    }

    public set upperLimit(upperLimit: number) {
        this._upperLimit = upperLimit;
        // @ts-ignore
        this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
    }
    
    public get stiffness(): number {
        return this._stiffness;
    }

    public set stiffness(stiffness: number) {
        this._stiffness = stiffness;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    public get damping(): number {
        return this._damping;
    }

    public set damping(damping: number) {
        this._damping = damping;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    public get forceLimit(): number {
        return this._forceLimit;
    }

    public set forceLimit(forceLimit: number) {
        this._forceLimit = forceLimit;
        // @ts-ignore
        this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
    }

    public get target(): number {
        // @ts-ignore
        return this.joint.getDriveTarget(this.axis);
    }

    public set target(target: number) {
        // @ts-ignore
        this.joint.setDriveTarget(this.axis, target);
    }

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
        // @ts-ignore
        this.axis = axis;
    }
}

class JointTypeBase {
    public xDrive: JointDriver;
    public yDrive: JointDriver;
    public zDrive: JointDriver;
    protected joint: PhysX.PxArticulationJointReducedCoordinate;
}

class JointTypeFixed extends JointTypeBase {
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate) {
        super();
        this.joint = joint;
        // @ts-ignore
        joint.setJointType(ArticulationJointType.FIXED);
    }
}

class JointTypeRevolute extends JointTypeBase {

    public get motion(): ArticulationMotion.FREE | ArticulationMotion.LIMITED {
        // @ts-ignore
        return this.joint.getMotion(ArticulationAxis.SWING2);
    }

    public set motion(motion: ArticulationMotion.FREE | ArticulationMotion.LIMITED) {
        // @ts-ignore
        this.joint.setMotion(ArticulationAxis.SWING2, motion);
    }

    constructor(joint: PhysX.PxArticulationJointReducedCoordinate) {
        super();
        this.joint = joint;
        this.xDrive = new JointDriver(joint, ArticulationAxis.SWING2);

        // @ts-ignore
        joint.setJointType(ArticulationJointType.REVOLUTE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING2, ArticulationMotion.FREE);
    }
}

class JointTypeSpherical extends JointTypeBase {
    public get swingY(): ArticulationMotion {
        // @ts-ignore
        return this.joint.getMotion(ArticulationAxis.SWING1);
    }
    
    public set swingY(swingY: ArticulationMotion) {
        // @ts-ignore
        return this.joint.setMotion(ArticulationAxis.SWING1, swingY);
    }

    public get swingZ(): ArticulationMotion {
        // @ts-ignore
        return this.joint.getMotion(ArticulationAxis.SWING2);
    }
    
    public set swingZ(swingZ: ArticulationMotion) {
        // @ts-ignore
        return this.joint.setMotion(ArticulationAxis.SWING2, swingZ);
    }

    public get twist(): ArticulationMotion {
        // @ts-ignore
        return this.joint.getMotion(ArticulationAxis.TWIST);
    }
    
    public set twist(twist: ArticulationMotion) {
        // @ts-ignore
        return this.joint.setMotion(ArticulationAxis.TWIST, twist);
    }

    constructor(joint: PhysX.PxArticulationJointReducedCoordinate) {
        super();
        this.joint = joint;
        this.xDrive = new JointDriver(joint, ArticulationAxis.SWING1);
        this.yDrive = new JointDriver(joint, ArticulationAxis.SWING2);
        this.zDrive = new JointDriver(joint, ArticulationAxis.TWIST);

        // @ts-ignore
        joint.setJointType(ArticulationJointType.SPHERICAL);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING1, ArticulationMotion.FREE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.SWING2, ArticulationMotion.FREE);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.TWIST, ArticulationMotion.FREE);
    }
}

class JointTypePrismatic  extends JointTypeBase {
    private physicsScene: PhysX.PxScene;
    private articulation: PhysX.PxArticulationReducedCoordinate;
    private _axis: ArticulationAxis.X | ArticulationAxis.Y | ArticulationAxis.Z;
    private drive: JointDriver;

    public get motion(): ArticulationMotion.FREE | ArticulationMotion.LIMITED {
        // @ts-ignore
        return this.joint.getMotion(this._axis);
    }

    public set motion(motion: ArticulationMotion.FREE | ArticulationMotion.LIMITED) {
        // @ts-ignore
        this.joint.setMotion(this._axis, motion);
    }

    public get axis() {
        return this._axis;
    }

    public set axis(axis: ArticulationAxis.X | ArticulationAxis.Y | ArticulationAxis.Z) {
        if (this._axis == axis) return;

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
    }

    constructor(physicsScene: PhysX.PxScene, articulation: PhysX.PxArticulationReducedCoordinate, joint: PhysX.PxArticulationJointReducedCoordinate) {
        super();
        this.physicsScene = physicsScene;
        this.articulation = articulation;
        this.joint = joint;

        this.drive = new JointDriver(joint, ArticulationAxis.X);
        
        // @ts-ignore
        joint.setJointType(ArticulationJointType.PRISMATIC);
        // @ts-ignore
        joint.setMotion(ArticulationAxis.X, ArticulationMotion.FREE);

        this.xDrive = this.drive;
        this._axis = ArticulationAxis.X;
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
    public articulation: PhysX.PxArticulationReducedCoordinate;
    public link: PhysX.PxArticulationLink;
    public joint: PhysX.PxArticulationJointReducedCoordinate;
    private rigidActor: PhysX.PxRigidActorExt;
    
    private physics: PhysX.PxPhysics;
    private physicsScene: PhysX.PxScene;

    public jointType: JointTypeFixed | JointTypePrismatic | JointTypeRevolute | JointTypeSpherical;

    public get immovable(): boolean {
        const flags = this.articulation.getArticulationFlags();
        // @ts-ignore
        return flags.isSet(PhysX.eFIX_BASE)
    }

    public set immovable(immovable: boolean) {
        // @ts-ignore
        this.articulation.setArticulationFlag(PhysX.eFIX_BASE, immovable);
    }

    public get articulationJointType(): ArticulationJointType {
        // @ts-ignore
        return this.joint.getJointType();
    }

    public set articulationJointType(articulationJointType: ArticulationJointType) {
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
    }

    public OnEnable() {
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();
        
        const position = new PhysX.PxVec3(this.transform.localPosition.x, this.transform.localPosition.y, this.transform.localPosition.z);
        const rotation = new PhysX.PxQuat(this.transform.localRotation.x, this.transform.localRotation.y, this.transform.localRotation.z, this.transform.localRotation.w);
        const pose = new PhysX.PxTransform(position, rotation);
        
        if (this.transform.parent) {
            const parentArticulation = this.transform.parent.gameObject.GetComponent(ArticulationBody) as ArticulationBody;

            if (parentArticulation) {
                
                this.articulation = parentArticulation.articulation;
                // Articulation needs to be removed and added to the scene
                this.physicsScene.removeArticulation(this.articulation);
                this.link = this.articulation.createLink(parentArticulation.link, pose);
                
                const collider = this.gameObject.GetComponent(Collider) as Collider;
                if (collider) {
                    collider.body.rigidbody.detachShape(collider.body.shape);
                    this.link.attachShape(collider.body.shape);
                    // @ts-ignore
                    PhysX.PxRigidBodyExt.prototype.updateMassAndInertia(this.link, 1);
                }

                const inboundJoint = this.link.getInboundJoint();
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
    }

    public FixedUpdate() {
        const pose = this.link.getGlobalPose();

        this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);

        // No lazy articulations
        if (this.articulation) {
            this.articulation.wakeUp();
        }
    }
}