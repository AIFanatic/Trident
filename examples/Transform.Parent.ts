/**
 * @description Manipulate child Transform with parent.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, Components, GameObject, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();

    SceneHelper.CreateCamera(scene, 0, 0, 20);
    SceneHelper.CreateSunlight(scene);
    
    const cube = new GameObject(scene);
    cube.CreatePrimitive(PrimitiveType.Cube);
    cube.transform.position.y = 0;
    
    const cube1 = new GameObject(scene);
    cube1.CreatePrimitive(PrimitiveType.Cube);
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
    runtime.Load();
    runtime.Play();
});