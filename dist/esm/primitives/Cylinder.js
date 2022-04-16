import { CylinderGeometry } from "three";
import { CapsuleCollider, MeshFilter, MeshRenderer } from "../components";
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.Create = function (gameObject) {
        var geometry = new CylinderGeometry(0.5, 0.5, 2, 16, 1);
        geometry.rotateZ(Math.PI / 2);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(CapsuleCollider);
    };
    return Cylinder;
}());
export { Cylinder };
//# sourceMappingURL=Cylinder.js.map