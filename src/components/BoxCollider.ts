import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";

/**
 * Adds a static box collider to the GameObject.
 * 
 * @noInheritDoc
 */
export class BoxCollider extends Collider {

    public Awake() {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();

        this.CreateCollider();
    }

    private CreateCollider() {
        const shape = PhysicsShape.CreateBox(this.physxPhysics, this.transform.localScale);

        const geometry = shape.getGeometry().box();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(transform);

        const physicsBody: PhysicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        this.gameObject.BroadcastMessage("CreatedCollider", this.body);
    }
}