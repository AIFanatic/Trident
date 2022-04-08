/**
 * @description Creating and rendering a cube.
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
scene.OnLoaded = () => {
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);

    cubeGameobject.transform.position.set(0, -2, -10);

    scene.Start()
};