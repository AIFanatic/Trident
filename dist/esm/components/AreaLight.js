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
import { RectAreaLight as RectAreaLightTHREE } from "three";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
var AreaLight = /** @class */ (function (_super) {
    __extends(AreaLight, _super);
    function AreaLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AreaLight.prototype, "width", {
        get: function () {
            return this.light.width;
        },
        set: function (width) {
            this.light.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AreaLight.prototype, "height", {
        get: function () {
            return this.light.height;
        },
        set: function (height) {
            this.light.height = height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AreaLight.prototype, "color", {
        get: function () {
            return this.light.color.getHex();
        },
        set: function (color) {
            this.light.color.setHex(color);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AreaLight.prototype, "intensity", {
        get: function () {
            return this.light.intensity;
        },
        set: function (intensity) {
            this.light.intensity = intensity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AreaLight.prototype, "shadows", {
        get: function () {
            return this.light.castShadow;
        },
        set: function (shadows) {
            this.light.castShadow = shadows;
        },
        enumerable: false,
        configurable: true
    });
    AreaLight.prototype.OnEnable = function () {
        this.light = new RectAreaLightTHREE(0xffffff, 1, 1, 1);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
        // Probably need this but no effect on examples and 300kb file
        // RectAreaLightUniformsLib.init();
    };
    AreaLight.prototype.OnGizmosEnabled = function () {
        if (!this.helper) {
            this.helper = new RectAreaLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    };
    AreaLight.prototype.OnDrawGizmos = function () {
        if (this.helper) {
            this.helper.update();
        }
    };
    AreaLight.prototype.OnGizmosDisabled = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
    };
    AreaLight.prototype.Destroy = function () {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    };
    return AreaLight;
}(Component));
export { AreaLight };
//# sourceMappingURL=AreaLight.js.map