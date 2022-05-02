export var TrianglesModeEnum;
(function (TrianglesModeEnum) {
    TrianglesModeEnum[TrianglesModeEnum["TrianglesDrawMode"] = 0] = "TrianglesDrawMode";
    TrianglesModeEnum[TrianglesModeEnum["TriangleFanDrawMode"] = 1] = "TriangleFanDrawMode";
    TrianglesModeEnum[TrianglesModeEnum["TriangleStripDrawMode"] = 2] = "TriangleStripDrawMode";
})(TrianglesModeEnum || (TrianglesModeEnum = {}));
/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry>}
 */
export function ConvertGeometryToIndexed(geometry, drawMode) {
    if (drawMode === TrianglesModeEnum.TrianglesDrawMode) {
        console.warn('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.');
        return geometry;
    }
    if (drawMode === TrianglesModeEnum.TriangleFanDrawMode || drawMode === TrianglesModeEnum.TriangleStripDrawMode) {
        var index = geometry.getIndex();
        // generate index if not present
        if (index === null) {
            var indices = [];
            var position = geometry.getAttribute('position');
            if (position !== undefined) {
                for (var i = 0; i < position.count; i++) {
                    indices.push(i);
                }
                geometry.setIndex(indices);
                index = geometry.getIndex();
            }
            else {
                console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.');
                return geometry;
            }
        }
        //
        var numberOfTriangles = index.count - 2;
        var newIndices = [];
        if (drawMode === TrianglesModeEnum.TriangleFanDrawMode) {
            // gl.TRIANGLE_FAN
            for (var i = 1; i <= numberOfTriangles; i++) {
                newIndices.push(index.getX(0));
                newIndices.push(index.getX(i));
                newIndices.push(index.getX(i + 1));
            }
        }
        else {
            // gl.TRIANGLE_STRIP
            for (var i = 0; i < numberOfTriangles; i++) {
                if (i % 2 === 0) {
                    newIndices.push(index.getX(i));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i + 2));
                }
                else {
                    newIndices.push(index.getX(i + 2));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i));
                }
            }
        }
        if ((newIndices.length / 3) !== numberOfTriangles) {
            console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.');
        }
        // build final geometry
        var newGeometry = geometry.clone();
        newGeometry.setIndex(newIndices);
        newGeometry.clearGroups();
        return newGeometry;
    }
    else {
        console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode);
        return geometry;
    }
}
//# sourceMappingURL=ConvertGeometryToIndexed.js.map