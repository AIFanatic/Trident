import { GameObject } from "./components/GameObject";
import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
import { Renderer } from './Renderer';
import { Physics } from './Physics';
import { Input } from './Input';
import { Camera } from "./components/Camera";
/**
 * The scene that holds all GameObjects.
 */
export declare class Scene {
    private renderer;
    private physics;
    private input;
    private camera;
    isPlaying: boolean;
    currentFrame: number;
    gameObjects: GameObject[];
    OnLoaded: () => void;
    private physicsLoaded;
    private rendererLoaded;
    private gizmosEnabled;
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    constructor(rendererConfig: IRendererConfiguration, physicsConfig: IPhysicsConfiguration);
    private InitializeRenderer;
    private InitializePhysics;
    private CheckLoaded;
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
     * Enables Gizmos to be visible in the scene.
     * Gizmos are helpful to visualize and debug components (eg: Camera and Lights).
     */
    EnableGizmos(): void;
    /**
     * Disables Gizmos from being visible in the scene.
     */
    DisableGizmos(): void;
    /**
     * Check if Gizmos are enabled.
     * @returns {boolean} - If Gizmos are enabled.
     */
    HasGizmosEnabled(): boolean;
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
     * Called when the scene starts.
     * Calls Start on all attached components.
     */
    Start(): void;
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Stop(): void;
}
