/**
 * @description Rigidbody custom mesh (trimesh).
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, PrimitiveType, Resources, THREE } from '../dist/esm/trident-esm-bundle.js';

class Spaceship extends Components.Component {
    Awake() {
        const meshFilter = this.gameObject.AddComponent(Components.MeshFilter);
        const meshRenderer = this.gameObject.AddComponent(Components.MeshRenderer)
        const collider = this.gameObject.AddComponent(Components.MeshCollider);
        const rigidBody = this.gameObject.AddComponent(Components.Rigidbody);
        
        return Resources.LoadAsync("./assets/Intergalactic_Spaceships_Version_2.obj")
        .then(geometry => {
            if (geometry instanceof THREE.BufferGeometry) {
                meshFilter.mesh = geometry;
            }
        })
    }
}

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene, 0, 0, 40);
    SceneHelper.CreateSunlight(scene);

    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;

    const meshGameObject = new GameObject(scene);
    const meshComponent = meshGameObject.AddComponent(Spaceship);

    scene.Load();
    scene.Play();
};