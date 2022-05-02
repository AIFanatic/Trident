import { Component } from "./Component";
import { PhysX } from "trident-physx-js-webidl";
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * Base collider class that all colliders extend.
 *
 * @noInheritDoc
 */
export declare class Collider extends Component {
    body: PhysicsRigidbody;
    protected physxPhysics: PhysX.PxPhysics;
    protected physxScene: PhysX.PxScene;
    private position;
    private rotation;
    private localScale;
    private previousLayer;
    constructor(gameObject: GameObject, transform: Transform);
    Start(): void;
    private HandleTransformChanges;
    FixedUpdate(): void;
    Destroy(): void;
}
