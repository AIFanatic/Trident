/**
 * @description Manipulate child Transform with parent.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene({}, (scene: Scene) => {

    SceneHelper.CreateCamera(scene, 0, 0, 20);
    SceneHelper.CreateSunlight(scene);
    
    const cube = new Components.GameObject(scene);
    cube.CreatePrimitive(PrimitiveType.Cube);
    cube.transform.position.y = 0;
    
    const cube1 = new Components.GameObject(scene);
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
    scene.Load();
    scene.Play();
});