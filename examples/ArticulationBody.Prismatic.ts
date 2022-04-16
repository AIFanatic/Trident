/**
 * @description Create and move a Prismatic joint.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, ArticulationJointType, ArticulationDofLock, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

class BlockerCube extends Components.Component {
    public Awake() {
        this.gameObject.CreatePrimitive(PrimitiveType.Cube);
        this.transform.localScale.set(0.5, 0.5, 0.5);
    }
}

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    const camera = SceneHelper.CreateCamera(scene);
    camera.transform.position.set(0, 0, 10);
    SceneHelper.CreateSunlight(scene);
    
    const blockerCubeGameobjectX = new GameObject(scene);
    blockerCubeGameobjectX.AddComponent(BlockerCube);
    blockerCubeGameobjectX.transform.position.set(3, -3, 0);

    const blockerCubeGameobjectZ = new GameObject(scene);
    blockerCubeGameobjectZ.AddComponent(BlockerCube);
    blockerCubeGameobjectZ.transform.position.set(0, -3, 3);

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

    rootArticulation.immovable = true;
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
    
    scene.Load();
    scene.Play();
};