import { PhysX } from 'trident-physx-js-webidl';
import { Vector3 } from 'three';
export declare class PhysicsScale {
    static ScaleSphere(sphere: PhysX.PxSphereGeometry, radius: number): PhysX.PxSphereGeometry;
    static ScalePlane(box: PhysX.PxBoxGeometry, width: number, height: number): PhysX.PxBoxGeometry;
    static ScaleCapsule(capsule: PhysX.PxCapsuleGeometry, radius: number, halfHeight: number): PhysX.PxCapsuleGeometry;
    static ScaleBox(box: PhysX.PxBoxGeometry, halfExtents: Vector3): PhysX.PxBoxGeometry;
    static ScaleConvex(convex: PhysX.PxConvexMeshGeometry, scale: Vector3): PhysX.PxConvexMeshGeometry;
    static ScaleTrimesh(trimesh: PhysX.PxTriangleMeshGeometry, scale: Vector3): PhysX.PxTriangleMeshGeometry;
    static ScaleShape(shape: PhysX.PxShape, scale: Vector3): PhysX.PxShape;
}
