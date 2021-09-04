/**
 * @description Custom mesh with physics.
 */
import { Scene, GameObject, Components, THREE } from '../dist/esm/trident-esm-bundle.js';

// @ts-ignore
import { STLLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/STLLoader.js';

class Spaceship extends Components.Component {
    OnEnable() {
        const loader = new STLLoader();
        loader.load( "./assets/Intergalactic_Spaceships_Version_2.stl", (geometry) => {
            const physics = this.gameObject.scene.GetPhysics();
            const meshFilter = this.gameObject.AddComponent(Components.MeshFilter);
            meshFilter.mesh = geometry;

            const meshRenderer = this.gameObject.AddComponent(Components.MeshRenderer)
            
            const startTime = performance.now();
            const collider = this.gameObject.AddComponent(Components.MeshCollider);

            const elapsedTime = Math.floor(performance.now() - startTime)
            alert("Collider generation took: " + elapsedTime + " ms");
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
    const floor = floorGameObject.AddComponent(Components.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -10;

    const meshGameObject = new GameObject(scene);
    const meshComponent = meshGameObject.AddComponent(Spaceship) as Spaceship;

    scene.Start();
};