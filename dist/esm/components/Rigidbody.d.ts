import { Vector3 } from 'three';
import { Component } from "./Component";
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
import { ForceMode } from '../enums/ForceMode';
import { RigidbodyConstraints } from '../enums/RigidbodyConstraints';
import { GameObject } from './GameObject';
import { Transform } from './Transform';
/**
 * RigidBody adds physics properties to an object.
 *
 * When added the GameObject Transform will be controlled by the RigidBody component.
 *
 * Rigid bodies obbey physics such as gravity collisions etc, therefore it should only by controlled
 * with forces, although setting the position, rotation, scale directly works.
 *
 * @noInheritDoc
 */
export declare class Rigidbody extends Component {
    private physxPhysics;
    private physxScene;
    body: PhysicsRigidbody;
    private rigidbody;
    private position;
    private rotation;
    private localScale;
    private previousLayer;
    /**
     * Set or get the kinematic propery of the rigid body.
     * Kinematic rigid bodies will not obey physics
     *
     * @returns True if the object is kinematic, false otherwise
     */
    get isKinematic(): boolean;
    set isKinematic(kinematic: boolean);
    get mass(): number;
    set mass(mass: number);
    get velocity(): Vector3;
    set velocity(velocity: Vector3);
    get angularVelocity(): Vector3;
    set angularVelocity(angularVelocity: Vector3);
    get drag(): number;
    set drag(drag: number);
    get angularDrag(): number;
    set angularDrag(angularDrag: number);
    set constraints(constraint: RigidbodyConstraints);
    AddForce(force: Vector3, mode?: ForceMode): void;
    AddTorque(torque: Vector3, mode?: ForceMode): void;
    MovePosition(position: Vector3): void;
    constructor(gameObject: GameObject, transform: Transform);
    CreatedCollider(body: PhysicsRigidbody): void;
    private HandleTransformChanges;
    FixedUpdate(): void;
    Destroy(): void;
}
