import { Component } from "./Component";
import { PointLight as PointLightTHREE, PointLightHelper } from "three";

/**
 * A point light.
 * 
 * @noInheritDoc
 */
export class PointLight extends Component {
    private light: PointLightTHREE;
    private helper: PointLightHelper;
    
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
        this.light = new PointLightTHREE( 0xffffff, 1, 10 );
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    }

    public OnGizmosEnabled() {
        if (!this.helper) {
            this.helper = new PointLightHelper(this.light);
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