import { DoubleSide, Material, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { GameObject, TerrainCollider, Transform } from ".";
import { Component } from "./Component";
import { TerrainData } from "./TerrainData";

/**
 * @noInheritDoc
 */
export class Terrain extends Component {
    public terrainData: TerrainData;
    public mesh: Mesh;
    public material: Material;
    
    private collider: TerrainCollider;

    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);

        this.collider = gameObject.GetComponent(TerrainCollider);
        if (!this.collider) {
            this.collider = gameObject.AddComponent(TerrainCollider);
        }

        this.terrainData = this.collider.terrainData;
        this.material = new MeshBasicMaterial();
        this.material.side = DoubleSide;
    }

    public Flush() {
        if (this.mesh) this.transform.group.remove(this.mesh);
        if (this.material) this.material.dispose();

        this.collider.CreateCollider();

        const terrainData = this.collider.terrainData;

        const geometry = new PlaneGeometry(terrainData.detailWidth, terrainData.detailHeight, terrainData.detailResolution-1, terrainData.detailResolution-1);
        geometry.rotateX( Math.PI / 2 );
        geometry.rotateY( - Math.PI / 2);
        geometry.translate((terrainData.detailWidth-1)/2, 0, (terrainData.detailHeight-1)/2);

        const terrainDataHeights = this.collider.terrainData.GetHeights();
        const vertices = geometry.vertices;
        for (let i = 0; i < terrainDataHeights.length; i++) {
            vertices[i].y = terrainDataHeights[i];
        }
        geometry.verticesNeedUpdate = true;

        this.mesh = new Mesh(geometry, this.material);
        // this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.transform.group.add(this.mesh);
    }
}