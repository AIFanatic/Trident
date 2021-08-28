var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "./Component";
var MeshFilter = /** @class */ (function (_super) {
    __extends(MeshFilter, _super);
    function MeshFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeshFilter.prototype.OnEnable = function () {
    };
    Object.defineProperty(MeshFilter.prototype, "mesh", {
        get: function () {
            return this._mesh;
        },
        set: function (mesh) {
            this._mesh = mesh;
            this.gameObject.BroadcastMessage("MeshFilterModelChanged", this._mesh);
        },
        enumerable: false,
        configurable: true
    });
    // public GetMesh(): Geometry {
    //     return this.mesh;
    // }
    MeshFilter.prototype.Destroy = function () {
        if (this.mesh) {
            this.mesh.dispose();
        }
    };
    return MeshFilter;
}(Component));
export { MeshFilter };
//# sourceMappingURL=MeshFilter.js.map