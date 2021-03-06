/**
 * @description Create and rotate a Spherical joint.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, ArticulationJointType, ArticulationMotion, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

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
    
    const blockerCubeGameobjectX = new GameObject(scene);
    blockerCubeGameobjectX.AddComponent(BlockerCube);
    blockerCubeGameobjectX.transform.position.set(0.5, -4, 0);
    
    const blockerCubeGameobjectZ = new GameObject(scene);
    blockerCubeGameobjectZ.AddComponent(BlockerCube);
    blockerCubeGameobjectZ.transform.position.set(-0.5, -3, 1.5);
    
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
    articulation1.jointType = ArticulationJointType.SphericalJoint;
    articulation1.xDrive.stiffness = 100;
    articulation1.yDrive.stiffness = 100;
    articulation1.zDrive.stiffness = 100;
    articulation1.xDrive.target = 1;
    
    setTimeout(() => {
        articulation1.twistLock = ArticulationMotion.LockedMotion;
        articulation1.yDrive.target = 1;
    
        setTimeout(() => {
            articulation1.swingYLock = ArticulationMotion.LockedMotion;
            articulation1.zDrive.target = -1;
        }, 3000);
    }, 3000);
    
    runtime.Load();
    runtime.Play();
});