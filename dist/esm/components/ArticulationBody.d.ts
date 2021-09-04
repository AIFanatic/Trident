import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationMotion } from "../enums/ArticulationMotion";
import { Component } from "./Component";
declare class JointDriver {
    private joint;
    private _axis;
    private _stiffness;
    private _damping;
    private _forceLimit;
    private _lowerLimit;
    private _upperLimit;
    get axis(): ArticulationAxis;
    set axis(axis: ArticulationAxis);
    get lowerLimit(): number;
    set lowerLimit(lowerLimit: number);
    get upperLimit(): number;
    set upperLimit(upperLimit: number);
    get stiffness(): number;
    set stiffness(stiffness: number);
    get damping(): number;
    set damping(damping: number);
    get forceLimit(): number;
    set forceLimit(forceLimit: number);
    get target(): number;
    set target(target: number);
    get targetVelocity(): number;
    set targetVelocity(targetVelocity: number);
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate, axis: ArticulationAxis);
}
declare class JointTypeBase {
    xDrive: JointDriver;
    yDrive: JointDriver;
    zDrive: JointDriver;
    protected joint: PhysX.PxArticulationJointReducedCoordinate;
}
declare class JointTypeFixed extends JointTypeBase {
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate);
}
declare class JointTypeRevolute extends JointTypeBase {
    get motion(): ArticulationMotion.FREE | ArticulationMotion.LIMITED;
    set motion(motion: ArticulationMotion.FREE | ArticulationMotion.LIMITED);
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate);
}
declare class JointTypeSpherical extends JointTypeBase {
    get swingY(): ArticulationMotion;
    set swingY(swingY: ArticulationMotion);
    get swingZ(): ArticulationMotion;
    set swingZ(swingZ: ArticulationMotion);
    get twist(): ArticulationMotion;
    set twist(twist: ArticulationMotion);
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate);
}
declare class JointTypePrismatic extends JointTypeBase {
    private physicsScene;
    private articulation;
    private _axis;
    private drive;
    get motion(): ArticulationMotion.FREE | ArticulationMotion.LIMITED;
    set motion(motion: ArticulationMotion.FREE | ArticulationMotion.LIMITED);
    get axis(): ArticulationAxis.X | ArticulationAxis.Y | ArticulationAxis.Z;
    set axis(axis: ArticulationAxis.X | ArticulationAxis.Y | ArticulationAxis.Z);
    constructor(physicsScene: PhysX.PxScene, articulation: PhysX.PxArticulationReducedCoordinate, joint: PhysX.PxArticulationJointReducedCoordinate);
}
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
export declare class ArticulationBody extends Component {
    joint: JointTypeFixed | JointTypePrismatic | JointTypeRevolute | JointTypeSpherical;
    private articulation;
    private link;
    private inboundJoint;
    private physics;
    private physicsScene;
    get immovable(): boolean;
    set immovable(immovable: boolean);
    get articulationJointType(): ArticulationJointType;
    set articulationJointType(articulationJointType: ArticulationJointType);
    OnEnable(): void;
    FixedUpdate(): void;
}
export {};
