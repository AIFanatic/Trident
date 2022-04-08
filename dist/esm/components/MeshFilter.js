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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./Component";
import { SerializeField } from "../utils/SerializeField";
/**
 * Stores a geometry that later can be rendered to the scene.
 *
 * @noInheritDoc
 */
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
    MeshFilter.prototype.Destroy = function () {
        if (this.mesh) {
            this.mesh.dispose();
        }
        this.gameObject.RemoveComponent(this);
    };
    __decorate([
        SerializeField
    ], MeshFilter.prototype, "mesh", null);
    return MeshFilter;
}(Component));
export { MeshFilter };
//# sourceMappingURL=MeshFilter.js.map