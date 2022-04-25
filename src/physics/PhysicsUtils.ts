import { PhysX } from 'trident-physx-js-webidl';
import { Quaternion, Vector3 } from 'three';

export class PhysicsUtils {
    public static ToTransform(position: Vector3, rotation: Quaternion): PhysX.PxTransform {
        const pxPosition = new PhysX.PxVec3(position.x, position.y, position.z);
        const pxRotation = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);

        return new PhysX.PxTransform(pxPosition, pxRotation);
    }
}