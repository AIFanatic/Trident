/**
 * @description A spot light.
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

const camera = scene.GetActiveCamera()
camera.transform.position.set(-8, 0, 7);
camera.transform.eulerAngles.set(-15, -50, -10);

scene.OnLoaded = () => {
    const floorGameObject = new GameObject(scene);
    const floor = floorGameObject.AddComponent(Components.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;
    const floorMeshRenderer = floorGameObject.GetComponent(Components.MeshRenderer);
    floorMeshRenderer.material = new THREE.MeshStandardMaterial();

    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(Components.Cube);
    const cubeMeshRenderer = cubeGameobject.GetComponent(Components.MeshRenderer);
    cubeMeshRenderer.material = new THREE.MeshStandardMaterial();
    cubeComponent.transform.position.set(0, -2, 0);

    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.localScale.set(0.3, 0.3, 0.3);
    const lightComponent = lightGameobject.AddComponent(Components.SpotLight);
    lightComponent.range = 100;
    
    setInterval(() => {
        const color = Math.random() * 0xffffff;
        lightComponent.color = color;
    }, 3000);

    scene.Start();
};