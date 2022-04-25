import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * Adds a static capsule collider to the GameObject.
 *
 * @noInheritDoc
 */
export declare class CapsuleCollider extends Collider {
    constructor(gameObject: GameObject, transform: Transform);
}
