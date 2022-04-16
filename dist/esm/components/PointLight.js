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
import { PointLight as PointLightTHREE, PointLightHelper } from "three";
import { SerializeField } from "../utils/SerializeField";
/**
 * A point light.
 *
 * @noInheritDoc
 */
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.light = new PointLightTHREE(0xffffff, 1, 10);
        return _this;
    }
    Object.defineProperty(PointLight.prototype, "range", {
        get: function () {
            return this.light.distance;
        },
        set: function (range) {
            this.light.distance = range;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointLight.prototype, "color", {
        get: function () {
            return this.light.color;
        },
        set: function (color) {
            this.light.color.copy(color);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointLight.prototype, "intensity", {
        get: function () {
            return this.light.intensity;
        },
        set: function (intensity) {
            this.light.intensity = intensity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointLight.prototype, "shadows", {
        get: function () {
            return this.light.castShadow;
        },
        set: function (shadows) {
            this.light.castShadow = shadows;
        },
        enumerable: false,
        configurable: true
    });
    PointLight.prototype.Awake = function () {
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    };
    PointLight.prototype.OnDrawGizmos = function () {
        if (!this.helper) {
            this.helper = new PointLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
        this.helper.update();
    };
    PointLight.prototype.Destroy = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    };
    __decorate([
        SerializeField
    ], PointLight.prototype, "range", null);
    __decorate([
        SerializeField
    ], PointLight.prototype, "color", null);
    __decorate([
        SerializeField
    ], PointLight.prototype, "intensity", null);
    __decorate([
        SerializeField
    ], PointLight.prototype, "shadows", null);
    return PointLight;
}(Component));
export { PointLight };
//# sourceMappingURL=PointLight.js.map