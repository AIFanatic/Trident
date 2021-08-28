import { PerspectiveCamera } from "three";
import { Component } from "./Component";
export declare enum ProjectionTypes {
    Perspective = 0,
    Orthographic = 1
}
export declare class Camera extends Component {
    private camera;
    private helper;
    private previousTransformPosition;
    private previousCameraPosition;
    get far(): number;
    set far(far: number);
    get near(): number;
    set near(near: number);
    get fieldOfView(): number;
    set fieldOfView(fieldOfView: number);
    OnEnable(): void;
    GetCamera(): PerspectiveCamera;
    OnGizmosEnabled(): void;
    OnDrawGizmos(): void;
    OnGizmosDisabled(): void;
    Destroy(): void;
}
