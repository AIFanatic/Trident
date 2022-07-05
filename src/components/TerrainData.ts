import { Texture } from "three";

/**
 * Adds a static terrain collider to the GameObject.
 * 
 * @noInheritDoc
 */
export class TerrainData {
    private heights: Float32Array;

    public detailWidth: number;
    public detailHeight: number;
    public detailLength: number;

    public detailResolution: number;

    private _heightmapTexture: Texture;
    
    public get heightmapTexture(): Texture {
        return this._heightmapTexture;
    }

    public set heightmapTexture(texture: Texture) {
        this._heightmapTexture = texture;

        const canvas = document.createElement( 'canvas' );
        canvas.style.position = "absolute";
        canvas.style.top = "60px";
        canvas.style.left = "20px";
        canvas.style.zIndex = "999999";
        canvas.style.backgroundColor = "green";

        canvas.width = this.detailResolution;
        canvas.height = this.detailResolution;

        const context = canvas.getContext( '2d' );

        // getImageData uses row->col, PxHeightfield uses col->row, so flip image to match
        context.translate(0, canvas.height);
        context.scale(1, -1);
        // Scale image to fit whitin specified detail
        context.drawImage(texture.image, 0, 0, texture.image.width, texture.image.height, 0, 0, canvas.width, canvas.height );

        const data = context.getImageData( 0, 0, this.detailResolution, this.detailResolution );

        // Images are always RGBA, use R channel
        for (let i = 0, j = 0; i < data.data.length; i+=4, j++) {
            const r = data.data[i];
            this.heights[j] = Math.round((r / 255) * this.detailLength);
        }

        context.putImageData(data, 0, 0);
    }

    public GetHeight(x: number, y: number): number {
        const xR = (x / this.detailWidth) * this.detailResolution;
        const yR = (y / this.detailHeight) * this.detailResolution;
        const i = this.detailResolution * Math.floor(xR) + Math.floor(yR);
        
        return this.heights[i];
    }

    public SetHeights(heights: Float32Array) {
        this.heights = heights;
    }

    public GetHeights(): Float32Array {
        return this.heights;
    }
    
    constructor() {
        this.detailWidth = 128;
        this.detailHeight = 128;
        this.detailLength = 10;
        this.detailResolution = 32;

        this.heights = new Float32Array(this.detailResolution * this.detailResolution);
    }
}