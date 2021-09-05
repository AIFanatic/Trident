/**
 * @description Create a chain of Spherical joints.
 */
import { Scene, GameObject, Components, ArticulationJointType, ArticulationDofLock } from '../dist/esm/trident-esm-bundle.js';
const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
};
const physicsConfig = {
    physxWasmURL: "../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
};
const scene = new Scene(rendererConfig, physicsConfig);
const camera = scene.GetActiveCamera();
camera.transform.position.set(0, 0, 30);
scene.OnLoaded = () => {

    const blockerCubeGameobjectX = new GameObject(scene);
    blockerCubeGameobjectX.AddComponent(Components.Cube);
    blockerCubeGameobjectX.transform.position.set(0, -5, 0);
    blockerCubeGameobjectX.transform.localScale.set(0.5, 0.5, 0.5);

    const rootArticulationGameobject = new GameObject(scene);
    rootArticulationGameobject.AddComponent(Components.Cube);
    const rootArticulation = rootArticulationGameobject.AddComponent(Components.ArticulationBody);
    rootArticulation.immovable = true;

    let parentGameobject = rootArticulation;
    for (let x = 2; x < 10; x+=2) {
        const articulationGameobject = new GameObject(scene);
        articulationGameobject.transform.position.set(x, 0, 0);
        articulationGameobject.transform.parent = parentGameobject.transform;
        articulationGameobject.AddComponent(Components.Cube);
        const articulation = articulationGameobject.AddComponent(Components.ArticulationBody);
        articulation.jointType = ArticulationJointType.SphericalJoint;
        articulation.mass = (1/x)*10
        articulation.xDrive.stiffness = 100;
        articulation.yDrive.stiffness = 100;
        articulation.zDrive.stiffness = 100;

        parentGameobject = articulationGameobject
    }

    scene.Start();
};