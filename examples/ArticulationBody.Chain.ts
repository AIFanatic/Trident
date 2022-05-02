/**
 * @description Create a chain of Spherical joints.
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
    camera.transform.position.set(0, 0, 30);
    SceneHelper.CreateSunlight(scene);
    
    const blockerCubeGameobjectX = new GameObject(scene);
    blockerCubeGameobjectX.CreatePrimitive(PrimitiveType.Cube);
    blockerCubeGameobjectX.transform.position.set(0, -5, 0);
    blockerCubeGameobjectX.transform.localScale.set(0.5, 0.5, 0.5);
    
    const rootArticulationGameobject = new GameObject(scene);
    rootArticulationGameobject.CreatePrimitive(PrimitiveType.Cube);
    const rootArticulation = rootArticulationGameobject.AddComponent(Components.ArticulationBody);
    rootArticulation.immovable = true;
    
    let parentGameobject = rootArticulationGameobject;
    for (let x = 2; x < 10; x+=2) {
        const articulationGameobject = new GameObject(scene);
        articulationGameobject.transform.position.set(x, 0, 0);
        articulationGameobject.transform.parent = parentGameobject.transform;
        articulationGameobject.CreatePrimitive(PrimitiveType.Cube);
        const articulation = articulationGameobject.AddComponent(Components.ArticulationBody);
        articulation.jointType = ArticulationJointType.SphericalJoint;
        articulation.mass = (1/x)*10
        articulation.xDrive.stiffness = 10;
        articulation.yDrive.stiffness = 10;
        articulation.zDrive.stiffness = 10;
        parentGameobject = articulationGameobject
    }
    
    runtime.Load();
    runtime.Play();
});