import { PhysX } from 'trident-physx-js-webidl';
import { Quaternion, Vector3 } from 'three';
export declare class PhysicsUtils {
    static ToTransform(position: Vector3, rotation: Quaternion): PhysX.PxTransform;
}
