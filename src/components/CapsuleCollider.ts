import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";

/**
 * Adds a static capsule collider to the GameObject.
 * 
 * @noInheritDoc
 */
export class CapsuleCollider extends Collider {
    public Awake() {
        const physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        const physxScene = this.gameObject.scene.GetPhysics().GetScene();

        const shape = PhysicsShape.CreateCapsule(physxPhysics, this.transform.localScale.x, this.transform.localScale.y + 1);
        const geometry = shape.getGeometry().capsule();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = physxPhysics.createRigidStatic(transform);

        const physicsBody: PhysicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        
        this.body = new PhysicsRigidbody(physxPhysics, physxScene, physicsBody);
        
        this.gameObject.BroadcastMessage("CreatedCollider", this.body);
    }
}