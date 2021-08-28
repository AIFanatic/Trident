import PhysX from 'trident-physx-js-webidl';
import { Vector3 } from 'three';
import { LayerMask } from '../enums/LayerMask';

export class PhysicsShape {
    public static DefaultMaterial(physics: PhysX.PxPhysics): PhysX.PxMaterial {
        return physics.createMaterial(0.6, 0.6, 0);
    }

    public static DefaultFlags(): PhysX.PxShapeFlags {
        return new PhysX.PxShapeFlags(
            // @ts-ignore
            PhysX._emscripten_enum_PxShapeFlagEnum_eSCENE_QUERY_SHAPE() | 
            // @ts-ignore
            PhysX._emscripten_enum_PxShapeFlagEnum_eSIMULATION_SHAPE()
        );
    }

    public static DefaultFilterData(): PhysX.PxFilterData {
        return new PhysX.PxFilterData(1, 1, 0, 0);
    }

    public static CreateShape(physics: PhysX.PxPhysics, geometry: PhysX.PxGeometry): PhysX.PxShape {
        const material = this.DefaultMaterial(physics);
        const flags = this.DefaultFlags();
        const shape = physics.createShape(geometry, material, true, flags);

        const filterData = this.DefaultFilterData();
        shape.setQueryFilterData(filterData);
        shape.setSimulationFilterData(filterData);

        return shape;
    }



    // TODO: Find a way of creating a rigidbody without a collider, probably needs flags
    public static CreateBlank(physics: PhysX.PxPhysics): PhysX.PxShape {
        const geometry = new PhysX.PxBoxGeometry(0, 0, 0);
        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    public static CreatePlane(physics: PhysX.PxPhysics, width: number, height: number): PhysX.PxShape {
        const geometry = new PhysX.PxBoxGeometry(width, 0.01, height);
        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    public static CreateBox(physics: PhysX.PxPhysics, extents: Vector3): PhysX.PxShape {
        const geometry = new PhysX.PxBoxGeometry(extents.x, extents.y, extents.z);
        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    public static CreateSphere(physics: PhysX.PxPhysics, radius: number): PhysX.PxShape {
        const geometry = new PhysX.PxSphereGeometry(radius);
        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    public static CreateCapsule(physics: PhysX.PxPhysics, radius: number, halfWeight: number): PhysX.PxShape {
        const geometry = new PhysX.PxCapsuleGeometry(radius, halfWeight);
        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    public static CreateConvex(physics: PhysX.PxPhysics, cooking: PhysX.PxCooking, vertices: Float32Array): PhysX.PxShape {
        const desc = new PhysX.PxConvexMeshDesc();
        // @ts-ignore
        desc.flags = new PhysX.PxConvexFlags(PhysX._emscripten_enum_PxConvexFlagEnum_eCOMPUTE_CONVEX());
        desc.points.count = vertices.length / 3;
        desc.points.stride = 12;
        desc.points.data = this.putIntoPhysXHeap(PhysX.HEAPF32, vertices);
    
        const convexMesh = cooking.createConvexMesh(desc, physics.getPhysicsInsertionCallback());
        
        const geometry = new PhysX.PxConvexMeshGeometry(convexMesh);

        const shape = this.CreateShape(physics, geometry);

        return shape;
    }

    private static putIntoPhysXHeap(heap, array: ArrayLike<number>) {
        const ptr = PhysX._malloc(4 * array.length);
        let offset = 0;
      
        for (let i = 0; i < array.length; i++) {
          heap[(ptr + offset) >> 2] = array[i];
          offset += 4;
        }
      
        return ptr;
    };

    public static CreateTrimesh(physics: PhysX.PxPhysics, cooking: PhysX.PxCooking, vertices: Float32Array, indices: Uint16Array): PhysX.PxShape {
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
    
        if (trimesh === null) return;
        
        const geometry = new PhysX.PxTriangleMeshGeometry(trimesh);
        
        const shape = this.CreateShape(physics, geometry);
        return shape;
    }
}