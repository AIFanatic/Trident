import PhysX from 'trident-physx-js-webidl';
import { Quaternion, Vector3 } from 'three';

// TODO: Doesnt work if using PhysX.PxGeometryTypeEnum.BOX
enum PxGeometryTypeEnum {
    SPHERE,
    PLANE,
    CAPSULE,
    BOX,
    CONVEXMESH,
    TRIANGLEMESH,
    HEIGHTFIELD
}

export class PhysicsScale {
    public static ScaleSphere(sphere: PhysX.PxSphereGeometry, radius: number): PhysX.PxSphereGeometry {
        sphere.radius = radius;
        return sphere;
    }

    public static ScalePlane(box: PhysX.PxBoxGeometry, width: number, height: number): PhysX.PxBoxGeometry {
        const halfExtentsPxVec3 = new PhysX.PxVec3(width, 0.01, height);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    }

    public static ScaleCapsule(capsule: PhysX.PxCapsuleGeometry, radius: number, halfHeight: number): PhysX.PxCapsuleGeometry {
        capsule.radius = radius;
        capsule.halfHeight = halfHeight;
        return capsule;
    }

    public static ScaleBox(box: PhysX.PxBoxGeometry, halfExtents: Vector3): PhysX.PxBoxGeometry {
        const halfExtentsPxVec3 = new PhysX.PxVec3(halfExtents.x, halfExtents.y, halfExtents.z);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    }

    public static ScaleConvex(convex: PhysX.PxConvexMeshGeometry, scale: Vector3): PhysX.PxConvexMeshGeometry {
        const scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        convex.scale.scale = scalePxVec3;
        return convex;
    }

    public static ScaleTrimesh(trimesh: PhysX.PxTriangleMeshGeometry, scale: Vector3): PhysX.PxTriangleMeshGeometry {
        const scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        trimesh.scale.scale = scalePxVec3;
        return trimesh;
    }

    public static ScaleShape(shape: PhysX.PxShape, scale: Vector3): PhysX.PxShape {
        const geometryHolder = shape.getGeometry();
        const type = shape.getGeometryType();

        let geometry;

        if (type == PxGeometryTypeEnum.SPHERE.valueOf()) {
            geometry = this.ScaleSphere(geometryHolder.sphere(), scale.length());
        }
        else if (type == PxGeometryTypeEnum.PLANE.valueOf()) {
            console.warn("Scaling PLANE not implemented, planes are just thin boxes");
            geometry = geometryHolder.plane();
        }
        else if (type == PxGeometryTypeEnum.CAPSULE.valueOf()) {
            geometry = this.ScaleCapsule(geometryHolder.capsule(), scale.x, scale.y);
        }
        else if (type == PxGeometryTypeEnum.BOX.valueOf()) {
            geometry = this.ScaleBox(geometryHolder.box(), scale.clone().divideScalar(2));
        }
        else if (type == PxGeometryTypeEnum.CONVEXMESH.valueOf()) {
            geometry = this.ScaleConvex(geometryHolder.convexMesh(), scale);
        }
        else if (type == PxGeometryTypeEnum.TRIANGLEMESH.valueOf()) {
            geometry = this.ScaleTrimesh(geometryHolder.triangleMesh(), scale);
        }
        else if (type == PxGeometryTypeEnum.HEIGHTFIELD.valueOf()) {
            console.warn("Scaling HEIGHTFIELD not implemented");
            geometry = geometryHolder.heightField();
        }

        shape.setGeometry(geometry);
        return shape;
    }
    
}