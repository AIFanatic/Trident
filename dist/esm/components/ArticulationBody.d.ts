import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../enums/ArticulationAxis";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationDofLock } from "../enums/ArticulationDofLock";
import { Component } from "./Component";
declare class JointDriver {
    private joint;
    private axis;
    private _stiffness;
    private _damping;
    private _forceLimit;
    private _lowerLimit;
    private _upperLimit;
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
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
export declare class ArticulationBody extends Component {
    xDrive: JointDriver;
    yDrive: JointDriver;
    zDrive: JointDriver;
    private articulation;
    private link;
    private inboundJoint;
    private physics;
    private physicsScene;
    get immovable(): boolean;
    set immovable(immovable: boolean);
    get jointType(): ArticulationJointType;
    set jointType(jointType: ArticulationJointType);
    private setLinearLock;
    get linearLockX(): ArticulationDofLock;
    set linearLockX(linearLockX: ArticulationDofLock);
    get linearLockY(): ArticulationDofLock;
    set linearLockY(linearLockY: ArticulationDofLock);
    get linearLockZ(): ArticulationDofLock;
    set linearLockZ(linearLockZ: ArticulationDofLock);
    private setSwingLock;
    get swingYLock(): ArticulationDofLock;
    set swingYLock(swingYLock: ArticulationDofLock);
    get swingZLock(): ArticulationDofLock;
    set swingZLock(swingZLock: ArticulationDofLock);
    get twistLock(): ArticulationDofLock;
    set twistLock(twistLock: ArticulationDofLock);
    get mass(): number;
    set mass(mass: number);
    OnEnable(): void;
    FixedUpdate(): void;
    Destroy(): void;
}
export {};
