/**
 * @description Creating and rendering a cube.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene);
    SceneHelper.CreateSunlight(scene);

    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);

    cubeGameobject.transform.position.set(0, -2, -10);

    scene.Load();
    scene.Play();
};