import { Material, Mesh } from "three";
import { GameObject, Transform } from ".";
import { Component } from "./Component";
import { TerrainData } from "./TerrainData";
/**
 * @noInheritDoc
 */
export declare class Terrain extends Component {
    terrainData: TerrainData;
    mesh: Mesh;
    material: Material;
    private collider;
    constructor(gameObject: GameObject, transform: Transform);
    Flush(): void;
}
