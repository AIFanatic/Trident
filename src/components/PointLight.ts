import { Component } from "./Component";
import { Color, PointLight as PointLightTHREE, PointLightHelper } from "three";
import { SerializeField } from "../utils/SerializeField";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";

/**
 * A point light.
 * 
 * @noInheritDoc
 */
export class PointLight extends Component {
    private light: PointLightTHREE = new PointLightTHREE( 0xffffff, 1, 10 );
    private helper: PointLightHelper;
    
    @SerializeField
    public get range(): number {
        return this.light.distance;
    }

    public set range(range: number) {
        this.light.distance = range;
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

    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);
        this.transform.group.add(this.light);
        this.light.parent = this.transform.group;
    }

    public OnDrawGizmos() {
        if (!this.helper) {
            this.helper = new PointLightHelper(this.light);
            this.transform.group.add(this.helper);
        }

        this.helper.update();
    }

    public Destroy() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper.dispose();
            this.helper = undefined;
        }
        this.transform.group.remove(this.light);
        this.gameObject.RemoveComponent(this);
    }
}