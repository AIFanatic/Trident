import { PhysX } from "trident-physx-js-webidl";
import { Component } from "./Component";
import { GameObject, Transform } from ".";
import { ArticulationJointType } from "../enums/ArticulationJointType";
import { ArticulationMotion } from "../enums/ArticulationMotion";
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
    constructor(joint: PhysX.PxArticulationJointReducedCoordinate, axis: PhysX.PxArticulationAxisEnum);
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
    get jointType(): ArticulationJointType | PhysX.PxArticulationJointTypeEnum;
    set jointType(jointType: ArticulationJointType | PhysX.PxArticulationJointTypeEnum);
    private setLinearLock;
    get linearLockX(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set linearLockX(linearLockX: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    get linearLockY(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set linearLockY(linearLockY: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    get linearLockZ(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set linearLockZ(linearLockZ: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    private setSwingLock;
    get swingYLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set swingYLock(swingYLock: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    get swingZLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set swingZLock(swingZLock: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    get twistLock(): ArticulationMotion | PhysX.PxArticulationMotionEnum;
    set twistLock(twistLock: ArticulationMotion | PhysX.PxArticulationMotionEnum);
    get mass(): number;
    set mass(mass: number);
    get linearDamping(): number;
    set linearDamping(linearDamping: number);
    get angularDamping(): number;
    set angularDamping(angularDamping: number);
    private collider;
    private hasAttachedShape;
    private isRootArticulation;
    constructor(gameObject: GameObject, transform: Transform);
    FixedUpdate(): void;
    Destroy(): void;
}
export {};
