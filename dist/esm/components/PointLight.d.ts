import { Component } from "./Component";
import { Color } from "three";
/**
 * A point light.
 *
 * @noInheritDoc
 */
export declare class PointLight extends Component {
    private light;
    private helper;
    get range(): number;
    set range(range: number);
    get color(): Color;
    set color(color: Color);
    get intensity(): number;
    set intensity(intensity: number);
    get shadows(): boolean;
    set shadows(shadows: boolean);
    OnEnable(): void;
    OnGizmosEnabled(): void;
    OnDrawGizmos(): void;
    OnGizmosDisabled(): void;
    Destroy(): void;
}
