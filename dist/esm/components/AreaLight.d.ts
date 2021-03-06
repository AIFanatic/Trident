import { Component } from "./Component";
import { Color } from "three";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * A rectangle area light.
 *
 * @noInheritDoc
 */
export declare class AreaLight extends Component {
    private light;
    private helper;
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
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
