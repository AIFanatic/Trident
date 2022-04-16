import PhysX from 'trident-physx-js-webidl';
import { Collider } from "./Collider";
import { MeshFilter } from './MeshFilter';

import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";
import { BufferGeometry } from 'three';

import { ConvertGeometryToIndexed, TrianglesModeEnum } from '../utils/ConvertGeometryToIndexed';

/**
 * Adds a static mesh collider to the GameObject.
 * 
 * A MeshCollider can either be convex or a trimesh.
 * 
 * @noInheritDoc
 */
export class MeshCollider extends Collider {
    private physxCooking: PhysX.PxCooking;

    private isConvex: boolean;

    public Awake() {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        this.physxCooking = this.gameObject.scene.GetPhysics().GetCooking();

        this.CreateCollider();
    }

    public MeshFilterModelChanged(mesh: BufferGeometry) {
        this.CreateCollider();
    }

    public CreateCollider() {
        const meshFilter = this.gameObject.GetComponent(MeshFilter) as MeshFilter;
        const bufferGeometry = meshFilter.mesh as BufferGeometry;

        if (!bufferGeometry) return;

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

    private CreateConvexCollider(bufferGeometry: BufferGeometry): boolean {
        const vertices = bufferGeometry.getAttribute("position").array as Float32Array;
        const shape = PhysicsShape.CreateConvex(this.physxPhysics, this.physxCooking, vertices);

        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }

        const geometry = shape.getGeometry().convexMesh();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(transform);

        const physicsBody: PhysicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        
        return true;
    }

    private CreateTrimeshCollider(bufferGeometry: BufferGeometry): boolean {
        const indexedBufferGeometry = bufferGeometry.index !== null ? bufferGeometry : ConvertGeometryToIndexed(bufferGeometry, TrianglesModeEnum.TriangleStripDrawMode)
            
        const vertices = indexedBufferGeometry.getAttribute("position").array as Float32Array;
        const indices = indexedBufferGeometry.getIndex().array as Uint16Array;

        const shape = PhysicsShape.CreateTrimesh(this.physxPhysics, this.physxCooking, vertices, indices);

        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }

        const geometry = shape.getGeometry().triangleMesh();
        const transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        const rigidbody = this.physxPhysics.createRigidStatic(transform);

        const physicsBody: PhysicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        
        return true;
    }
}