/**
 * @description Create and move a Prismatic joint.
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
camera.transform.position.set(0, 0, 10);

scene.OnLoaded = () => {
    const blockerCubeGameobjectX = new GameObject(scene);
    blockerCubeGameobjectX.AddComponent(Components.Cube);
    blockerCubeGameobjectX.transform.position.set(3, -3, 0);
    blockerCubeGameobjectX.transform.localScale.set(0.5, 0.5, 0.5);

    const blockerCubeGameobjectZ = new GameObject(scene);
    blockerCubeGameobjectZ.AddComponent(Components.Cube);
    blockerCubeGameobjectZ.transform.position.set(0, -3, 3);
    blockerCubeGameobjectZ.transform.localScale.set(0.5, 0.5, 0.5);

    const rootArticulationGameobject = new GameObject(scene);
    rootArticulationGameobject.AddComponent(Components.Cube);
    const rootArticulation = rootArticulationGameobject.AddComponent(Components.ArticulationBody);
    rootArticulation.immovable = true;

    const articulationGameobject1 = new GameObject(scene);
    articulationGameobject1.transform.position.set(0, -3, 0);
    articulationGameobject1.transform.parent = rootArticulationGameobject.transform;
    articulationGameobject1.AddComponent(Components.Cube);
    articulationGameobject1.transform.localScale.set(3, 1, 1);
    const articulation1 = articulationGameobject1.AddComponent(Components.ArticulationBody) as Components.ArticulationBody;
    articulation1.jointType = ArticulationJointType.PrismaticJoint;
    articulation1.xDrive.stiffness = 100;
    articulation1.xDrive.target = 1;

    setTimeout(() => {
        articulation1.linearLockY = ArticulationDofLock.FreeMotion;
        articulation1.yDrive.stiffness = 100;
        articulation1.yDrive.target = 2;
        setTimeout(() => {
            articulation1.linearLockZ = ArticulationDofLock.FreeMotion;
            ;
            articulation1.zDrive.stiffness = 100;
            articulation1.zDrive.target = 2;
        }, 3000);
    }, 3000);
    scene.Start();
};