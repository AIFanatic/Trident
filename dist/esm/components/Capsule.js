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
import { MeshFilter, MeshRenderer } from ".";
import { Component } from "./Component";
import { CapsuleBufferGeometry } from "../utils/CapsuleGeometry";
import { CapsuleCollider } from "./CapsuleCollider";
var Capsule = /** @class */ (function (_super) {
    __extends(Capsule, _super);
    function Capsule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Capsule.prototype.OnEnable = function () {
        var geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 4, 4, 0, 2 * Math.PI);
        geometry.rotateZ(Math.PI / 2);
        var meshFilter = this.gameObject.AddComponent(MeshFilter);
        meshFilter.mesh = geometry;
        var meshRenderer = this.gameObject.AddComponent(MeshRenderer);
        var colllider = this.gameObject.AddComponent(CapsuleCollider);
    };
    return Capsule;
}(Component));
export { Capsule };
//# sourceMappingURL=Capsule.js.map