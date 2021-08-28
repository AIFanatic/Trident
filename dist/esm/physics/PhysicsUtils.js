import PhysX from 'trident-physx-js-webidl';
var PhysicsUtils = /** @class */ (function () {
    function PhysicsUtils() {
    }
    PhysicsUtils.ToTransform = function (position, rotation) {
        var pxPosition = new PhysX.PxVec3(position.x, position.y, position.z);
        var pxRotation = new PhysX.PxQuat(rotation.x, rotation.y, rotation.z, rotation.w);
        return new PhysX.PxTransform(pxPosition, pxRotation);
    };
    return PhysicsUtils;
}());
export { PhysicsUtils };
//# sourceMappingURL=PhysicsUtils.js.map