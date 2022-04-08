/**
 * @description A simple cube with physics.
 */
import { Scene, GameObject, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';
import { IPhysicsConfiguration } from '../dist/esm/interfaces/IPhysicsConfiguration.js';


const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
}

const physicsConfig: IPhysicsConfiguration = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
}

const scene = new Scene(rendererConfig, physicsConfig);
const cameraComponent = scene.GetActiveCamera();
cameraComponent.transform.position.z = 40;

scene.OnLoaded = () => {
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;

    const cubeGameobject = new GameObject(scene);
    cubeGameobject.transform.position.set(0, -2, -10);

    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeRigidbody = cubeGameobject.AddComponent(Components.Rigidbody) as Components.Rigidbody;

    scene.Start()
};