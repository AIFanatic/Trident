/**
 * @description Manipulate child Transform with parent.
 */
import { Scene, Components, THREE } from '../dist/esm/trident-esm-bundle.js';

const rendererConfig = {
    containerId: 'canvasContainer',
    targetFrameRate: 60,
};

const physicsConfig = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm"
};

const scene = new Scene(rendererConfig, physicsConfig);
const cameraComponent = scene.GetActiveCamera();
cameraComponent.transform.position.z = 40;

scene.OnLoaded = () => {
    const cube = new Components.GameObject(scene);
    const cubeTest = cube.AddComponent(Components.Cube);
    cube.transform.position.y = 0;

    const cube1 = new Components.GameObject(scene);
    const cubeTest1 = cube1.AddComponent(Components.Cube);
    cube1.transform.parent = cube.transform;
    cube1.transform.position.y = 2;

    let goingUp = false;

    setInterval(() => {

        if (goingUp) {
            cube.transform.eulerAngles.z += 1;
            cube.transform.position.y += 0.01;
            cube.transform.localScale.x += 0.01;
        }
        else {
            cube.transform.eulerAngles.z -= 1;
            cube.transform.position.y -= 0.01;
            cube.transform.localScale.x -= 0.01;
        }
    }, 10);

    setInterval(() => {
        goingUp = !goingUp;
    }, 5000);
    scene.Start();
};