/**
 * @description Rigidbody custom mesh (trimesh).
 */
import { Scene, GameObject, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

// @ts-ignore
import { STLLoader } from 'https://cdn.skypack.dev/three@v0.136.0/examples/jsm/loaders/STLLoader.js';

class Spaceship extends Components.Component {
    OnEnable() {
        const loader = new STLLoader();
        loader.load( "./assets/Intergalactic_Spaceships_Version_2.stl", (geometry) => {
            const physics = this.gameObject.scene.GetPhysics();
            const meshFilter = this.gameObject.AddComponent(Components.MeshFilter);
            meshFilter.mesh = geometry;

            const meshRenderer = this.gameObject.AddComponent(Components.MeshRenderer)
            const collider = this.gameObject.AddComponent(Components.MeshCollider);
            const rigidBody = this.gameObject.AddComponent(Components.Rigidbody);
        });
    }
}

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
};
const physicsConfig = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
};
const scene = new Scene(rendererConfig, physicsConfig);
const cameraComponent = scene.GetActiveCamera();
cameraComponent.transform.position.z = 40;

scene.OnLoaded = () => {
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;

    const meshGameObject = new GameObject(scene);
    const meshComponent = meshGameObject.AddComponent(Spaceship) as Spaceship;

    scene.Start();
};