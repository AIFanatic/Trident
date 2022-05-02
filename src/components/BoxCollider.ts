import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
import { Runtime } from "../Runtime";

/**
 * Adds a static box collider to the GameObject.
 * 
 * @noInheritDoc
 */
export class BoxCollider extends Collider {

    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);

        const shape = PhysicsShape.CreateBox(this.physxPhysics, this.transform.localScale);

        const geometry = shape.getGeometry().box();
        const physxTransform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(physxTransform);

        const physicsBody: PhysicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        this.gameObject.BroadcastMessage("CreatedCollider", this.body);
    }
}