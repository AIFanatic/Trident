import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
/**
 * Adds a static capsule collider to the GameObject.
 *
 * @noInheritDoc
 */
export class CapsuleCollider extends Collider {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        const shape = PhysicsShape.CreateCapsule(this.physxPhysics, this.transform.localScale.x, this.transform.localScale.y + 1);
        const geometry = shape.getGeometry().capsule();
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
}
//# sourceMappingURL=CapsuleCollider.js.map