import { Component } from "./Component";
import { MathUtils, SpotLight as SpotLightTHREE, SpotLightHelper } from "three";

/**
 * A spot light.
 * 
 * @noInheritDoc
 */
export class SpotLight extends Component {
    private light: SpotLightTHREE;
    private helper: SpotLightHelper;

    public get spotAngle(): number {
        return this.light.angle * MathUtils.RAD2DEG;
    }

    public set spotAngle(spotAngle: number) {
        this.light.angle = spotAngle * MathUtils.DEG2RAD;
    }

    public get range(): number {
        return this.light.distance;
    }

    public set range(range: number) {
        this.light.distance = range;
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
        this.light = new SpotLightTHREE( 0xffffff, 1, 10, 30 * MathUtils.DEG2RAD );
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    }

    public OnGizmosEnabled() {
        if (!this.helper) {
            this.helper = new SpotLightHelper(this.light);
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