import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
/**
 * Adds a static sphere collider to the GameObject.
 *
 * @noInheritDoc
 */
export class SphereCollider extends Collider {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        const shape = PhysicsShape.CreateSphere(this.physxPhysics, this.transform.localScale.length());
        const geometry = shape.getGeometry().sphere();
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
//# sourceMappingURL=SphereCollider.js.map