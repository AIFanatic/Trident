import PhysX from 'trident-physx-js-webidl';
import { PhysicsScale } from "./PhysicsScale";
var PhysicsRigidbody = /** @class */ (function () {
    function PhysicsRigidbody(physics, scene, body) {
        this.physics = physics;
        this.scene = scene;
        this.rigidbody = body.rigidbody;
        this.geometry = body.geometry,
            this.shape = body.shape;
        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(body.rigidbody);
    }
    PhysicsRigidbody.prototype.ConvertToStatic = function () {
        if (!this.rigidbody || this.rigidbody instanceof PhysX.PxRigidDynamic) {
            return false;
        }
        this.rigidbody.detachShape(this.shape);
        this.scene.removeActor(this.rigidbody);
        var transform = this.rigidbody.getGlobalPose();
        var rigidbody = this.physics.createRigidStatic(transform);
        this.rigidbody = rigidbody;
        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(this.rigidbody);
        return true;
    };
    PhysicsRigidbody.prototype.ConvertToDynamic = function () {
        if (!this || this.rigidbody instanceof PhysX.PxRigidDynamic) {
            return false;
        }
        this.rigidbody.detachShape(this.shape);
        this.scene.removeActor(this.rigidbody);
        var transform = this.rigidbody.getGlobalPose();
        var rigidbody = this.physics.createRigidDynamic(transform);
        this.rigidbody = rigidbody;
        this.rigidbody.attachShape(this.shape);
        this.scene.addActor(this.rigidbody);
        return true;
    };
    PhysicsRigidbody.prototype.UpdateShape = function (shape) {
        this.rigidbody.detachShape(this.shape);
        this.shape = shape;
        this.rigidbody.attachShape(shape);
    };
    PhysicsRigidbody.prototype.UpdateGeometry = function (geometry) {
        this.shape.setGeometry(geometry);
    };
    PhysicsRigidbody.prototype.UpdatePose = function (position, rotation, scale) {
        var pxVec3 = new PhysX.PxVec3(position.x, position.y, position.z);
        var pxQuat = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);
        var transform = new PhysX.PxTransform(pxVec3, pxQuat);
        this.rigidbody.setGlobalPose(transform);
        PhysicsScale.ScaleShape(this.shape, scale);
        return true;
    };
    PhysicsRigidbody.prototype.UpdatePosition = function (position) {
        var transform = this.rigidbody.getGlobalPose();
        transform.p.x = position.x;
        transform.p.y = position.y;
        transform.p.z = position.z;
        this.rigidbody.setGlobalPose(transform);
        return true;
    };
    PhysicsRigidbody.prototype.UpdateRotation = function (rotation) {
        var transform = this.rigidbody.getGlobalPose();
        transform.q.x = rotation.x;
        transform.q.y = rotation.y;
        transform.q.z = rotation.z;
        transform.q.w = rotation.w;
        this.rigidbody.setGlobalPose(transform);
        return true;
    };
    PhysicsRigidbody.prototype.UpdateScale = function (scale) {
        PhysicsScale.ScaleShape(this.shape, scale);
        return true;
    };
    return PhysicsRigidbody;
}());
export { PhysicsRigidbody };
//# sourceMappingURL=PhysicsRigidbody.js.map