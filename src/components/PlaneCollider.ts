import { Collider } from "./Collider";
import { Rigidbody } from './Rigidbody';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";

/**
 * Adds a static plane collider to the GameObject.
 * 
 * Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.
 * 
 * @noInheritDoc
 */
export class PlaneCollider extends Collider {
    public Awake() {
        const physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        const physxScene = this.gameObject.scene.GetPhysics().GetScene();

        const rigidbodyComponent = this.gameObject.GetComponent(Rigidbody) as Rigidbody;
        const shape = PhysicsShape.CreatePlane(physxPhysics, this.transform.localScale.x, this.transform.localScale.z);

        if (rigidbodyComponent) {
            this.body = rigidbodyComponent.body;
            this.body.UpdateShape(shape);
        }
        else {
            const geometry = shape.getGeometry().box();
            const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
            const rigidbody = physxPhysics.createRigidStatic(transform);

            const physicsBody: PhysicsBody = {
                rigidbody: rigidbody,
                geometry: geometry,
                shape: shape
            };
            
            this.body = new PhysicsRigidbody(physxPhysics, physxScene, physicsBody);
        }
    }

    // Hacky, but plane is a box therefore PhysicsScale will treat it as a box and forcing Y scale
    public Update() {
        this.transform.localScale.y = 0.01;
    }
}