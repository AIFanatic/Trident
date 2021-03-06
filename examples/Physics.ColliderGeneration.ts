/**
 * @description Custom mesh with physics.
 */
 import { SceneHelper } from './assets/SceneHelper.js';
 import { Scene, GameObject, Components, PrimitiveType, Resources, THREE } from '../dist/esm/trident-esm-bundle.js';

class Spaceship extends Components.Component {
    Awake() {
        const meshFilter = this.gameObject.AddComponent(Components.MeshFilter);
        const meshRenderer = this.gameObject.AddComponent(Components.MeshRenderer)
        const collider = this.gameObject.AddComponent(Components.MeshCollider);
        
        return Resources.LoadAsync("./assets/spaceship.obj")
        .then(geometry => {
            if (geometry instanceof THREE.BufferGeometry) {

                const startTime = performance.now();
                meshFilter.mesh = geometry;
                const elapsedTime = Math.floor(performance.now() - startTime)
                setTimeout(() => {
                    alert("Collider generation took: " + elapsedTime + " ms");
                }, 100);
            }
        })
    }
}

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();
    SceneHelper.CreateCamera(scene, 0, 0, 40);
    SceneHelper.CreateSunlight(scene);
    
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;
    
    const meshGameObject = new GameObject(scene);
    const meshComponent = meshGameObject.AddComponent(Spaceship);
    
    runtime.Load();
    runtime.Play();
});