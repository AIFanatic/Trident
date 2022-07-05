import { PhysX } from 'trident-physx-js-webidl';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
export declare class Physics {
    OnLoaded: () => void;
    private config;
    private physx;
    private physxPhysics;
    private physxCooking;
    constructor(config: IPhysicsConfiguration);
    private InitPhysX;
    CreateScene(): PhysX.PxScene;
    private createPhysXDebugger;
    GetPhysX(): typeof PhysX;
    GetPhysics(): PhysX.PxPhysics;
    GetCooking(): PhysX.PxCooking;
    Start(): void;
    Update(scene: PhysX.PxScene): void;
}
