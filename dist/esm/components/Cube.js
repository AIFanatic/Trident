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
import { BoxGeometry } from "three";
import { BoxCollider, MeshFilter, MeshRenderer } from ".";
import { Component } from "./Component";
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cube.prototype.OnEnable = function () {
        var geometry = new BoxGeometry(this.transform.localScale.x, this.transform.localScale.y, this.transform.localScale.z);
        var meshFilter = this.gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = this.gameObject.AddComponent(MeshRenderer);
        var colllider = this.gameObject.AddComponent(BoxCollider);
    };
    return Cube;
}(Component));
export { Cube };
//# sourceMappingURL=Cube.js.map