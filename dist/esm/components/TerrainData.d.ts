import { Texture } from "three";
/**
 * Adds a static terrain collider to the GameObject.
 *
 * @noInheritDoc
 */
export declare class TerrainData {
    private heights;
    detailWidth: number;
    detailHeight: number;
    detailLength: number;
    detailResolution: number;
    private _heightmapTexture;
    get heightmapTexture(): Texture;
    set heightmapTexture(texture: Texture);
    GetHeight(x: number, y: number): number;
    SetHeights(heights: Float32Array): void;
    GetHeights(): Float32Array;
    constructor();
}
