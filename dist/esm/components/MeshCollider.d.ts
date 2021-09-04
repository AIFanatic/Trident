import { Collider } from "./Collider";
/**
 * Adds a static mesh collider to the GameObject.
 *
 * A MeshCollider can either be convex or a trimesh.
 *
 * @noInheritDoc
 */
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
