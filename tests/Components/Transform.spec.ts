import { Scene, GameObject, PrimitiveType } from '../../src/';
import { Transform } from '../../src/components';
import { CreateCamera, CreateScene, CreateSunlight, WaitForTick } from '../helper';

describe("Transform", function() {
    let scene: Scene;

    beforeEach(async () => {
        return await new Promise((resolve, reject) => {
            CreateScene({}, (_scene) => {
                scene = _scene;
                resolve(scene);
            })

        })
    });

    it("Transform should be created with GameObject", function() {
        const gameObject = new GameObject(scene);
        
        expect(gameObject.transform).toBeInstanceOf(Transform);
    });

    it("Changing parent position should change child localPosition", async function() {
        // TODO: Should not need to create a camera
        CreateCamera(scene, 0, 0, 10);
        const parent = new GameObject(scene);
        parent.transform.position.y = 0;
        const child = new GameObject(scene);
        child.transform.parent = parent.transform;
        child.transform.position.y = 2;

        await WaitForTick(scene, 2);
        parent.transform.position.x = 1;
        await WaitForTick(scene, 2);
        expect(child.transform.position.x).toBe(1);
    });

    it("Setting transform parent should change parents child", function() {
        const parent = new GameObject(scene);
        const child = new GameObject(scene);
        
        expect(parent.transform.childCount).toBe(0);
        child.transform.parent = parent.transform;
        expect(parent.transform.childCount).toBe(1);
        expect(parent.transform.GetChild(0)).toBe(child.transform);

        child.transform.parent = null;
        expect(parent.transform.childCount).toBe(0);
    });
});