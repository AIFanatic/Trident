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
import { Component } from "./Component";
import { DirectionalLight as DirectionalLightTHREE, DirectionalLightHelper } from "three";
/**
 * A directional light.
 *
 * @noInheritDoc
 */
var DirectionalLight = /** @class */ (function (_super) {
    __extends(DirectionalLight, _super);
    function DirectionalLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DirectionalLight.prototype, "color", {
        get: function () {
            return this.light.color.getHex();
        },
        set: function (color) {
            this.light.color.setHex(color);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectionalLight.prototype, "intensity", {
        get: function () {
            return this.light.intensity;
        },
        set: function (intensity) {
            this.light.intensity = intensity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectionalLight.prototype, "shadows", {
        get: function () {
            return this.light.castShadow;
        },
        set: function (shadows) {
            this.light.castShadow = shadows;
        },
        enumerable: false,
        configurable: true
    });
    DirectionalLight.prototype.OnEnable = function () {
        this.light = new DirectionalLightTHREE(0xffffff, 1);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    };
    DirectionalLight.prototype.OnGizmosEnabled = function () {
        if (!this.helper) {
            this.helper = new DirectionalLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    };
    DirectionalLight.prototype.OnDrawGizmos = function () {
        if (this.helper) {
            this.helper.update();
        }
    };
    DirectionalLight.prototype.OnGizmosDisabled = function () {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
    };
    DirectionalLight.prototype.Destroy = function () {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    };
    return DirectionalLight;
}(Component));
export { DirectionalLight };
//# sourceMappingURL=DirectionalLight.js.map