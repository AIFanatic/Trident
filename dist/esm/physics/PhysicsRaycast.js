import { PhysX } from "trident-physx-js-webidl";
export class PhysicsRaycast {
    constructor(physxScene) {
        this.physxScene = physxScene;
        this._origin = new PhysX.PxVec3();
        this._direction = new PhysX.PxVec3();
        this._filterData = new PhysX.PxQueryFilterData();
        // @ts-ignore
        this._hitFlags = new PhysX.PxHitFlags(PhysX.ePOSITION | PhysX.eNORMAL);
    }
    Raycast(origin, direction, maxDistance, layerMask = 0) {
        this._origin.x = origin.x;
        this._origin.y = origin.y;
        this._origin.z = origin.z;
        this._direction.x = direction.x;
        this._direction.y = direction.y;
        this._direction.z = direction.z;
        const callback = new PhysX.PxRaycastBuffer10();
        this._filterData.data.word2 = layerMask;
        this.physxScene.raycast(this._origin, this._direction, maxDistance, callback, this._hitFlags, this._filterData);
        return callback;
    }
}
//# sourceMappingURL=PhysicsRaycast.js.map