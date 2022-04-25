import { PerspectiveCamera } from "three";
import { GameObject, Transform } from ".";
import { Component } from "./Component";
export declare enum ProjectionTypes {
    Perspective = 0,
    Orthographic = 1
}
/**
 * Camera allows to create multiple cameras for the same scene.
 *
 * Use scene.SetActiveCamera(camera) to set it as the main camera.
 *
 * @noInheritDoc
 */
export declare class Camera extends Component {
    private camera;
    private helper;
    get far(): number;
    set far(far: number);
    get near(): number;
    set near(near: number);
    get fieldOfView(): number;
    set fieldOfView(fieldOfView: number);
    constructor(gameObject: GameObject, transform: Transform);
    GetCamera(): PerspectiveCamera;
    OnResize(): void;
    OnDrawGizmos(): void;
    Destroy(): void;
}
