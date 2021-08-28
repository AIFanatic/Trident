import PhysX from 'trident-physx-js-webidl';
import { Collider } from "./Collider";
import { Rigidbody } from './Rigidbody';
import { MeshFilter } from './MeshFilter';

import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { PhysicsBody } from "../physics/PhysicsBody";
import { BufferGeometry, TriangleStripDrawMode } from 'three';

import { ConvertGeometryToIndexed, TrianglesModeEnum } from '../utils/ConvertGeometryToIndexed';
import { LayerMask } from '../enums/LayerMask';

export class MeshCollider extends Collider {

    private physxPhysics: PhysX.PxPhysics;
    private physxScene: PhysX.PxScene;
    private physxCooking: PhysX.PxCooking;

    private _isConvex: boolean;

    public get isConvex(): boolean {
        return this._isConvex
    }

    public set isConvex(isConvex: boolean) {
        if (isConvex) {
            this.CreateConvexCollider();
        }
        else {
            this.CreateTrimeshCollider();
        }

        this._isConvex = isConvex;
    }

    public OnEnable() {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        this.physxCooking = this.gameObject.scene.GetPhysics().GetCooking();

        const rigidbodyComponent = this.gameObject.GetComponent(Rigidbody) as Rigidbody;

        if (rigidbodyComponent) {
            const shape = this.CreateTrimeshShape();
            this.body = rigidbodyComponent.body;
            this.body.UpdateShape(shape);
        }
        else {
            this.CreateTrimeshCollider();
        }
    }

    private GetGeometryFromMeshFilter(): BufferGeometry {
        const meshFilter = this.gameObject.GetComponent(MeshFilter) as MeshFilter;
        const mesh = meshFilter.mesh as BufferGeometry;
        return mesh;
    }

    private CreateConvexShape(): PhysX.PxShape {
        const bufferGeometry = this.GetGeometryFromMeshFilter();

        if (bufferGeometry) {
            const vertices = bufferGeometry.getAttribute("position").array as Float32Array;
            const shape = PhysicsShape.CreateConvex(this.physxPhysics, this.physxCooking, vertices);
            return shape;
        }
        return null;
    }

    private CreateConvexCollider() {
        const shape = this.CreateConvexShape();

        if (shape) {
            if (this.body) {
                this.body.UpdateShape(shape);
                return;
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
        }
    }

    private CreateTrimeshShape(): PhysX.PxShape {
        const bufferGeometry = this.GetGeometryFromMeshFilter();
        if (bufferGeometry) {
            const indexedBufferGeometry = bufferGeometry.index !== null ? bufferGeometry : ConvertGeometryToIndexed(bufferGeometry, TrianglesModeEnum.TriangleStripDrawMode)
            
            const vertices = indexedBufferGeometry.getAttribute("position").array as Float32Array;
            const indices = indexedBufferGeometry.getIndex().array as Uint16Array;
    
            const shape = PhysicsShape.CreateTrimesh(this.physxPhysics, this.physxCooking, vertices, indices);
            return shape;
        }
        return null;
    }

    private CreateTrimeshCollider() {
        const shape = this.CreateTrimeshShape();

        if (shape) {
            if (this.body) {
                this.body.UpdateShape(shape);
                return;
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
        }
    }
}