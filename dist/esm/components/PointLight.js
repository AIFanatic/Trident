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
export class PointLight extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.light = new PointLightTHREE(0xffffff, 1, 10);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    }
    get range() {
        return this.light.distance;
    }
    set range(range) {
        this.light.distance = range;
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
            this.helper = new PointLightHelper(this.light);
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
//# sourceMappingURL=PointLight.js.map