/**
 * @description Create and rotate a Revolute joint.
 */
    import { Scene, GameObject, Components, ArticulationJointType, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';
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
        const blockerCubeGameobject = new GameObject(scene);
        blockerCubeGameobject.CreatePrimitive(PrimitiveType.Cube);
        blockerCubeGameobject.transform.position.set(0.5, -3, 1.5);
        blockerCubeGameobject.transform.localScale.set(0.5, 0.5, 0.5);

        const rootArticulationGameobject = new GameObject(scene);
        rootArticulationGameobject.CreatePrimitive(PrimitiveType.Cube);
        const rootArticulation = rootArticulationGameobject.AddComponent(Components.ArticulationBody);
        rootArticulation.immovable = true;

        const articulationGameobject1 = new GameObject(scene);
        articulationGameobject1.transform.position.set(0, -3, 0);
        articulationGameobject1.transform.parent = rootArticulationGameobject.transform;
        articulationGameobject1.CreatePrimitive(PrimitiveType.Cube);
        articulationGameobject1.transform.localScale.set(3, 1, 1);
        const articulation1 = articulationGameobject1.AddComponent(Components.ArticulationBody) as Components.ArticulationBody;
        articulation1.jointType = ArticulationJointType.RevoluteJoint;
        articulation1.xDrive.stiffness = 100;
        articulation1.xDrive.target = 1;

        scene.Start();
    };