/**
 * @description Rigidbody change transform properties.
 */
import { Scene, GameObject, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

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
    
    scene.Start();
};