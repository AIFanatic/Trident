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
import { MeshFilter } from "./MeshFilter";
import { Component } from "./Component";
import { MeshRendererDefaults } from "../defaults/MeshRendererDefaults";
import { Mesh } from "three";
/**
 * Renders a geometry from MeshFilter into the scene.
 *
 * @noInheritDoc
 */
var MeshRenderer = /** @class */ (function (_super) {
    __extends(MeshRenderer, _super);
    function MeshRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._material = MeshRendererDefaults.DefaultMaterial();
        return _this;
    }
    Object.defineProperty(MeshRenderer.prototype, "mesh", {
        get: function () {
            return this._mesh;
        },
        set: function (mesh) {
            this.RemoveMesh();
            this.AddMeshToViewer(mesh);
            this._mesh = mesh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshRenderer.prototype, "material", {
        get: function () {
            return this._material;
        },
        set: function (material) {
            this._material = material;
            if (this._mesh) {
                this._mesh.material = this._material;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshRenderer.prototype, "castShadows", {
        get: function () {
            return this.transform.group.castShadow;
        },
        set: function (castShadows) {
            this.transform.group.castShadow = castShadows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshRenderer.prototype, "receiveShadows", {
        get: function () {
            return this.transform.group.receiveShadow;
        },
        set: function (receiveShadows) {
            this.transform.group.receiveShadow = receiveShadows;
        },
        enumerable: false,
        configurable: true
    });
    MeshRenderer.prototype.OnEnable = function () {
        this.renderer = this.gameObject.scene.GetRenderer();
        this.AddMeshFromMeshFilter();
    };
    MeshRenderer.prototype.MeshFilterModelChanged = function (mesh) {
        this.AddMeshFromMeshFilter();
    };
    MeshRenderer.prototype.RemoveMesh = function () {
        if (this._mesh) {
            this.transform.group.remove(this._mesh);
            this.renderer.scene.remove(this._mesh);
            var material = this._mesh.material;
            if (material && material.dispose) {
                material.dispose();
            }
        }
    };
    MeshRenderer.prototype.AddMeshFromMeshFilter = function () {
        var geometry = this.GetMeshFromMeshFilter();
        if (geometry) {
            this.mesh = new Mesh(geometry, this.material);
        }
    };
    MeshRenderer.prototype.AddMeshToViewer = function (mesh) {
        if (mesh.name == "") {
            mesh.name = mesh.uuid;
        }
        this.transform.group.add(mesh);
    };
    MeshRenderer.prototype.GetMeshFromMeshFilter = function () {
        var meshFilter = this.gameObject.GetComponent(MeshFilter);
        if (meshFilter) {
            return meshFilter.mesh;
        }
        return null;
    };
    MeshRenderer.prototype.Destroy = function () {
        this.RemoveMesh();
        this.gameObject.RemoveComponent(this);
    };
    return MeshRenderer;
}(Component));
export { MeshRenderer };
//# sourceMappingURL=MeshRenderer.js.map