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
import { PointLight as PointLightTHREE, PointLightHelper } from "three";
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            return this.light.color.getHex();
        },
        set: function (color) {
            this.light.color.setHex(color);
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
    PointLight.prototype.OnEnable = function () {
        this.light = new PointLightTHREE(0xffffff, 1, 10);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    };
    PointLight.prototype.OnGizmosEnabled = function () {
        if (!this.helper) {
            this.helper = new PointLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    };
    PointLight.prototype.OnDrawGizmos = function () {
        if (this.helper) {
            this.helper.update();
        }
    };
    PointLight.prototype.OnGizmosDisabled = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
    };
    PointLight.prototype.Destroy = function () {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    };
    return PointLight;
}(Component));
export { PointLight };
//# sourceMappingURL=PointLight.js.map