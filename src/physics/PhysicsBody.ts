import { PhysX } from 'trident-physx-js-webidl';

export interface PhysicsBody {
    rigidbody: PhysX.PxRigidStatic | PhysX.PxRigidDynamic;
    geometry: PhysX.PxGeometry;
    shape: PhysX.PxShape;
}