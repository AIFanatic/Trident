import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
/**
 * Adds a static plane collider to the GameObject.
 *
 * Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.
 *
 * @noInheritDoc
 */
export class PlaneCollider extends Collider {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        const shape = PhysicsShape.CreatePlane(this.physxPhysics, this.transform.localScale.x, this.transform.localScale.z);
        const geometry = shape.getGeometry().box();
        const physxTransform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(physxTransform);
        const physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        this.gameObject.BroadcastMessage("CreatedCollider", this.body);
    }
    // Hacky, but plane is a box therefore PhysicsScale will treat it as a box and forcing Y scale
    Update() {
        this.transform.localScale.y = 0.01;
    }
}
//# sourceMappingURL=PlaneCollider.js.map