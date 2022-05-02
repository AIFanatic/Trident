import { GameObject } from "./components/GameObject";
import { Runtime } from "./Runtime";
import { AmbientLight } from 'three';
/**
 * The scene that holds all GameObjects.
 */
export class Scene {
    constructor(name) {
        this.gameObjects = [];
        this.name = name;
        this.rendererScene = Runtime.Renderer.CreateScene();
        this.physicsScene = Runtime.Physics.CreateScene();
        // TODO: Clean renderer rendering settings (skybox, fog, ambient, etc)
        const ambientLight = new AmbientLight(0xffffff, 0.3);
        this.rendererScene.add(ambientLight);
    }
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    AddGameObject(gameObject) {
        this.gameObjects.push(gameObject);
        return true;
    }
    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    RemoveGameObject(gameObject) {
        if (gameObject instanceof GameObject == false) {
            console.error(`Invalid GameObject ${gameObject}`);
            return false;
        }
        const gameObjectIndex = this.gameObjects.indexOf(gameObject);
        if (gameObjectIndex == -1) {
            console.warn(`Tried to remove GameObject ${gameObject} but it wasn't found in ${this}`);
            return false;
        }
        this.gameObjects.splice(gameObjectIndex, 1);
        return true;
    }
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    GetActiveCamera() {
        return this.activeCamera;
    }
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    SetActiveCamera(camera) {
        this.activeCamera = camera;
    }
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    FixedUpdate() {
        for (let gameObject of this.gameObjects) {
            gameObject.FixedUpdate();
        }
    }
    Update() {
        for (let gameObject of this.gameObjects) {
            gameObject.Update();
        }
    }
    LateUpdate() {
        for (let gameObject of this.gameObjects) {
            gameObject.LateUpdate();
        }
    }
    OnDrawGizmos() {
        for (let gameObject of this.gameObjects) {
            gameObject.OnDrawGizmos();
        }
    }
    UpdatePhysics() {
        Runtime.Physics.Update(this.physicsScene);
    }
    Render() {
        if (this.GetActiveCamera()) {
            Runtime.Renderer.Tick(this.rendererScene, this.GetActiveCamera().GetCamera());
        }
    }
}
//# sourceMappingURL=Scene.js.map