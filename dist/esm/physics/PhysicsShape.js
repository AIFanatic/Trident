import PhysX from 'trident-physx-js-webidl';
var PhysicsShape = /** @class */ (function () {
    function PhysicsShape() {
    }
    PhysicsShape.DefaultMaterial = function (physics) {
        return physics.createMaterial(0.6, 0.6, 0);
    };
    PhysicsShape.DefaultFlags = function () {
        return new PhysX.PxShapeFlags(
        // @ts-ignore
        PhysX._emscripten_enum_PxShapeFlagEnum_eSCENE_QUERY_SHAPE() |
            // @ts-ignore
            PhysX._emscripten_enum_PxShapeFlagEnum_eSIMULATION_SHAPE());
    };
    PhysicsShape.DefaultFilterData = function () {
        return new PhysX.PxFilterData(1, 1, 0, 0);
    };
    PhysicsShape.CreateShape = function (physics, geometry) {
        var material = this.DefaultMaterial(physics);
        var flags = this.DefaultFlags();
        var shape = physics.createShape(geometry, material, true, flags);
        var filterData = this.DefaultFilterData();
        shape.setQueryFilterData(filterData);
        shape.setSimulationFilterData(filterData);
        return shape;
    };
    // TODO: Find a way of creating a rigidbody without a collider, probably needs flags
    PhysicsShape.CreateBlank = function (physics) {
        var geometry = new PhysX.PxBoxGeometry(0, 0, 0);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.CreatePlane = function (physics, width, height) {
        var geometry = new PhysX.PxBoxGeometry(width, 0.01, height);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.CreateBox = function (physics, extents) {
        var geometry = new PhysX.PxBoxGeometry(extents.x, extents.y, extents.z);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.CreateSphere = function (physics, radius) {
        var geometry = new PhysX.PxSphereGeometry(radius);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.CreateCapsule = function (physics, radius, halfWeight) {
        var geometry = new PhysX.PxCapsuleGeometry(radius, halfWeight);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.CreateConvex = function (physics, cooking, vertices) {
        var desc = new PhysX.PxConvexMeshDesc();
        // @ts-ignore
        desc.flags = new PhysX.PxConvexFlags(PhysX._emscripten_enum_PxConvexFlagEnum_eCOMPUTE_CONVEX());
        desc.points.count = vertices.length / 3;
        desc.points.stride = 12;
        desc.points.data = this.putIntoPhysXHeap(PhysX.HEAPF32, vertices);
        var convexMesh = cooking.createConvexMesh(desc, physics.getPhysicsInsertionCallback());
        var geometry = new PhysX.PxConvexMeshGeometry(convexMesh);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    PhysicsShape.putIntoPhysXHeap = function (heap, array) {
        var ptr = PhysX._malloc(4 * array.length);
        var offset = 0;
        for (var i = 0; i < array.length; i++) {
            heap[(ptr + offset) >> 2] = array[i];
            offset += 4;
        }
        return ptr;
    };
    ;
    PhysicsShape.CreateTrimesh = function (physics, cooking, vertices, indices) {
        var points = new PhysX.PxBoundedData();
        points.count = vertices.length / 3;
        points.stride = 12;
        points.data = this.putIntoPhysXHeap(PhysX.HEAPF32, vertices);
        var triangles = new PhysX.PxBoundedData();
        triangles.count = indices.length / 3;
        triangles.stride = 12;
        triangles.data = this.putIntoPhysXHeap(PhysX.HEAPU32, indices);
        var desc = new PhysX.PxTriangleMeshDesc();
        desc.points = points;
        desc.triangles = triangles;
        var trimesh = cooking.createTriangleMesh(desc, physics.getPhysicsInsertionCallback());
        if (trimesh === null)
            return;
        var geometry = new PhysX.PxTriangleMeshGeometry(trimesh);
        var shape = this.CreateShape(physics, geometry);
        return shape;
    };
    return PhysicsShape;
}());
export { PhysicsShape };
//# sourceMappingURL=PhysicsShape.js.map