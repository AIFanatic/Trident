/**
 * @description Creating and rendering a custom mesh.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, Resources, THREE } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();
    SceneHelper.CreateCamera(scene);
    SceneHelper.CreateSunlight(scene);
    
    const shipGameobject = new GameObject(scene);
    shipGameobject.transform.position.z = -20;
    const meshRenderer = shipGameobject.AddComponent(Components.MeshRenderer)
    const meshFilter = shipGameobject.AddComponent(Components.MeshFilter);
    
    Resources.LoadAsync("./assets/spaceship.obj")
    .then(geometry => {
        if (geometry instanceof THREE.BufferGeometry) {
            meshFilter.mesh = geometry;
        }
    })
    
    
    runtime.Load();
    runtime.Play();
});