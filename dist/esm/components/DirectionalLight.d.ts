import { Component } from "./Component";
export declare class DirectionalLight extends Component {
    private light;
    private helper;
    get color(): number;
    set color(color: number);
    get intensity(): number;
    set intensity(intensity: number);
    get shadows(): boolean;
    set shadows(shadows: boolean);
    OnEnable(): void;
    OnGizmosEnabled(): void;
    OnDrawGizmos(): void;
    OnGizmosDisabled(): void;
    Destroy(): void;
}
