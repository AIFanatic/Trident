import { PhysX } from 'trident-physx-js-webidl';
import { PhysicsScale } from "./PhysicsScale";
export class PhysicsRigidbody {
    constructor(physics, scene, body) {
        this.physics = physics;
        this.scene = scene;
        this.rigidbody = body.rigidbody;
        this.geometry = body.geometry,
            this.shape = body.shape;
        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(body.rigidbody);
    }
    ConvertToStatic() {
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
    ConvertToDynamic() {
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
    UpdateShape(shape) {
        this.rigidbody.detachShape(this.shape);
        this.shape = shape;
        this.rigidbody.attachShape(shape);
    }
    UpdateGeometry(geometry) {
        this.shape.setGeometry(geometry);
    }
    UpdatePose(position, rotation, scale) {
        const pxVec3 = new PhysX.PxVec3(position.x, position.y, position.z);
        const pxQuat = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);
        const transform = new PhysX.PxTransform(pxVec3, pxQuat);
        this.rigidbody.setGlobalPose(transform);
        PhysicsScale.ScaleShape(this.shape, scale);
        return true;
    }
    UpdatePosition(position) {
        const transform = this.rigidbody.getGlobalPose();
        transform.p.x = position.x;
        transform.p.y = position.y;
        transform.p.z = position.z;
        this.rigidbody.setGlobalPose(transform);
        return true;
    }
    UpdateRotation(rotation) {
        const transform = this.rigidbody.getGlobalPose();
        transform.q.x = rotation.x;
        transform.q.y = rotation.y;
        transform.q.z = rotation.z;
        transform.q.w = rotation.w;
        this.rigidbody.setGlobalPose(transform);
        return true;
    }
    UpdateScale(scale) {
        PhysicsScale.ScaleShape(this.shape, scale);
        return true;
    }
}
//# sourceMappingURL=PhysicsRigidbody.js.map