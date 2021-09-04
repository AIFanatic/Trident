import { Plane, Vector3 } from "three";
import { Component } from "./Component";
import { LineRenderer } from "./LineRenderer";
import { Transform } from "./Transform";

/**
 * Allows to visualize the local axis of a Transform.
 * 
 * @noInheritDoc
 */
export class Gizmo extends Component {
    private upLine: LineRenderer;
    private rightLine: LineRenderer;
    private forwardLine: LineRenderer;

    public length: number = 20;

    public target: Transform;

    public OnEnable() {
        this.upLine = this.gameObject.AddComponent(LineRenderer);
        this.rightLine = this.gameObject.AddComponent(LineRenderer);
        this.forwardLine = this.gameObject.AddComponent(LineRenderer);

        this.upLine.color = 0x00ff00;
        this.rightLine.color = 0x0000ff;
        this.forwardLine.color = 0xff0000;
    }

    public Start() {
        if (!this.target) {
            console.error("Target is not set");
        }
    }

    public Update() {
        this.upLine.from.copy(this.target.position);
        this.upLine.to.copy(this.upLine.from).add(this.target.up.clone().multiplyScalar(this.length));

        this.rightLine.from.copy(this.target.position);
        this.rightLine.to.copy(this.rightLine.from).add(this.target.right.clone().multiplyScalar(this.length));

        this.forwardLine.from.copy(this.target.position);
        this.forwardLine.to.copy(this.forwardLine.from).add(this.target.forward.clone().multiplyScalar(this.length));
    }

}