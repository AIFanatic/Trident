import { Component } from "./Component";
import { LineRenderer } from "./LineRenderer";
/**
 * Allows to visualize the local axis of a Transform.
 *
 * @noInheritDoc
 */
export class Gizmo extends Component {
    constructor() {
        super(...arguments);
        this.length = 20;
    }
    Awake() {
        this.upLine = this.gameObject.AddComponent(LineRenderer);
        this.rightLine = this.gameObject.AddComponent(LineRenderer);
        this.forwardLine = this.gameObject.AddComponent(LineRenderer);
        this.upLine.color = 0x00ff00;
        this.rightLine.color = 0x0000ff;
        this.forwardLine.color = 0xff0000;
    }
    Start() {
        if (!this.target) {
            console.error("Target is not set");
        }
    }
    Update() {
        this.upLine.from.copy(this.target.position);
        this.upLine.to.copy(this.upLine.from).add(this.target.up.clone().multiplyScalar(this.length));
        this.rightLine.from.copy(this.target.position);
        this.rightLine.to.copy(this.rightLine.from).add(this.target.right.clone().multiplyScalar(this.length));
        this.forwardLine.from.copy(this.target.position);
        this.forwardLine.to.copy(this.forwardLine.from).add(this.target.forward.clone().multiplyScalar(this.length));
    }
}
//# sourceMappingURL=Gizmo.js.map