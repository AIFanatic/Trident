import { Quaternion, Vector3 } from "three";
import { PhysicsBody } from "./PhysicsBody";
import { PhysX } from 'trident-physx-js-webidl';
export declare class PhysicsRigidbody {
    rigidbody: PhysX.PxRigidStatic | PhysX.PxRigidDynamic;
    geometry: PhysX.PxGeometry;
    shape: PhysX.PxShape;
    private physics;
    private scene;
    constructor(physics: PhysX.PxPhysics, scene: PhysX.PxScene, body: PhysicsBody);
    ConvertToStatic(): boolean;
    ConvertToDynamic(): boolean;
    UpdateShape(shape: PhysX.PxShape): void;
    UpdateGeometry(geometry: PhysX.PxGeometry): void;
    UpdatePose(position: Vector3, rotation: Quaternion, scale: Vector3): boolean;
    UpdatePosition(position: Vector3): boolean;
    UpdateRotation(rotation: Quaternion): boolean;
    UpdateScale(scale: Vector3): boolean;
}
