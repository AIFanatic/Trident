/**
 * @description Adding a new camera to the scene.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components } from '../dist/esm/trident-esm-bundle.js';

let farLimitReached = false;
SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();
    runtime.gizmosEnabled = true;

    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.z = 60;
    
    const cameraGameObject = new GameObject(scene);
    const cameraComponent = cameraGameObject.AddComponent(Components.Camera);
    cameraComponent.far = 10;

    scene.SetActiveCamera(camera);
    
    setInterval(() => {
        cameraComponent.transform.eulerAngles.x += 0.5;
    
        if (farLimitReached) cameraComponent.far -= 0.1;
        else cameraComponent.far += 0.1;
    }, 10);
    
    setInterval(() => {
        farLimitReached = !farLimitReached;
    }, 1000);
    
    runtime.Load();
    runtime.Play();
});