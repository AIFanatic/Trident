import { Component } from "./Component";
import { Transform } from "./Transform";
export declare class Gizmo extends Component {
    private upLine;
    private rightLine;
    private forwardLine;
    length: number;
    target: Transform;
    OnEnable(): void;
    Start(): void;
    Update(): void;
}
