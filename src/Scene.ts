import { GameObject } from "./components/GameObject";

import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';

import { Renderer } from './Renderer'
import { Physics } from './Physics'
import { Input } from './Input';
import { Camera } from "./components/Camera";
import { InstantiationPool } from "./InstantiationPool";
import { IConfiguration } from "./interfaces/IConfiguration";
import { ConfigurationDefaults } from "./defaults/ConfigurationDefaults";

/**
 * The scene that holds all GameObjects.
 */
export class Scene {
    private config: IConfiguration;
    private renderer: Renderer;
    private physics: Physics;
    private input: Input;
    private camera: Camera;

    public isPlaying: boolean = false;
    public currentFrame: number = 0;
    public gizmosEnabled: boolean = false;

    public gameObjects: GameObject[] = [];

    public OnInitialized: () => void;
    private physicsLoaded: boolean;
    private rendererLoaded: boolean; 
    
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    constructor(config: IConfiguration) {
        this.config = {
            renderer: Object.assign({}, ConfigurationDefaults.renderer, config.renderer),
            physics: Object.assign({}, ConfigurationDefaults.physics, config.physics),
            application: Object.assign({}, ConfigurationDefaults.application, config.application)
        };

        this.renderer = this.InitializeRenderer(this.config.renderer);
        this.physics = this.InitializePhysics(this.config.physics);
        this.input = new Input(this);

        requestAnimationFrame((now) => { this.Update(); });
    }

    private InitializeRenderer(rendererConfig: IRendererConfiguration): Renderer {
        return new Renderer(rendererConfig, () => {
            this.rendererLoaded = true;
            this.CheckInitialized();
        });
    }

    private InitializePhysics(physicsConfig: IPhysicsConfiguration): Physics {
        return new Physics(this, physicsConfig, () => {
            this.physicsLoaded = true;
            this.CheckInitialized();
        });
    }

    private CheckInitialized() {
        if (this.rendererLoaded && this.physicsLoaded) {
            if (this.OnInitialized) {
                this.OnInitialized();
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
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    public AddGameObject(gameObject: GameObject): boolean {
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
     * Load the Scene.
     * Instanciates all Components
     */
    public Load() {
        return InstantiationPool.Load();
    }

    /**
     * Called when the scene starts.
     */
    public Play(): void {
        this.isPlaying = true;
    }

    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    public Stop(): void {
        this.isPlaying = false;
    }
}