/**
 * @description A spot light.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateScene({}, (scene: Scene) => {
    scene.gizmosEnabled = true;

    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.set(-8, 0, 7);
    camera.transform.eulerAngles.set(-15, -50, -10);
    
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;
    const floorMeshRenderer = floorGameObject.GetComponent(Components.MeshRenderer);
    floorMeshRenderer.material = new THREE.MeshStandardMaterial();
    
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeMeshRenderer = cubeGameobject.GetComponent(Components.MeshRenderer);
    cubeMeshRenderer.material = new THREE.MeshStandardMaterial();
    cubeGameobject.transform.position.set(0, -2, 0);
    
    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.localScale.set(0.3, 0.3, 0.3);
    const lightComponent = lightGameobject.AddComponent(Components.SpotLight);
    lightComponent.range = 100;
    
    setInterval(() => {
        const color = Math.random() * 0xffffff;
        lightComponent.color.setHex(color);
    }, 3000);
    
    scene.Load();
    scene.Play();
});