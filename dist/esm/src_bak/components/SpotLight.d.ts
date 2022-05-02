import { Component } from "./Component";
import { Color } from "three";
import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
/**
 * A spot light.
 *
 * @noInheritDoc
 */
export declare class SpotLight extends Component {
    private light;
    private helper;
    get spotAngle(): number;
    set spotAngle(spotAngle: number);
    get range(): number;
    set range(range: number);
    get color(): Color;
    set color(color: Color);
    get intensity(): number;
    set intensity(intensity: number);
    get shadows(): boolean;
    set shadows(shadows: boolean);
    constructor(gameObject: GameObject, transform: Transform);
    OnGizmosEnabled(): void;
    OnDrawGizmos(): void;
    Destroy(): void;
}
