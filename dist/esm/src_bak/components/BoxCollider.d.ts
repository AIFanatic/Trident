import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * Adds a static box collider to the GameObject.
 *
 * @noInheritDoc
 */
export declare class BoxCollider extends Collider {
    constructor(gameObject: GameObject, transform: Transform);
}
