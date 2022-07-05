import { Collider } from "./Collider";
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { Runtime } from "../Runtime";
import { TerrainData } from "./TerrainData";
import { PhysX } from "trident-physx-js-webidl";
/**
 * Adds a static terrain collider to the GameObject.
 *
 * @noInheritDoc
 */
export class TerrainCollider extends Collider {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.terrainData = new TerrainData();
        this.CreateCollider();
    }
    CreateCollider() {
        const terrainDataHeights = this.terrainData.GetHeights();
        const samples = new PhysX.Vector_PxHeightFieldSample(this.terrainData.detailResolution * this.terrainData.detailResolution);
        for (let i = 0; i < terrainDataHeights.length; i++) {
            samples.at(i).height = terrainDataHeights[i];
        }
        const shape = PhysicsShape.CreateHightField(this.physxPhysics, Runtime.Physics.GetCooking(), this.terrainData.detailResolution, this.terrainData.detailResolution, this.terrainData.detailWidth / this.terrainData.detailResolution, this.terrainData.detailHeight / this.terrainData.detailResolution, 1, samples);
        const geometry = shape.getGeometry().heightField();
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
//# sourceMappingURL=TerrainCollider.js.map