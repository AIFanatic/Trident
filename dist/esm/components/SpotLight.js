var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./Component";
import { MathUtils, SpotLight as SpotLightTHREE, SpotLightHelper } from "three";
import { SerializeField } from "../utils/SerializeField";
/**
 * A spot light.
 *
 * @noInheritDoc
 */
export class SpotLight extends Component {
    constructor(gameObject, transform) {
        super(gameObject, transform);
        this.light = new SpotLightTHREE(0xffffff, 1, 10, 30 * MathUtils.DEG2RAD);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    }
    get spotAngle() {
        return this.light.angle * MathUtils.RAD2DEG;
    }
    set spotAngle(spotAngle) {
        this.light.angle = spotAngle * MathUtils.DEG2RAD;
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
    OnGizmosEnabled() {
        if (!this.helper) {
            this.helper = new SpotLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    }
    OnDrawGizmos() {
        if (!this.helper) {
            this.helper = new SpotLightHelper(this.light);
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
], SpotLight.prototype, "spotAngle", null);
__decorate([
    SerializeField
], SpotLight.prototype, "range", null);
__decorate([
    SerializeField
], SpotLight.prototype, "color", null);
__decorate([
    SerializeField
], SpotLight.prototype, "intensity", null);
__decorate([
    SerializeField
], SpotLight.prototype, "shadows", null);
//# sourceMappingURL=SpotLight.js.map