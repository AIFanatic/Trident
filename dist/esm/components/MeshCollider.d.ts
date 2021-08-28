import { Collider } from "./Collider";
export declare class MeshCollider extends Collider {
    private physxPhysics;
    private physxScene;
    private physxCooking;
    private _isConvex;
    get isConvex(): boolean;
    set isConvex(isConvex: boolean);
    OnEnable(): void;
    private GetGeometryFromMeshFilter;
    private CreateConvexShape;
    private CreateConvexCollider;
    private CreateTrimeshShape;
    private CreateTrimeshCollider;
}
