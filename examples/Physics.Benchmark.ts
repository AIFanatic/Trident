/**
 * @description Creating 3000 cubes with physics.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene, 0, 0, 100);
    SceneHelper.CreateSunlight(scene);

    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    const floorMeshRenderer = floorGameObject.GetComponent(Components.MeshRenderer);
    floorMeshRenderer.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;

    const min = -25;
    const max = 25;
    const num = 3000;
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let i = 0; i < num; i++) {
        const cube = new Components.GameObject(scene);
        cube.CreatePrimitive(PrimitiveType.Cube);
        const cubeRb = cube.AddComponent(Components.Rigidbody);
        const cubeMeshRenderer = cube.GetComponent(Components.MeshRenderer);
        cubeMeshRenderer.material = material;
        cube.transform.position.set(Math.random() * (max - min) + min, Math.random() * (max - 0) + 0, Math.random() * (max - min) + min);
    }
    scene.Load();
    scene.Play();
};