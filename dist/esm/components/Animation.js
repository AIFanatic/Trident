import { AnimationMixer, Clock } from "three";
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
    Awake() {
        this.animations = new Map();
        this.clock = new Clock(true);
        this.OnMeshChanged();
    }
    OnMeshChanged() {
        const meshFilter = this.gameObject.GetComponent(MeshRenderer);
        const mesh = meshFilter.mesh;
        if (mesh) {
            this.mixer = new AnimationMixer(mesh);
        }
    }
    AddClip(clip, name) {
        this.animations.set(name, clip);
    }
    Play(name) {
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
    Stop() {
        this.action.stop();
        this.action = null;
    }
    Update() {
        if (this.mixer && this.action) {
            this.mixer.update(this.clock.getDelta());
        }
    }
}
//# sourceMappingURL=Animation.js.map