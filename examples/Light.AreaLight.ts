/**
 * @description A rectangular area light.
 */
 import { SceneHelper } from './assets/SceneHelper.js';
 import { Scene, GameObject, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';
 
 SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();
    runtime.gizmosEnabled = true;

    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.set(-8, 0, 7);
    camera.transform.eulerAngles.set(-15, -50, -10);

    const cubeGameobject = new GameObject(scene);
    cubeGameobject.transform.localScale.set(10, 1, 10);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    cubeGameobject.transform.position.set(0, -2, 0);
    
    const lightGameobject = new GameObject(scene);
    lightGameobject.transform.eulerAngles.set(-90, 20, 0);
    const lightComponent = lightGameobject.AddComponent(Components.AreaLight);
    lightComponent.width = 1;
    lightComponent.height = 5.5;
    lightComponent.intensity = 5;

    runtime.Load();
    runtime.Play();
    
    setInterval(() => {
        const color = Math.random() * 0xffffff;
        lightComponent.color.setHex(color);
    }, 3000);
 });