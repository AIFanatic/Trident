import { AnimationAction, AnimationClip, AnimationMixer, Clock } from "three";
import { Component } from "./Component";
import { MeshRenderer } from "./MeshRenderer";

/**
 * Add and play animations from an existing mesh.
 * 
 * This mostly works with glTF models that have animations embedded into the model.
 * 
 * @noInheritDoc
 */
export class Animation extends Component {
    private mixer: AnimationMixer;
    private animations: Map<string, AnimationClip>;
    private action: AnimationAction;

    private clock: Clock;

    public Awake() {
        this.animations = new Map<string, AnimationClip>();

        this.clock = new Clock(true);
        this.OnMeshChanged();
    }

    private OnMeshChanged() {
        const meshFilter: MeshRenderer = this.gameObject.GetComponent(MeshRenderer);
        const mesh = meshFilter.mesh;

        if (mesh) {
            this.mixer = new AnimationMixer(mesh);
        }
    }

    public AddClip(clip: AnimationClip, name: string) {
        this.animations.set(name, clip);
    }

    public Play(name: string) {
        if (!this.animations.has(name)) {
            console.warn("Tried to play non existing animation");
            return;
        }

        if (this.action) {
            this.action.stop();
        }

        this.action = this.mixer.clipAction(this.animations.get(name));
        this.action.play();
    }

    public Stop() {
        this.action.stop();
        this.action = null;
    }

    public Update() {
        if (this.mixer && this.action) {
            this.mixer.update(this.clock.getDelta());
        }
    }
}