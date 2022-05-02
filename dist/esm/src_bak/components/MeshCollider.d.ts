import { Collider } from "./Collider";
import { BufferGeometry } from 'three';
import { GameObject } from './GameObject';
import { Transform } from './Transform';
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
    constructor(gameObject: GameObject, transform: Transform);
    MeshFilterModelChanged(mesh: BufferGeometry): void;
    CreateCollider(): void;
    private CreateConvexCollider;
    private CreateTrimeshCollider;
}
