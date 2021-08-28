/**
 * @description Adding a new camera to the scene.
 */
import { Scene, GameObject, Components } from '../dist/esm/trident-esm-bundle.js';

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
};
const physicsConfig = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
};

const scene = new Scene(rendererConfig, physicsConfig);
scene.EnableGizmos();

const camera = scene.GetActiveCamera();
camera.transform.position.z = 60;

let farLimitReached = false;
scene.OnLoaded = () => {
    const cameraGameObject = new GameObject(scene);
    const cameraComponent = cameraGameObject.AddComponent(Components.Camera);
    cameraComponent.far = 10;
    
    setInterval(() => {
        cameraComponent.transform.eulerAngles.x += 0.5;

        if (farLimitReached) cameraComponent.far -= 0.1;
        else cameraComponent.far += 0.1;
    }, 10);

    setInterval(() => {
        farLimitReached = !farLimitReached;
    }, 1000);
    
    scene.Start();
};