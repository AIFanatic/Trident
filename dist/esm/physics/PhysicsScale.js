import PhysX from 'trident-physx-js-webidl';
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
var PhysicsScale = /** @class */ (function () {
    function PhysicsScale() {
    }
    PhysicsScale.ScaleSphere = function (sphere, radius) {
        sphere.radius = radius;
        return sphere;
    };
    PhysicsScale.ScalePlane = function (box, width, height) {
        var halfExtentsPxVec3 = new PhysX.PxVec3(width, 0.01, height);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    };
    PhysicsScale.ScaleCapsule = function (capsule, radius, halfHeight) {
        capsule.radius = radius;
        capsule.halfHeight = halfHeight;
        return capsule;
    };
    PhysicsScale.ScaleBox = function (box, halfExtents) {
        var halfExtentsPxVec3 = new PhysX.PxVec3(halfExtents.x, halfExtents.y, halfExtents.z);
        box.halfExtents = halfExtentsPxVec3;
        return box;
    };
    PhysicsScale.ScaleConvex = function (convex, scale) {
        var scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        convex.scale.scale = scalePxVec3;
        return convex;
    };
    PhysicsScale.ScaleTrimesh = function (trimesh, scale) {
        var scalePxVec3 = new PhysX.PxVec3(scale.x, scale.y, scale.z);
        trimesh.scale.scale = scalePxVec3;
        return trimesh;
    };
    PhysicsScale.ScaleShape = function (shape, scale) {
        var geometryHolder = shape.getGeometry();
        var type = shape.getGeometryType();
        var geometry;
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
    };
    return PhysicsScale;
}());
export { PhysicsScale };
//# sourceMappingURL=PhysicsScale.js.map