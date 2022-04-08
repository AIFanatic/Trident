/**
 * @description Creating and rendering a custom mesh.
 */
import { Scene, GameObject, Components } from '../dist/esm/trident-esm-bundle.js';
import { IPhysicsConfiguration } from '../dist/esm/interfaces/IPhysicsConfiguration.js';

// @ts-ignore
import { STLLoader } from 'https://cdn.skypack.dev/three@v0.136.0/examples/jsm/loaders/STLLoader.js';

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
}

const physicsConfig: IPhysicsConfiguration = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
}

const scene = new Scene(rendererConfig, physicsConfig);
scene.OnLoaded = () => {

    const loader = new STLLoader();
    loader.load( "./assets/Intergalactic_Spaceships_Version_2.stl", (geometry) => {
        const shipGameobject = new GameObject(scene);
        shipGameobject.transform.position.z = -20;
        const meshFilter = shipGameobject.AddComponent(Components.MeshFilter);
        meshFilter.mesh = geometry;

        const meshRenderer = shipGameobject.AddComponent(Components.MeshRenderer)
    });

    scene.Start()
};