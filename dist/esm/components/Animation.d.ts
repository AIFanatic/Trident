import { AnimationClip } from "three";
import { Component } from "./Component";
/**
 * Add and play animations from an existing mesh.
 *
 * This mostly works with glTF models that have animations embedded into the model.
 *
 * @noInheritDoc
 */
export declare class Animation extends Component {
    private mixer;
    private animations;
    private action;
    private clock;
    Awake(): void;
    private OnMeshChanged;
    AddClip(clip: AnimationClip, name: string): void;
    Play(name: string): void;
    Stop(): void;
    Update(): void;
}
