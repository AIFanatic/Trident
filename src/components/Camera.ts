import { PerspectiveCamera, Vector3, CameraHelper } from "three";
import { SerializeField } from "../utils/SerializeField";
import { Component } from "./Component";

export enum ProjectionTypes {
    Perspective,
    Orthographic
}

/**
 * Camera allows to create multiple cameras for the same scene.
 * 
 * Use scene.SetActiveCamera(camera) to set it as the main camera.
 * 
 * @noInheritDoc
 */
export class Camera extends Component {
    private camera: PerspectiveCamera = new PerspectiveCamera( 60, 1, 0.1, 1000 );
    private helper: CameraHelper;

    @SerializeField
    public get far(): number {
        return this.camera.far;
    }

    public set far(far: number) {
        this.camera.far = far;
        this.camera.updateProjectionMatrix();
    }

    @SerializeField
    public get near(): number {
        return this.camera.near;
    }

    public set near(near: number) {
        this.camera.near = near;
        this.camera.updateProjectionMatrix();
    }

    @SerializeField
    public get fieldOfView(): number {
        return this.camera.fov;
    }

    public set fieldOfView(fieldOfView: number) {
        this.camera.fov = fieldOfView;
        this.camera.updateProjectionMatrix();
    }

    public Awake() {
        this.transform.group.add(this.camera as any);

        window.addEventListener("resize", (event: UIEvent) => {
            this.OnResize();
        });
        this.OnResize();
    }

    public GetCamera(): PerspectiveCamera {
        return this.camera;
    }

    public OnResize() {
        const canvas = this.gameObject.scene.GetRenderer().renderer.domElement;
        this.camera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
        this.camera.updateProjectionMatrix();
    }

    public OnDrawGizmos() {
        if (!this.helper) {
            this.helper = new CameraHelper(this.camera);
            this.transform.group.add(this.helper);
        }

        this.helper.update();
    }

    public Destroy() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper = undefined;
        }
        this.transform.group.remove(this.camera);
        this.gameObject.RemoveComponent(this);
    }
}