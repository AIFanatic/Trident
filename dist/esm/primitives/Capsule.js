import { CapsuleCollider, MeshFilter, MeshRenderer } from "../components";
import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";
var Capsule = /** @class */ (function () {
    function Capsule() {
    }
    Capsule.Create = function (gameObject) {
        var geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 8, 8, 0, 2 * Math.PI);
        geometry.rotateZ(Math.PI / 2);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(CapsuleCollider);
    };
    return Capsule;
}());
export { Capsule };
//# sourceMappingURL=Capsule.js.map