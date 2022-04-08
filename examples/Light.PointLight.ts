/**
 * @description A point light.
 */
import { Scene, GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

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
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeMeshRenderer = cubeGameobject.GetComponent(Components.MeshRenderer);
    cubeMeshRenderer.material = new THREE.MeshLambertMaterial();
    cubeGameobject.transform.position.set(0, -2, 0);
    
    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.localScale.set(0.3, 0.3, 0.3);
    lightGameobject.CreatePrimitive(PrimitiveType.Sphere);
    const lightComponent = lightGameobject.AddComponent(Components.PointLight);

    const lightSphereMeshRenderer = lightGameobject.GetComponent(Components.MeshRenderer) as Components.MeshRenderer;
    const lightSphereMaterial = new THREE.MeshBasicMaterial();
    lightSphereMeshRenderer.material = lightSphereMaterial;

    const point = cubeGameobject.transform.position;
    const axis = lightComponent.transform.right;
    setInterval(() => {
        lightComponent.transform.RotateAround(point, axis, 1);
    }, 10);

    setInterval(() => {
        const color = Math.random() * 0xffffff;
        lightComponent.color.setHex(color);
        lightSphereMaterial.color.setHex(color);
    }, 3000);

    scene.Start();
};