/**
 * @description A rectangular area light.
 */
import { Scene, GameObject, Components, THREE } from '../dist/esm/trident-esm-bundle.js';

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
camera.transform.position.set(-8, 0, 7);
camera.transform.eulerAngles.set(-15, -50, -10);

scene.OnLoaded = () => {
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.transform.localScale.set(10, 1, 10);
    const cubeComponent = cubeGameobject.AddComponent(Components.Cube);
    const cubeMeshRenderer = cubeGameobject.GetComponent(Components.MeshRenderer);
    cubeMeshRenderer.material = new THREE.MeshStandardMaterial();
    cubeComponent.transform.position.set(0, -2, 0);
    
    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.eulerAngles.set(-90, 20, 0);
    const lightComponent = lightGameobject.AddComponent(Components.AreaLight);
    lightComponent.width = 1;
    lightComponent.height = 5.5;
    lightComponent.intensity = 5;

    scene.Start();
    
    setInterval(() => {
        const color = Math.random() * 0xffffff;
        lightComponent.color = color;
    }, 3000);
};