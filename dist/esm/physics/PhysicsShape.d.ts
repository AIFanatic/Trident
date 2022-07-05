import { PhysX } from 'trident-physx-js-webidl';
import { Vector3 } from 'three';
export declare class PhysicsShape {
    private static putIntoPhysXHeap;
    static DefaultMaterial(physics: PhysX.PxPhysics): PhysX.PxMaterial;
    static DefaultFlags(): PhysX.PxShapeFlags;
    static DefaultFilterData(): PhysX.PxFilterData;
    static CreateShape(physics: PhysX.PxPhysics, geometry: PhysX.PxGeometry): PhysX.PxShape;
    static CreateBlank(physics: PhysX.PxPhysics): PhysX.PxShape;
    static CreatePlane(physics: PhysX.PxPhysics, width: number, height: number): PhysX.PxShape;
    static CreateBox(physics: PhysX.PxPhysics, extents: Vector3): PhysX.PxShape;
    static CreateSphere(physics: PhysX.PxPhysics, radius: number): PhysX.PxShape;
    static CreateCapsule(physics: PhysX.PxPhysics, radius: number, halfWeight: number): PhysX.PxShape;
    static CreateConvex(physics: PhysX.PxPhysics, cooking: PhysX.PxCooking, vertices: Float32Array): PhysX.PxShape;
    static CreateTrimesh(physics: PhysX.PxPhysics, cooking: PhysX.PxCooking, vertices: Float32Array, indices: Uint16Array): PhysX.PxShape;
    static CreateHightField(physics: PhysX.PxPhysics, cooking: PhysX.PxCooking, cols: number, rows: number, colScale: number, rowScale: number, heightScale: number, samples: PhysX.Vector_PxHeightFieldSample): PhysX.PxShape;
}
