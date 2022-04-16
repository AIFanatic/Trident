import { SphereGeometry } from "three";
import { MeshFilter, MeshRenderer, SphereCollider } from "../components";
var Sphere = /** @class */ (function () {
    function Sphere() {
    }
    Sphere.Create = function (gameObject) {
        var geometry = new SphereGeometry(0.5, 32, 32);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(SphereCollider);
    };
    return Sphere;
}());
export { Sphere };
//# sourceMappingURL=Sphere.js.map