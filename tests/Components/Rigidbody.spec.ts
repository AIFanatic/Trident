import { Runtime, Scene, GameObject } from '../../src/';
import { CreateRuntime, CreateScene } from '../helper';

import { BoxCollider, Rigidbody } from '../../src/components';

describe("Rigidbody", function() {
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

    it("Rigidbody should be added with BoxCollider", function() {
        const gameObject = new GameObject(scene);
        const boxCollider = gameObject.AddComponent(BoxCollider);
        const rigidbody = gameObject.AddComponent(Rigidbody);
        
        expect(gameObject.components[0]).toBe(boxCollider);
        expect(gameObject.components[1]).toBe(rigidbody);
    });

    it("Rigidbody should be destroyed", function() {
        const gameObject = new GameObject(scene);
        const boxCollider = gameObject.AddComponent(BoxCollider);
        const rigidbody = gameObject.AddComponent(Rigidbody);

        rigidbody.Destroy();
        
        expect(gameObject.components.length).toBe(1);
    });

    it("Rigidbody and BoxCollider should be destroyed when scene GameObjects are cleared", function() {
        const gameObject = new GameObject(scene);
        const boxCollider = gameObject.AddComponent(BoxCollider);
        const rigidbody = gameObject.AddComponent(Rigidbody);

        for (let i = scene.gameObjects.length - 1; i >= 0; i--) {
            const gameObject = scene.gameObjects[i];
            gameObject.Destroy();
        }
        
        expect(scene.gameObjects.length).toBe(0);
    });

    it("BoxCollider and Rigidbody should be destroyed when scene GameObjects are cleared", function() {
        const gameObject = new GameObject(scene);
        const rigidbody = gameObject.AddComponent(Rigidbody);
        const boxCollider = gameObject.AddComponent(BoxCollider);

        for (let i = scene.gameObjects.length - 1; i >= 0; i--) {
            const gameObject = scene.gameObjects[i];
            gameObject.Destroy();
        }
        
        expect(scene.gameObjects.length).toBe(0);
    });
});