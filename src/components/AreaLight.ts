import { Component } from "./Component";
import { Color, RectAreaLight as RectAreaLightTHREE } from "three";

import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { SerializeField } from "../utils/SerializeField";

/**
 * A rectangle area light.
 * 
 * @noInheritDoc
 */
export class AreaLight extends Component {
    private light: RectAreaLightTHREE;
    private helper: RectAreaLightHelper;

    @SerializeField
    public get width(): number {
        return this.light.width;
    }

    public set width(width: number) {
        this.light.width = width;
    }

    @SerializeField
    public get height(): number {
        return this.light.height;
    }

    public set height(height: number) {
        this.light.height = height;
    }

    @SerializeField
    public get color(): Color {
        return this.light.color;
    }

    public set color(color: Color) {
        this.light.color.copy(color);
    }

    @SerializeField
    public get intensity(): number {
        return this.light.intensity;
    }

    public set intensity(intensity: number) {
        this.light.intensity = intensity;
    }

    @SerializeField
    public get shadows(): boolean {
        return this.light.castShadow;
    }

    public set shadows(shadows: boolean) {
        this.light.castShadow = shadows;
    }

    public OnEnable() {
        this.light = new RectAreaLightTHREE( 0xffffff, 1, 1, 1 );
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;

        // Probably need this but no effect on examples and 300kb file
        // RectAreaLightUniformsLib.init();
    }

    public OnGizmosEnabled() {
        if (!this.helper) {
            this.helper = new RectAreaLightHelper(this.light);
            this.transform.group.add(this.helper);
        }
    }

    public OnDrawGizmos() {
        if (this.helper) {
            this.helper.update();
        }
    }

    public OnGizmosDisabled() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
    }

    public Destroy() {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    }
}