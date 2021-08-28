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
import { PlaneGeometry } from "three";
import { MeshFilter, MeshRenderer, PlaneCollider } from ".";
import { Component } from "./Component";
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plane.prototype.OnEnable = function () {
        var geometry = new PlaneGeometry(this.transform.localScale.x, this.transform.localScale.z);
        geometry.rotateX(-Math.PI / 2);
        var meshFilter = this.gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = this.gameObject.AddComponent(MeshRenderer);
        var colllider = this.gameObject.AddComponent(PlaneCollider);
    };
    return Plane;
}(Component));
export { Plane };
//# sourceMappingURL=Plane.js.map