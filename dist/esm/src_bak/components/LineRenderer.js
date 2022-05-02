import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";
import { Component } from "./Component";
/**
 * Creates a line from point A (from) to point B (to).
 *
 * @noInheritDoc
 */
export class LineRenderer extends Component {
    constructor() {
        super(...arguments);
        this.from = new Vector3();
        this.to = new Vector3();
        this.color = 0xffffff;
        this.previousFrom = new Vector3();
        this.previousTo = new Vector3();
    }
    Awake() {
        this.material = new LineBasicMaterial({ color: this.color });
        this.geometry = new BufferGeometry().setFromPoints([this.from, this.to]);
        const line = new Line(this.geometry, this.material);
        this.transform.group.add(line);
        this.line = line;
    }
    Update() {
        if (this.material.color.getHex() != this.color) {
            this.material.color.setHex(this.color);
        }
        if (this.previousFrom.distanceToSquared(this.from) > Number.EPSILON
            || this.previousTo.distanceToSquared(this.to) > Number.EPSILON) {
            this.geometry.setFromPoints([this.from, this.to]);
            this.previousFrom.copy(this.from);
            this.previousTo.copy(this.to);
            this.geometry.attributes.position.needsUpdate = true;
        }
    }
    Destroy() {
        if (this.line) {
            this.transform.group.remove(this.line);
        }
        this.gameObject.RemoveComponent(this);
    }
}
//# sourceMappingURL=LineRenderer.js.map