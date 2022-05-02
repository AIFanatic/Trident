import { PhysX } from 'trident-physx-js-webidl';
export class PhysicsShape {
    static DefaultMaterial(physics) {
        return physics.createMaterial(0.6, 0.6, 0);
    }
    static DefaultFlags() {
        return new PhysX.PxShapeFlags(PhysX.PxShapeFlagEnum.SCENE_QUERY_SHAPE | PhysX.PxShapeFlagEnum.SIMULATION_SHAPE);
    }
    static DefaultFilterData() {
        return new PhysX.PxFilterData(1, 1, 0, 0);
    }
    static CreateShape(physics, geometry) {
        const material = this.DefaultMaterial(physics);
        const flags = this.DefaultFlags();
        const shape = physics.createShape(geometry, material, true, flags);
        const filterData = this.DefaultFilterData();
        shape.setQueryFilterData(filterData);
        shape.setSimulationFilterData(filterData);
        return shape;
    }
    // TODO: Find a way of creating a rigidbody without a collider, probably needs flags
    static CreateBlank(physics) {
        const geometry = new PhysX.PxBoxGeometry(0, 0, 0);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static CreatePlane(physics, width, height) {
        const geometry = new PhysX.PxBoxGeometry(width, 0.01, height);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static CreateBox(physics, extents) {
        const geometry = new PhysX.PxBoxGeometry(extents.x, extents.y, extents.z);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static CreateSphere(physics, radius) {
        const geometry = new PhysX.PxSphereGeometry(radius);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static CreateCapsule(physics, radius, halfWeight) {
        const geometry = new PhysX.PxCapsuleGeometry(radius, halfWeight);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static CreateConvex(physics, cooking, vertices) {
        const desc = new PhysX.PxConvexMeshDesc();
        desc.flags = new PhysX.PxConvexFlags(PhysX.PxConvexFlagEnum.COMPUTE_CONVEX);
        desc.points.count = vertices.length / 3;
        desc.points.stride = 12;
        desc.points.data = this.putIntoPhysXHeap(PhysX.HEAPF32, vertices);
        const convexMesh = cooking.createConvexMesh(desc, physics.getPhysicsInsertionCallback());
        const geometry = new PhysX.PxConvexMeshGeometry(convexMesh);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
    static putIntoPhysXHeap(heap, array) {
        const ptr = PhysX._malloc(4 * array.length);
        let offset = 0;
        for (let i = 0; i < array.length; i++) {
            heap[(ptr + offset) >> 2] = array[i];
            offset += 4;
        }
        return ptr;
    }
    ;
    static CreateTrimesh(physics, cooking, vertices, indices) {
        const points = new PhysX.PxBoundedData();
        points.count = vertices.length / 3;
        points.stride = 12;
        points.data = this.putIntoPhysXHeap(PhysX.HEAPF32, vertices);
        const triangles = new PhysX.PxBoundedData();
        triangles.count = indices.length / 3;
        triangles.stride = 12;
        triangles.data = this.putIntoPhysXHeap(PhysX.HEAPU32, indices);
        const desc = new PhysX.PxTriangleMeshDesc();
        desc.points = points;
        desc.triangles = triangles;
        const trimesh = cooking.createTriangleMesh(desc, physics.getPhysicsInsertionCallback());
        if (trimesh === null)
            return;
        const geometry = new PhysX.PxTriangleMeshGeometry(trimesh);
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
}
//# sourceMappingURL=PhysicsShape.js.map