var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SphereGeometry } from "three";
import { MeshFilter, MeshRenderer, SphereCollider } from ".";
import { Component } from "./Component";
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    function Sphere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sphere.prototype.OnEnable = function () {
        var geometry = new SphereGeometry(this.transform.localScale.length(), 32, 32);
        var meshFilter = this.gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = this.gameObject.AddComponent(MeshRenderer);
        var colllider = this.gameObject.AddComponent(SphereCollider);
    };
    return Sphere;
}(Component));
export { Sphere };
//# sourceMappingURL=Sphere.js.map