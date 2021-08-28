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
import { MathUtils, SpotLight as SpotLightTHREE, SpotLightHelper } from "three";
var SpotLight = /** @class */ (function (_super) {
    __extends(SpotLight, _super);
    function SpotLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SpotLight.prototype, "spotAngle", {
        get: function () {
            return this.light.angle * MathUtils.RAD2DEG;
        },
        set: function (spotAngle) {
            this.light.angle = spotAngle * MathUtils.DEG2RAD;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotLight.prototype, "range", {
        get: function () {
            return this.light.distance;
        },
        set: function (range) {
            this.light.distance = range;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotLight.prototype, "color", {
        get: function () {
            return this.light.color.getHex();
        },
        set: function (color) {
            this.light.color.setHex(color);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotLight.prototype, "intensity", {
        get: function () {
            return this.light.intensity;
        },
        set: function (intensity) {
            this.light.intensity = intensity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotLight.prototype, "shadows", {
        get: function () {
            return this.light.castShadow;
        },
        set: function (shadows) {
            this.light.castShadow = shadows;
        },
        enumerable: false,
        configurable: true
    });
    SpotLight.prototype.OnEnable = function () {
        this.light = new SpotLightTHREE(0xffffff, 1, 10, 30 * MathUtils.DEG2RAD);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    };
    SpotLight.prototype.OnGizmosEnabled = function () {
        if (!this.helper) {
            this.helper = new SpotLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    };
    SpotLight.prototype.OnDrawGizmos = function () {
        if (this.helper) {
            this.helper.update();
        }
    };
    SpotLight.prototype.OnGizmosDisabled = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
    };
    SpotLight.prototype.Destroy = function () {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    };
    return SpotLight;
}(Component));
export { SpotLight };
//# sourceMappingURL=SpotLight.js.map