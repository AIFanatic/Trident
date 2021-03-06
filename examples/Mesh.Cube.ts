/**
 * @description Creating and rendering a cube.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();
    SceneHelper.CreateCamera(scene);
    SceneHelper.CreateSunlight(scene);
    
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    
    cubeGameobject.transform.position.set(0, -2, -10);
    
    runtime.Load();
    runtime.Play();
});