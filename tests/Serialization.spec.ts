import { Runtime, Scene, GameObject, PrimitiveType, SceneSerializer, SceneDeserializer, ArticulationJointType } from '../src/';
import { ArticulationBody } from '../src/components';
import { CreateRuntime, CreateScene } from './helper';

describe("Serialization", function() {
    let runtime: Runtime;
    let scene: Scene;

    beforeEach(async () => {
        return await new Promise<Scene>((resolve, reject) => {
            CreateRuntime({}).then(_runtime => {
                runtime = _runtime;
                scene = CreateScene();
                resolve(scene);
            })
        })
    });

    it("Serialized scene should match deserialized scene", async function() {
        const rootArticulationGameobject = new GameObject(scene);
        rootArticulationGameobject.CreatePrimitive(PrimitiveType.Cube);
        const rootArticulation = rootArticulationGameobject.AddComponent(ArticulationBody);
        rootArticulation.immovable = true;

        const articulationGameobject = new GameObject(scene);
        articulationGameobject.transform.position.set(2, 0, 0);
        articulationGameobject.transform.parent = rootArticulationGameobject.transform;
        articulationGameobject.CreatePrimitive(PrimitiveType.Cube);
        const articulation = articulationGameobject.AddComponent(ArticulationBody);
        articulation.jointType = ArticulationJointType.SphericalJoint;
        articulation.mass = (1 / 2) * 10;
        articulation.xDrive.stiffness = 10;
        articulation.yDrive.stiffness = 10;
        articulation.zDrive.stiffness = 10;

        const sceneSerialized = SceneSerializer.Serialize(scene);
        
        const scene2 = await SceneDeserializer.Deserialize(sceneSerialized);
        const scene2Serialized = SceneSerializer.Serialize(scene2);

        expect(JSON.stringify(sceneSerialized)).toBe(JSON.stringify(scene2Serialized));
    });
});