import { Scene, GameObject } from '../../src/';
import { CreateScene } from '../helper';

describe("GameObject", function() {
    let scene: Scene;

    beforeEach(async () => {
        return await new Promise((resolve, reject) => {
            CreateScene({}, (_scene) => {
                scene = _scene;
                resolve(scene);
            })

        })
    });

    it("GameObject should be added to the scene", function() {
        const gameObject = new GameObject(scene);
        
        expect(scene.gameObjects[0]).toBe(gameObject);
    });
});