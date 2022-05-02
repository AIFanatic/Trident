import { Component } from "./Component";
import { Transform } from "./Transform";
/**
 * Allows to visualize the local axis of a Transform.
 *
 * @noInheritDoc
 */
export declare class Gizmo extends Component {
    private upLine;
    private rightLine;
    private forwardLine;
    length: number;
    target: Transform;
    Awake(): void;
    Start(): void;
    Update(): void;
}
