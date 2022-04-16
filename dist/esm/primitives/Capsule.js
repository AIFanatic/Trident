import { CapsuleCollider, MeshFilter, MeshRenderer } from "../components";
import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";
var Capsule = /** @class */ (function () {
    function Capsule() {
    }
    Capsule.Create = function (gameObject) {
        var geometry = CapsuleBufferGeometry(0.5, 0.5, 1, 16, 1, 8, 8, 0, 2 * Math.PI);
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