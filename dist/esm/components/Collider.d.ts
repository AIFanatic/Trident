import { Component } from "./Component";
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
/**
 * Base collider class that all colliders extend.
 *
 * @noInheritDoc
 */
export declare class Collider extends Component {
    body: PhysicsRigidbody;
    private position;
    private rotation;
    private localScale;
    private previousLayer;
    Start(): void;
    private HandleTransformChanges;
    FixedUpdate(): void;
    Destroy(): void;
}
