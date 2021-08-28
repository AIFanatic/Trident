import { Component } from "./Component";
export declare class PointLight extends Component {
    private light;
    private helper;
    get range(): number;
    set range(range: number);
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
