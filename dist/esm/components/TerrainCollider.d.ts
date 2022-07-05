import { Collider } from "./Collider";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
import { TerrainData } from "./TerrainData";
/**
 * Adds a static terrain collider to the GameObject.
 *
 * @noInheritDoc
 */
export declare class TerrainCollider extends Collider {
    terrainData: TerrainData;
    constructor(gameObject: GameObject, transform: Transform);
    CreateCollider(): void;
}
