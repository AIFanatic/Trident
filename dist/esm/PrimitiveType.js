import { BoxGeometry, CylinderGeometry, PlaneGeometry, SphereGeometry } from "three";
import { BoxCollider, MeshFilter, MeshRenderer, CapsuleCollider, PlaneCollider, SphereCollider } from "./components";
import { CapsuleBufferGeometry } from "./utils/CapsuleGeometry";
/**
 * The various primitives that can be created using the gameObject.CreatePrimitive function.
 * @noInheritDoc
 */
var PrimitiveType = /** @class */ (function () {
    function PrimitiveType() {
    }
    /**
     * A cube primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    PrimitiveType.Cube = function (gameObject) {
        var geometry = new BoxGeometry(gameObject.transform.localScale.x, gameObject.transform.localScale.y, gameObject.transform.localScale.z);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(BoxCollider);
    };
    /**
     * A capsule primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    PrimitiveType.Capsule = function (gameObject) {
        var geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 8, 8, 0, 2 * Math.PI);
        geometry.rotateZ(Math.PI / 2);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(CapsuleCollider);
    };
    /**
     * A plane primitive, it consists of a MeshFilter, MeshRenderer and PlaneCollider.
     */
    PrimitiveType.Plane = function (gameObject) {
        var geometry = new PlaneGeometry(gameObject.transform.localScale.x, gameObject.transform.localScale.z);
        geometry.rotateX(-Math.PI / 2);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(PlaneCollider);
    };
    /**
     * A sphere primitive, it consists of a MeshFilter, MeshRenderer and SphereCollider.
     */
    PrimitiveType.Sphere = function (gameObject) {
        var geometry = new SphereGeometry(gameObject.transform.localScale.length(), 32, 32);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(SphereCollider);
    };
    /**
     * A cylinder primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    PrimitiveType.Cylinder = function (gameObject) {
        var geometry = new CylinderGeometry(gameObject.transform.localScale.length(), gameObject.transform.localScale.length(), gameObject.transform.localScale.y, 32, 32);
        var meshFilter = gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = gameObject.AddComponent(MeshRenderer);
        var colllider = gameObject.AddComponent(CapsuleCollider);
    };
    return PrimitiveType;
}());
export { PrimitiveType };
//# sourceMappingURL=PrimitiveType.js.map