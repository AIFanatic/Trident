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
import { MeshFilter } from "./MeshFilter";
import { Component } from "./Component";
import { Mesh, MeshStandardMaterial } from "three";
import { SerializeField } from "../utils/SerializeField";
var DefaultMaterial = new MeshStandardMaterial();
/**
 * Renders a geometry from MeshFilter into the scene.
 *
 * @noInheritDoc
 */
var MeshRenderer = /** @class */ (function (_super) {
    __extends(MeshRenderer, _super);
    function MeshRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._material = DefaultMaterial;
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
            this.transform.group.traverse(function (object) {
                object.castShadow = castShadows;
            });
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
            this.transform.group.traverse(function (object) {
                object.receiveShadow = receiveShadows;
            });
        },
        enumerable: false,
        configurable: true
    });
    MeshRenderer.prototype.Awake = function () {
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
            this.mesh.userData.transform = this.transform;
            this.castShadows = true;
            this.receiveShadows = true;
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
    __decorate([
        SerializeField
    ], MeshRenderer.prototype, "material", null);
    __decorate([
        SerializeField
    ], MeshRenderer.prototype, "castShadows", null);
    __decorate([
        SerializeField
    ], MeshRenderer.prototype, "receiveShadows", null);
    return MeshRenderer;
}(Component));
export { MeshRenderer };
//# sourceMappingURL=MeshRenderer.js.map