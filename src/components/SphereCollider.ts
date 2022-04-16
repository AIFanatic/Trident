import PhysX from 'trident-physx-js-webidl';
import { Collider } from "./Collider";
import { Rigidbody } from './Rigidbody';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";

/**
 * Adds a static sphere collider to the GameObject.
 * 
 * @noInheritDoc
 */
export class SphereCollider extends Collider {
    private physxPhysics: PhysX.PxPhysics;
    private physxScene: PhysX.PxScene;

    public Awake() {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();

        const rigidbodyComponent = this.gameObject.GetComponent(Rigidbody) as Rigidbody;

        if (rigidbodyComponent) {
            this.body = rigidbodyComponent.body;

            const shape = PhysicsShape.CreateSphere(this.physxPhysics, this.transform.localScale.length());
            
            this.body.UpdateShape(shape);
        }
        else {
            const shape = PhysicsShape.CreateSphere(this.physxPhysics, this.transform.localScale.length());
            const geometry = shape.getGeometry().sphere();
            const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
            const rigidbody = this.physxPhysics.createRigidStatic(transform);

            const physicsBody: PhysicsBody = {
                rigidbody: rigidbody,
                geometry: geometry,
                shape: shape
            };
            
            this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        }
    }
}