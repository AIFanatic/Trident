/**
 * @description Custom component creation.
 */
import { Scene, GameObject, Components } from '../dist/esm/trident-esm-bundle.js';
import { IPhysicsConfiguration } from '../dist/esm/interfaces/IPhysicsConfiguration.js';

class CustomComponent extends Components.Component {
    private cube: Components.Cube;

    public Start() {
        this.cube = this.gameObject.AddComponent(Components.Cube);
    }

    public Update() {
        this.cube.transform.eulerAngles.x += 1;
    }
}

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
}

const physicsConfig: IPhysicsConfiguration = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
}

const scene = new Scene(rendererConfig, physicsConfig);
scene.OnLoaded = () => {
    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(CustomComponent) as CustomComponent;
    cubeComponent.transform.position.set(0, -2, -10);
    
    scene.Start()
};