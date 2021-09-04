/**
 * @description Create and rotate a Revolute joint.
 */
import { Scene, GameObject, Components, ArticulationJointType } from '../dist/esm/trident-esm-bundle.js';

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
};
const physicsConfig = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
};
const scene = new Scene(rendererConfig, physicsConfig);
const camera = scene.GetActiveCamera();
camera.transform.position.set(0,0,10);

scene.OnLoaded = () => {
    const articulationGameobject1 = new GameObject(scene);
    articulationGameobject1.transform.position.set(0, -1, -10);
    articulationGameobject1.AddComponent(Components.Cube);
    const rootArticulation = articulationGameobject1.AddComponent(Components.ArticulationBody);
    rootArticulation.immovable = true;

    const articulationGameobject2 = new GameObject(scene);
    articulationGameobject2.transform.position.set(0, -4, -10);
    articulationGameobject2.transform.parent = articulationGameobject1.transform;
    articulationGameobject2.AddComponent(Components.Cube);
    articulationGameobject2.transform.localScale.set(3, 1, 1);
    const articulation2 = articulationGameobject2.AddComponent(Components.ArticulationBody);
    articulation2.articulationJointType = ArticulationJointType.REVOLUTE;
    articulation2.jointType.xDrive.stiffness = 100;

    const blockerCubeGameobject = new GameObject(scene);
    blockerCubeGameobject.transform.position.set(0, -4.5, 0);
    blockerCubeGameobject.AddComponent(Components.Cube);
    blockerCubeGameobject.transform.localScale.set(0.5, 0.5, 0.5);

    setInterval(() => {
        articulation2.jointType.xDrive.target += 0.02;
    }, 100);

    scene.Start();
};