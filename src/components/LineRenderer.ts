import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";
import { Component } from "./Component";

/**
 * Creates a line from point A (from) to point B (to).
 * 
 * @noInheritDoc
 */
export class LineRenderer extends Component {
    public from: Vector3 = new Vector3();
    public to: Vector3 = new Vector3();
    public color: number = 0xffffff;

    private previousFrom: Vector3 = new Vector3();
    private previousTo: Vector3 = new Vector3();

    private material: LineBasicMaterial;
    private geometry: BufferGeometry;
    private line: Line;

    public OnEnable() {
        this.material = new LineBasicMaterial( { color: this.color } );

        this.geometry = new BufferGeometry().setFromPoints( [this.from, this.to] );
        const line = new Line( this.geometry, this.material );

        this.transform.group.add(line);
        this.line = line;
    }

    public Update() {
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

    public Destroy() {
        if (this.line) {
            this.transform.group.remove(this.line);
        }

        this.gameObject.RemoveComponent(this);
    }
}