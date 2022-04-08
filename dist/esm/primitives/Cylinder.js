import { CylinderGeometry } from "three";
import { CapsuleCollider, MeshFilter, MeshRenderer } from "../components";
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.Create = function (gameObject) {
        var geometry = new CylinderGeometry(gameObject.transform.localScale.length(), gameObject.transform.localScale.length(), gameObject.transform.localScale.y, 32, 32);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(CapsuleCollider);
    };
    return Cylinder;
}());
export { Cylinder };
//# sourceMappingURL=Cylinder.js.map