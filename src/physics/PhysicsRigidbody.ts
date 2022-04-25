import { Quaternion, Vector3 } from "three";
import { PhysicsBody } from "./PhysicsBody";
import { PhysX } from 'trident-physx-js-webidl';
import { PhysicsScale } from "./PhysicsScale";

export class PhysicsRigidbody {
    public rigidbody: PhysX.PxRigidStatic | PhysX.PxRigidDynamic;
    public geometry: PhysX.PxGeometry;
    public shape: PhysX.PxShape;

    private physics: PhysX.PxPhysics;
    private scene: PhysX.PxScene;

    constructor(physics: PhysX.PxPhysics, scene: PhysX.PxScene, body: PhysicsBody) {
        this.physics = physics;
        this.scene = scene;

        this.rigidbody = body.rigidbody;
        this.geometry = body.geometry,
        this.shape = body.shape

        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(body.rigidbody);
    }

    public ConvertToStatic(): boolean {
        if (!this.rigidbody || this.rigidbody instanceof PhysX.PxRigidDynamic) {
            return false;
        }
        this.rigidbody.detachShape(this.shape);
        this.scene.removeActor(this.rigidbody);

        const transform = this.rigidbody.getGlobalPose();
        const rigidbody = this.physics.createRigidStatic(transform);

        this.rigidbody = rigidbody;

        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(this.rigidbody);

        return true;
    }

    public ConvertToDynamic() {
        if (!this || this.rigidbody instanceof PhysX.PxRigidDynamic) {
            return false;
        }
        this.rigidbody.detachShape(this.shape);
        this.scene.removeActor(this.rigidbody);

        const transform = this.rigidbody.getGlobalPose();
        const rigidbody = this.physics.createRigidDynamic(transform);

        this.rigidbody = rigidbody;

        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(this.rigidbody);

        return true; 
    }

    public UpdateShape(shape: PhysX.PxShape) {
        this.rigidbody.detachShape(this.shape);
        this.shape = shape;
        this.rigidbody.attachShape(shape);
    }

    public UpdateGeometry(geometry: PhysX.PxGeometry) {
        this.shape.setGeometry(geometry);
    }

    public UpdatePose(position: Vector3, rotation: Quaternion, scale: Vector3): boolean {
        const pxVec3 = new PhysX.PxVec3(position.x, position.y, position.z);
        const pxQuat = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);

        const transform = new PhysX.PxTransform(pxVec3, pxQuat);

        this.rigidbody.setGlobalPose(transform);
        PhysicsScale.ScaleShape(this.shape, scale);

        return true;
    }

    public UpdatePosition(position: Vector3): boolean {
        const transform = this.rigidbody.getGlobalPose();
        transform.p.x = position.x;
        transform.p.y = position.y;
        transform.p.z = position.z;

        this.rigidbody.setGlobalPose(transform);

        return true;
    }

    public UpdateRotation(rotation: Quaternion): boolean {
        const transform = this.rigidbody.getGlobalPose();
        transform.q.x = rotation.x;
        transform.q.y = rotation.y;
        transform.q.z = rotation.z;
        transform.q.w = rotation.w;

        this.rigidbody.setGlobalPose(transform);

        return true;
    }

    public UpdateScale(scale: Vector3): boolean {
        PhysicsScale.ScaleShape(this.shape, scale);

        return true;
    }
}