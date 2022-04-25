import { Component } from "./Component";
import { PhysX } from "trident-physx-js-webidl";
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
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
    Start(): void;
    private HandleTransformChanges;
    FixedUpdate(): void;
    Destroy(): void;
}
