import { Collider } from "./Collider";
import { BufferGeometry } from 'three';
/**
 * Adds a static mesh collider to the GameObject.
 *
 * A MeshCollider can either be convex or a trimesh.
 *
 * @noInheritDoc
 */
export declare class MeshCollider extends Collider {
    private physxCooking;
    private isConvex;
    Awake(): void;
    MeshFilterModelChanged(mesh: BufferGeometry): void;
    CreateCollider(): void;
    private CreateConvexCollider;
    private CreateTrimeshCollider;
}
