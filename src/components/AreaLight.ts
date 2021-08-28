import { Component } from "./Component";
import { RectAreaLight as RectAreaLightTHREE } from "three";

import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

export class AreaLight extends Component {
    private light: RectAreaLightTHREE;
    private helper: RectAreaLightHelper;

    public get width(): number {
        return this.light.width;
    }

    public set width(width: number) {
        this.light.width = width;
    }

    public get height(): number {
        return this.light.height;
    }

    public set height(height: number) {
        this.light.height = height;
    }

    public get color(): number {
        return this.light.color.getHex();
    }

    public set color(color: number) {
        this.light.color.setHex(color);
    }

    public get intensity(): number {
        return this.light.intensity;
    }

    public set intensity(intensity: number) {
        this.light.intensity = intensity;
    }

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