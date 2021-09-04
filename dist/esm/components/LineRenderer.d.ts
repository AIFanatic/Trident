import { Vector3 } from "three";
import { Component } from "./Component";
/**
 * Creates a line from point A (from) to point B (to).
 *
 * @noInheritDoc
 */
export declare class LineRenderer extends Component {
    from: Vector3;
    to: Vector3;
    color: number;
    private previousFrom;
    private previousTo;
    private material;
    private geometry;
    private line;
    OnEnable(): void;
    Update(): void;
    Destroy(): void;
}
