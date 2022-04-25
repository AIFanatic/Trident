import { PhysX } from 'trident-physx-js-webidl';
export class PhysicsUtils {
    static ToTransform(position, rotation) {
        const pxPosition = new PhysX.PxVec3(position.x, position.y, position.z);
        const pxRotation = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);
        return new PhysX.PxTransform(pxPosition, pxRotation);
    }
}
//# sourceMappingURL=PhysicsUtils.js.map