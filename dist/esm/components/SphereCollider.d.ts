import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * Adds a static sphere collider to the GameObject.
 *
 * @noInheritDoc
 */
export declare class SphereCollider extends Collider {
    constructor(gameObject: GameObject, transform: Transform);
}
