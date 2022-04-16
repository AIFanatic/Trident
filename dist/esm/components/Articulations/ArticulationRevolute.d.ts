import { ArticulationJointType } from "../../enums/ArticulationJointType";
import { ArticulationDofLock } from "../../enums/ArticulationDofLock";
import { Component } from "./../Component";
import { JointDriver } from "./JointDriver";
/**
 * An ArticulationBody is a joint chain that obbeys physics.
 *
 * Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.
 *
 * @noInheritDoc
 */
export declare class ArticulationRevolute extends Component {
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
    Awake(): void;
    FixedUpdate(): void;
    Destroy(): void;
}
