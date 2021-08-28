import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
import { Scene } from './Scene';
import PhysX from 'trident-physx-js-webidl';
import { Vector3 } from 'three';
export declare class Physics {
    private scene;
    private config;
    private physx;
    private physxPhysics;
    private physxScene;
    private physxCooking;
    private physicsRaycast;
    OnLoaded: () => any;
    constructor(scene: Scene, config: IPhysicsConfiguration, loadedCb?: () => void);
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
