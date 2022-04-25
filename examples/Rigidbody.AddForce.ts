/**
 * @description Rigidbody add force at a point in world space.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateScene({}, (scene: Scene) => {
    SceneHelper.CreateCamera(scene, 0, 0, 40);
    SceneHelper.CreateSunlight(scene);
    
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;
    
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.transform.position.y = -2;
    
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeRigidbody = cubeGameobject.AddComponent(Components.Rigidbody);
    
    setTimeout(() => {
        cubeRigidbody.AddForce(new THREE.Vector3(0, 1, 0).multiplyScalar(800));
    }, 1000);
    
    scene.Load();
    scene.Play();
});