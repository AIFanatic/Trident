import { Collider } from "./Collider";
import { MeshFilter } from './MeshFilter';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { ConvertGeometryToIndexed, TrianglesModeEnum } from '../utils/ConvertGeometryToIndexed';
import { Runtime } from '../Runtime';
/**
 * Adds a static mesh collider to the GameObject.
 *
 * A MeshCollider can either be convex or a trimesh.
 *
 * @noInheritDoc
 */
export class MeshCollider extends Collider {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.physxCooking = Runtime.Physics.GetCooking();
        this.CreateCollider();
    }
    MeshFilterModelChanged(mesh) {
        this.CreateCollider();
    }
    CreateCollider() {
        const meshFilter = this.gameObject.GetComponent(MeshFilter);
        const bufferGeometry = meshFilter.mesh;
        if (!bufferGeometry)
            return;
        let createdCollider = false;
        if (this.isConvex) {
            createdCollider = this.CreateConvexCollider(bufferGeometry);
        }
        else {
            createdCollider = this.CreateTrimeshCollider(bufferGeometry);
        }
        if (createdCollider) {
            this.gameObject.BroadcastMessage("CreatedCollider", this.body);
        }
    }
    CreateConvexCollider(bufferGeometry) {
        const vertices = bufferGeometry.getAttribute("position").array;
        const shape = PhysicsShape.CreateConvex(this.physxPhysics, this.physxCooking, vertices);
        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }
        const geometry = shape.getGeometry().convexMesh();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(transform);
        const physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        return true;
    }
    CreateTrimeshCollider(bufferGeometry) {
        const indexedBufferGeometry = bufferGeometry.index !== null ? bufferGeometry : ConvertGeometryToIndexed(bufferGeometry, TrianglesModeEnum.TriangleStripDrawMode);
        const vertices = indexedBufferGeometry.getAttribute("position").array;
        const indices = indexedBufferGeometry.getIndex().array;
        const shape = PhysicsShape.CreateTrimesh(this.physxPhysics, this.physxCooking, vertices, indices);
        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }
        const geometry = shape.getGeometry().triangleMesh();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(transform);
        const physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        return true;
    }
}
//# sourceMappingURL=MeshCollider.js.map