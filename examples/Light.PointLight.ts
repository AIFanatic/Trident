/**
 * @description A point light.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene();
scene.gizmosEnabled = true;
scene.OnInitialized = () => {
    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.set(-8, 0, 7);
    camera.transform.eulerAngles.set(-15, -50, -10);
    
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeMeshRenderer = cubeGameobject.GetComponent(Components.MeshRenderer);
    cubeMeshRenderer.material = new THREE.MeshLambertMaterial();
    cubeGameobject.transform.position.set(0, -2, 0);
    
    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.localScale.set(0.3, 0.3, 0.3);
    lightGameobject.CreatePrimitive(PrimitiveType.Sphere);
    const lightComponent = lightGameobject.AddComponent(Components.PointLight);

    const lightSphereMeshRenderer = lightGameobject.GetComponent(Components.MeshRenderer);
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

    scene.Load();
scene.Play();
};