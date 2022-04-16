import { Collider } from "./Collider";
/**
 * Adds a static plane collider to the GameObject.
 *
 * Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.
 *
 * @noInheritDoc
 */
export declare class PlaneCollider extends Collider {
    Awake(): void;
    Update(): void;
}
