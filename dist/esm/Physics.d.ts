import { PhysX } from 'trident-physx-js-webidl';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
import { Vector3 } from 'three';
export declare class Physics {
    OnLoaded: () => void;
    FixedUpdate: () => void;
    private config;
    private physx;
    private physxPhysics;
    private physxScene;
    private physxCooking;
    private physicsRaycast;
    constructor(config: IPhysicsConfiguration);
    private InitPhysX;
    private createPhysXDebugger;
    GetPhysX(): typeof PhysX;
    GetPhysics(): PhysX.PxPhysics;
    GetScene(): PhysX.PxScene;
    GetCooking(): PhysX.PxCooking;
    Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask?: number): PhysX.PxRaycastBuffer10;
    Start(): void;
    Update(): void;
}
