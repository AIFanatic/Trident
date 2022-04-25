import { Component } from "./Component";
import { Color } from "three";
import { GameObject, Transform } from ".";
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
    constructor(gameObject: GameObject, transform: Transform);
    OnDrawGizmos(): void;
    Destroy(): void;
}
