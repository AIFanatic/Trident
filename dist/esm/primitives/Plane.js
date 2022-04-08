import { PlaneGeometry } from "three";
import { MeshFilter, MeshRenderer, PlaneCollider } from "../components";
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.Create = function (gameObject) {
        var geometry = new PlaneGeometry(gameObject.transform.localScale.x, gameObject.transform.localScale.z);
        geometry.rotateX(-Math.PI / 2);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(PlaneCollider);
    };
    return Plane;
}());
export { Plane };
//# sourceMappingURL=Plane.js.map