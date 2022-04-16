/**
 * @description Creating and rendering a custom mesh.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, Resources, THREE } from '../dist/esm/trident-esm-bundle.js';

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene);
    SceneHelper.CreateSunlight(scene);

    const shipGameobject = new GameObject(scene);
    shipGameobject.transform.position.z = -20;
    const meshRenderer = shipGameobject.AddComponent(Components.MeshRenderer)
    const meshFilter = shipGameobject.AddComponent(Components.MeshFilter);

    Resources.LoadAsync("./assets/Intergalactic_Spaceships_Version_2.obj")
    .then(geometry => {
        if (geometry instanceof THREE.BufferGeometry) {
            meshFilter.mesh = geometry;
        }
    })


    scene.Load();
    scene.Play();
};