/**
 * @description Rigidbody change transform properties.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene, 0, 0, 40);
    SceneHelper.CreateSunlight(scene);

    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;
    
    {
        // Position
        const cubeGameobject = new GameObject(scene);
        cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
        cubeGameobject.AddComponent(Components.Rigidbody);
        
        setTimeout(() => {
            cubeGameobject.transform.position.y = 2;
        }, 500);
    }

    {
        // Rotation
        const cubeGameobject = new GameObject(scene);
        cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
        cubeGameobject.AddComponent(Components.Rigidbody);
        cubeGameobject.transform.position.x = -5;
        
        setTimeout(() => {
            cubeGameobject.transform.rotation.z = 2;
        }, 500);
    }

    {
        // Scale
        const cubeGameobject = new GameObject(scene);
        cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
        cubeGameobject.AddComponent(Components.Rigidbody);
        cubeGameobject.transform.position.x = 5;
        
        setTimeout(() => {
            cubeGameobject.transform.localScale.y = 2;
        }, 500);
    }
    
    scene.Load();
    scene.Play();
};