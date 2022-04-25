import { PhysX } from "trident-physx-js-webidl";
import { Vector3 } from "three";
export declare class PhysicsRaycast {
    private physxScene;
    private _origin;
    private _direction;
    private _filterData;
    private _hitFlags;
    constructor(physxScene: PhysX.PxScene);
    Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask?: number): PhysX.PxRaycastBuffer10;
}
