import { GameObject } from "./components/GameObject";

import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';

import { Renderer } from './Renderer'
import { Physics } from './Physics'
import { Input } from './Input';
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components";
import { AmbientLight, Color } from "three";

/**
 * The scene that holds all GameObjects.
 */
export class Scene {
    private renderer: Renderer;
    private physics: Physics;
    private input: Input;
    private camera: Camera;

    public isPlaying: boolean;
    public currentFrame: number = 0;

    public gameObjects: GameObject[] = [];

    public OnLoaded: () => void = () => {};
    private physicsLoaded: boolean;
    private rendererLoaded: boolean; 

    private gizmosEnabled: boolean;
    
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    constructor(rendererConfig: IRendererConfiguration, physicsConfig: IPhysicsConfiguration) {
        this.renderer = this.InitializeRenderer(rendererConfig);
        this.physics = this.InitializePhysics(physicsConfig);
        this.input = new Input(this);

        // When a scene is created a camera is created too
        const cameraGameObject = new GameObject(this);
        cameraGameObject.name = "SceneCamera";
        this.camera = cameraGameObject.AddComponent(Camera);
        this.renderer.renderer.shadowMap.enabled = true;
        
        // When a scene is created a light is created too
        const directionalLightGameObject = new GameObject(this);
        directionalLightGameObject.name = "DirectionalLight";
        directionalLightGameObject.transform.position.set(0, 3, 0);
        directionalLightGameObject.transform.eulerAngles.set(50, 30, 0);
        const directionalLight = directionalLightGameObject.AddComponent(DirectionalLight) as DirectionalLight;
        directionalLight.intensity = 0.5;
        directionalLight.shadows = true;

        // TODO: Temporary
        const ambientLight = new AmbientLight(0xffffff, 0.3);
        this.renderer.scene.add(ambientLight);

        requestAnimationFrame((now) => { this.Update(); });
    }

    private InitializeRenderer(rendererConfig: IRendererConfiguration): Renderer {
        return new Renderer(rendererConfig, () => {
            this.rendererLoaded = true;
            this.CheckLoaded();
        });
    }

    private InitializePhysics(physicsConfig: IPhysicsConfiguration): Physics {
        return new Physics(this, physicsConfig, () => {
            this.physicsLoaded = true;
            this.CheckLoaded();
        });
    }

    private CheckLoaded() {
        if (this.rendererLoaded && this.physicsLoaded) {
            if (typeof this.OnLoaded == "function") {
                this.OnLoaded();
            }
        }
    }
    
    /**
     * Get the renderer for this scene.
     * @returns {Renderer} Renderer attached to this scene.
     */
    public GetRenderer(): Renderer {
        return this.renderer;
    }
    
    /**
     * Get the physics for this scene.
     * @returns {Physics} - Physics attached to this scene.
     */
    public GetPhysics(): Physics {
        return this.physics;
    }

    /**
     * Get the input for this scene.
     * @returns {Input} - Input attached to this scene.
     */
    public GetInput(): Input {
        return this.input;
    }
    
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    public GetActiveCamera(): Camera {
        return this.camera;
    }
    
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    public SetActiveCamera(camera: Camera) {
        this.camera = camera;
    }
    
    /**
     * Enables Gizmos to be visible in the scene.
     * Gizmos are helpful to visualize and debug components (eg: Camera and Lights).
     */
    public EnableGizmos() {
        if (!this.gizmosEnabled) {
            for(let gameObject of this.gameObjects) {
                gameObject.OnGizmosEnabled();
            }
            this.gizmosEnabled = true;
        }
    }
    
    /**
     * Disables Gizmos from being visible in the scene.
     */
    public DisableGizmos() {
        if (this.gizmosEnabled) {
            for(let gameObject of this.gameObjects) {
                gameObject.OnGizmosDisabled();
            }
            this.gizmosEnabled = false;
        }
    }
    
    /**
     * Check if Gizmos are enabled.
     * @returns {boolean} - If Gizmos are enabled.
     */
    public HasGizmosEnabled(): boolean {
        return this.gizmosEnabled;
    }

    // TODO: Figure another way of checking type due to runtime compilation stripping types
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    public AddGameObject(gameObject: GameObject): boolean {
        // if (gameObject instanceof GameObject == false) {
        //     console.error(`Invalid GameObject ${gameObject}`);
        //     return false;
        // }

        this.gameObjects.push(gameObject);
        return true;
    }

    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    public RemoveGameObject(gameObject: GameObject): boolean {
        if (gameObject instanceof GameObject == false) {
            console.error(`Invalid GameObject ${gameObject}`);
            return false;
        }

        const gameObjectIndex = this.gameObjects.indexOf(gameObject);
        if (gameObjectIndex == -1) {
            console.warn(`Tried to remove GameObject ${gameObject} but it wasn't found in ${this}`)
            return false;
        }

        this.gameObjects.splice(gameObjectIndex, 1);
        return true;
    }
    
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    public FixedUpdate(): void {
        for(let gameObject of this.gameObjects) {
            gameObject.FixedUpdate();
        }
    }

    /**
     * Called before every Renderer update.
     * Calls Update on all attached components.
     */
    public Update(): void {
        // this.physics.Update();
        if (this.isPlaying) {
            this.physics.Update();
            
            for(let gameObject of this.gameObjects) {
                gameObject.Update();

                if (this.gizmosEnabled) {
                    gameObject.OnDrawGizmos();
                }
            }
        }

        if (this.camera) {
            this.renderer.Tick(this.camera.GetCamera());
        }

        for(let gameObject of this.gameObjects) {
            gameObject.LateUpdate();
        }
        
        this.input.Tick();

        this.currentFrame++;

        requestAnimationFrame(() => { this.Update(); });
    }
    
    /**
     * Called when the scene starts.
     * Calls Start on all attached components.
     */
    public Start(): void {
        this.isPlaying = true;

        for(let gameObject of this.gameObjects) {
            gameObject.Start();
        }
    }

    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    public Stop(): void {
        this.isPlaying = false;

        for(let gameObject of this.gameObjects) {
            gameObject.Stop();
        }
    }
}