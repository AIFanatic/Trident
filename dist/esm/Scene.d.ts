import { GameObject } from "./components/GameObject";
import { Renderer } from './Renderer';
import { Physics } from './Physics';
import { Input } from './Input';
import { Camera } from "./components/Camera";
import { IConfiguration } from "./interfaces/IConfiguration";
/**
 * The scene that holds all GameObjects.
 */
export declare class Scene {
    private config;
    private renderer;
    private physics;
    private input;
    private camera;
    isPlaying: boolean;
    currentFrame: number;
    gizmosEnabled: boolean;
    gameObjects: GameObject[];
    OnInitialized: () => void;
    private physicsLoaded;
    private rendererLoaded;
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    constructor(config: IConfiguration);
    private InitializeRenderer;
    private InitializePhysics;
    private CheckInitialized;
    /**
     * Get the renderer for this scene.
     * @returns {Renderer} Renderer attached to this scene.
     */
    GetRenderer(): Renderer;
    /**
     * Get the physics for this scene.
     * @returns {Physics} - Physics attached to this scene.
     */
    GetPhysics(): Physics;
    /**
     * Get the input for this scene.
     * @returns {Input} - Input attached to this scene.
     */
    GetInput(): Input;
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    GetActiveCamera(): Camera;
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    SetActiveCamera(camera: Camera): void;
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    AddGameObject(gameObject: GameObject): boolean;
    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    RemoveGameObject(gameObject: GameObject): boolean;
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    FixedUpdate(): void;
    /**
     * Called before every Renderer update.
     * Calls Update on all attached components.
     */
    Update(): void;
    /**
     * Load the Scene.
     * Instanciates all Components
     */
    Load(): boolean;
    /**
     * Called when the scene starts.
     */
    Play(): void;
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Stop(): void;
}
