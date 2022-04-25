var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./Component";
import { RectAreaLight as RectAreaLightTHREE } from "three";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { SerializeField } from "../utils/SerializeField";
/**
 * A rectangle area light.
 *
 * @noInheritDoc
 */
export class AreaLight extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.light = new RectAreaLightTHREE(0xffffff, 1, 1, 1);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
        // Probably need this but no effect on examples and 300kb file
        // RectAreaLightUniformsLib.init();
    }
    get width() {
        return this.light.width;
    }
    set width(width) {
        this.light.width = width;
    }
    get height() {
        return this.light.height;
    }
    set height(height) {
        this.light.height = height;
    }
    get color() {
        return this.light.color;
    }
    set color(color) {
        this.light.color.copy(color);
    }
    get intensity() {
        return this.light.intensity;
    }
    set intensity(intensity) {
        this.light.intensity = intensity;
    }
    get shadows() {
        return this.light.castShadow;
    }
    set shadows(shadows) {
        this.light.castShadow = shadows;
    }
    OnDrawGizmos() {
        if (!this.helper) {
            this.helper = new RectAreaLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
        this.helper.update();
    }
    Destroy() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    }
}
__decorate([
    SerializeField
], AreaLight.prototype, "width", null);
__decorate([
    SerializeField
], AreaLight.prototype, "height", null);
__decorate([
    SerializeField
], AreaLight.prototype, "color", null);
__decorate([
    SerializeField
], AreaLight.prototype, "intensity", null);
__decorate([
    SerializeField
], AreaLight.prototype, "shadows", null);
//# sourceMappingURL=AreaLight.js.map