import { AnimationClip } from "three";
import { Component } from "./Component";
export declare class Animation extends Component {
    private mixer;
    private animations;
    private action;
    private clock;
    OnEnable(): void;
    private OnMeshChanged;
    AddClip(clip: AnimationClip, name: string): void;
    Play(name: string): void;
    Stop(): void;
    Update(): void;
}
