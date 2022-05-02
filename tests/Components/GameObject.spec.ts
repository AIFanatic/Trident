import { Runtime, Scene, GameObject } from '../../src/';
import { CreateRuntime, CreateScene } from '../helper';

describe("GameObject", function() {
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

    it("GameObject should be added to the scene", function() {
        const gameObject = new GameObject(scene);
        
        expect(scene.gameObjects[0]).toBe(gameObject);
    });
});