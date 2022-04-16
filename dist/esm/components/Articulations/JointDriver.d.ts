import PhysX from "trident-physx-js-webidl";
import { ArticulationAxis } from "../../enums/ArticulationAxis";
export declare class JointDriver {
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
