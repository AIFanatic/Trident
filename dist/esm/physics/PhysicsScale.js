import { PhysX } from 'trident-physx-js-webidl';
// TODO: Doesnt work if using PhysX.PxGeometryTypeEnum.BOX
var PxGeometryTypeEnum;
(function (PxGeometryTypeEnum) {
    PxGeometryTypeEnum[PxGeometryTypeEnum["SPHERE"] = 0] = "SPHERE";
    PxGeometryTypeEnum[PxGeometryTypeEnum["PLANE"] = 1] = "PLANE";
    PxGeometryTypeEnum[PxGeometryTypeEnum["CAPSULE"] = 2] = "CAPSULE";
    PxGeometryTypeEnum[PxGeometryTypeEnum["BOX"] = 3] = "BOX";
    PxGeometryTypeEnum[PxGeometryTypeEnum["CONVEXMESH"] = 4] = "CONVEXMESH";
    PxGeometryTypeEnum[PxGeometryTypeEnum["TRIANGLEMESH"] = 5] = "TRIANGLEMESH";
    PxGeometryTypeEnum[PxGeometryTypeEnum["HEIGHTFIELD"] = 6] = "HEIGHTFIELD";
})(PxGeometryTypeEnum || (PxGeometryTypeEnum = {}));
export class PhysicsScale {
    static ScaleSphere(sphere, radius) {
        sphere.radius = radius;
        return sphere;
    }
    static ScalePlane(box, width, height) {
        const halfExtentsPxVec3 = new PhysX.PxVec3(width, 0.01, height);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    }
    static ScaleCapsule(capsule, radius, halfHeight) {
        capsule.radius = radius;
        capsule.halfHeight = halfHeight;
        return capsule;
    }
    static ScaleBox(box, halfExtents) {
        const halfExtentsPxVec3 = new PhysX.PxVec3(halfExtents.x, halfExtents.y, halfExtents.z);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    }
    static ScaleConvex(convex, scale) {
        const scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        convex.scale.scale = scalePxVec3;
        return convex;
    }
    static ScaleTrimesh(trimesh, scale) {
        const scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        trimesh.scale.scale = scalePxVec3;
        return trimesh;
    }
    static ScaleShape(shape, scale) {
        const geometryHolder = shape.getGeometry();
        const type = shape.getGeometryType();
        let geometry;
        if (type == PxGeometryTypeEnum.SPHERE.valueOf()) {
            geometry = this.ScaleSphere(geometryHolder.sphere(), scale.x / 2);
        }
        else if (type == PxGeometryTypeEnum.PLANE.valueOf()) {
            console.warn("Scaling PLANE not implemented, planes are just thin boxes");
            geometry = geometryHolder.plane();
        }
        else if (type == PxGeometryTypeEnum.CAPSULE.valueOf()) {
            geometry = this.ScaleCapsule(geometryHolder.capsule(), scale.x / 2, scale.y / 2);
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
//# sourceMappingURL=PhysicsScale.js.map