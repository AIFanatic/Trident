/**
 * @description Create and rotate a Revolute joint.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, ArticulationJointType, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

class BlockerCube extends Components.Component {
    public Awake() {
        this.gameObject.CreatePrimitive(PrimitiveType.Cube);
        this.transform.localScale.set(0.5, 0.5, 0.5);
    }
}

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();

    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.set(0, 0, 10);
    SceneHelper.CreateSunlight(scene);
    
    const blockerCubeGameobject = new GameObject(scene);
    blockerCubeGameobject.AddComponent(BlockerCube);
    blockerCubeGameobject.transform.position.set(0.5, -3, 1.5);
    
    const rootArticulationGameobject = new GameObject(scene);
    rootArticulationGameobject.CreatePrimitive(PrimitiveType.Cube);
    const rootArticulation = rootArticulationGameobject.AddComponent(Components.ArticulationBody);
    rootArticulation.immovable = true;
    
    const articulationGameobject1 = new GameObject(scene);
    articulationGameobject1.transform.position.set(0, -3, 0);
    articulationGameobject1.transform.parent = rootArticulationGameobject.transform;
    articulationGameobject1.CreatePrimitive(PrimitiveType.Cube);
    articulationGameobject1.transform.localScale.set(3, 1, 1);
    const articulation1 = articulationGameobject1.AddComponent(Components.ArticulationBody);
    articulation1.jointType = ArticulationJointType.RevoluteJoint;
    articulation1.xDrive.stiffness = 100;
    articulation1.xDrive.target = 1;
    
    runtime.Load();
    runtime.Play();
});