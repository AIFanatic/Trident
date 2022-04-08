import { BoxGeometry } from "three";
import { BoxCollider, MeshFilter, MeshRenderer } from "../components";
var Cube = /** @class */ (function () {
    function Cube() {
    }
    Cube.Create = function (gameObject) {
        var geometry = new BoxGeometry(gameObject.transform.localScale.x, gameObject.transform.localScale.y, gameObject.transform.localScale.z);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(BoxCollider);
    };
    return Cube;
}());
export { Cube };
//# sourceMappingURL=Cube.js.map