import { GameObject } from "./components/GameObject";
import { Input } from './Input';
import { InstantiationPool } from "./InstantiationPool";
/**
 * The scene that holds all GameObjects.
 */
export class Scene {
    /**
     * @param {Renderer} renderer - Initialized Renderer instance.
     * @param {Physics} physics - Initialized Physics instance.
     */
    constructor(renderer, physics) {
        this.isPlaying = false;
        this.currentFrame = 0;
        this.gizmosEnabled = false;
        this.gameObjects = [];
        this.renderer = renderer;
        this.physics = physics;
        this.physics.FixedUpdate = () => { this.FixedUpdate(); };
        this.input = new Input(this);
        requestAnimationFrame((now) => { this.Update(); });
    }
    /**
     * Get the renderer for this scene.
     * @returns {Renderer} Renderer attached to this scene.
     */
    GetRenderer() {
        return this.renderer;
    }
    /**
     * Get the physics for this scene.
     * @returns {Physics} - Physics attached to this scene.
     */
    GetPhysics() {
        return this.physics;
    }
    /**
     * Get the input for this scene.
     * @returns {Input} - Input attached to this scene.
     */
    GetInput() {
        return this.input;
    }
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    GetActiveCamera() {
        return this.camera;
    }
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    SetActiveCamera(camera) {
        this.camera = camera;
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
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    FixedUpdate() {
        for (let gameObject of this.gameObjects) {
            gameObject.FixedUpdate();
        }
    }
    /**
     * Called before every Renderer update.
     * Calls Update on all attached components.
     */
    Update() {
        // this.physics.Update();
        if (this.isPlaying) {
            this.physics.Update();
            for (let gameObject of this.gameObjects) {
                gameObject.Update();
                if (this.gizmosEnabled) {
                    gameObject.OnDrawGizmos();
                }
            }
        }
        if (this.camera) {
            this.renderer.Tick(this.camera.GetCamera());
        }
        for (let gameObject of this.gameObjects) {
            gameObject.LateUpdate();
        }
        this.input.Tick();
        this.currentFrame++;
        requestAnimationFrame(() => { this.Update(); });
    }
    /**
     * Load the Scene.
     * Instanciates all Components
     */
    Load() {
        return InstantiationPool.Load();
    }
    /**
     * Called when the scene starts.
     */
    Play() {
        this.isPlaying = true;
    }
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Stop() {
        this.isPlaying = false;
    }
}
//# sourceMappingURL=Scene.js.map