import { Component } from "./Component";
import { Color } from "three";
/**
 * A directional light.
 *
 * @noInheritDoc
 */
export declare class DirectionalLight extends Component {
    private light;
    private helper;
    get color(): Color;
    set color(color: Color);
    get intensity(): number;
    set intensity(intensity: number);
    get shadows(): boolean;
    set shadows(shadows: boolean);
    Awake(): void;
    OnDrawGizmos(): void;
    Destroy(): void;
}
