import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * Adds a static plane collider to the GameObject.
 *
 * Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.
 *
 * @noInheritDoc
 */
export declare class PlaneCollider extends Collider {
    constructor(gameObject: GameObject, transform: Transform);
    Update(): void;
}
