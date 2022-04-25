import { Component } from "./Component";
import { Color } from "three";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
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
    constructor(gameObject: GameObject, transform: Transform);
    OnDrawGizmos(): void;
    Destroy(): void;
}
