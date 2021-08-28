import { PerspectiveCamera, Vector3, CameraHelper } from "three";
import { Component } from "./Component";

export enum ProjectionTypes {
    Perspective,
    Orthographic
}
export class Camera extends Component {
    private camera: PerspectiveCamera;
    private helper: CameraHelper;

    private previousTransformPosition: Vector3 = new Vector3();
    private previousCameraPosition: Vector3 = new Vector3();

    // private _projection: ProjectionTypes;

    // public get projection(): ProjectionTypes {
    //     return this._projection;
    // }

    // public set projection(projection: ProjectionTypes) {
        
    // }

    public get far(): number {
        return this.camera.far;
    }

    public set far(far: number) {
        this.camera.far = far;
        this.camera.updateProjectionMatrix();
    }

    public get near(): number {
        return this.camera.near;
    }

    public set near(near: number) {
        this.camera.near = near;
        this.camera.updateProjectionMatrix();
    }

    public get fieldOfView(): number {
        return this.camera.fov;
    }

    public set fieldOfView(fieldOfView: number) {
        this.camera.fov = fieldOfView;
        this.camera.updateProjectionMatrix();
    }

    public OnEnable() {
        const canvas = this.gameObject.scene.GetRenderer().renderer.domElement;
        this.camera = new PerspectiveCamera( 59, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000 );
        this.transform.group.add(this.camera as any);

        this.previousTransformPosition.copy(this.transform.localPosition);
        this.previousCameraPosition.copy(this.transform.localPosition);

        window.addEventListener("resize", (event: UIEvent) => {
            const canvas = this.gameObject.scene.GetRenderer().renderer.domElement;
            this.camera.aspect = canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight;
            this.camera.updateProjectionMatrix();
        });
    }

    public GetCamera(): PerspectiveCamera {
        return this.camera;
    }

    public OnGizmosEnabled() {
        if (!this.helper) {
            this.helper = new CameraHelper(this.camera);
            this.transform.group.add(this.helper);
        }
    }

    public OnDrawGizmos() {
        if (this.helper) {
            this.helper.update();
        }
    }

    public OnGizmosDisabled() {
        if (this.helper) {
            this.transform.group.remove(this.helper);
            this.helper = undefined;
        }
    }

    public Destroy() {
        this.OnGizmosDisabled();
        this.transform.group.remove(this.camera);
        this.gameObject.RemoveComponent(this);
    }
}