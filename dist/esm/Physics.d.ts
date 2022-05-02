import { PhysX } from 'trident-physx-js-webidl';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
import { Vector3 } from 'three';
export declare class Physics {
    OnLoaded: () => void;
    private config;
    private physx;
    private physxPhysics;
    private physxCooking;
    private physicsRaycast;
    constructor(config: IPhysicsConfiguration);
    private InitPhysX;
    CreateScene(): PhysX.PxScene;
    private createPhysXDebugger;
    GetPhysX(): typeof PhysX;
    GetPhysics(): PhysX.PxPhysics;
    GetCooking(): PhysX.PxCooking;
    Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask?: number): PhysX.PxRaycastBuffer10;
    Start(): void;
    Update(scene: PhysX.PxScene): void;
}
