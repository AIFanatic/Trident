import { BufferGeometry } from "three";
export declare enum TrianglesModeEnum {
    TrianglesDrawMode = 0,
    TriangleFanDrawMode = 1,
    TriangleStripDrawMode = 2
}
/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry>}
 */
export declare function ConvertGeometryToIndexed(geometry: BufferGeometry, drawMode: TrianglesModeEnum): BufferGeometry;
