import { Input } from "./Input";
import { InstantiationPool } from "./InstantiationPool";
import { SceneManager } from "./SceneManager";
import { IConfiguration } from "./interfaces/IConfiguration";
import { Renderer } from "./Renderer";
import { Physics } from "./Physics";

export class Runtime {
    public OnLoaded: () => void = () => {};

    public static Renderer: Renderer;
    public static Physics: Physics;
    public static Config: IConfiguration;
    public static Input: Input;
    public static SceneManager: SceneManager;
    
    public isPlaying: boolean = false;
    public currentFrame: number = 0;
    public gizmosEnabled: boolean = false;
    
    /**
     * @param {Renderer} renderer - Initialized Renderer instance.
     * @param {Physics} physics - Initialized Physics instance.
     */
    constructor(config: IConfiguration) {
        Runtime.Config = config;
        Runtime.Input = new Input(this);
        Runtime.SceneManager = new SceneManager();

        Runtime.Renderer = new Renderer(Runtime.Config.renderer);
        Runtime.Renderer.OnLoaded = () => {
            Runtime.Physics = new Physics(Runtime.Config.physics)
            Runtime.Physics.OnLoaded = () => {
                this.OnLoaded();
                requestAnimationFrame((now) => { this.Run(); });
            }
        }
    }

    /**
     * Load the Runtime.
     * Instanciates all Components
     */
    public Load() {
        if (!Runtime.SceneManager.GetActiveScene()) {
            return console.warn("No active scene set, nothing to load.");
        }
        return InstantiationPool.Load();
    }

    /**
     * Called when the scene starts.
     */
    public Play(): void {
        if (!Runtime.SceneManager.GetActiveScene()) {
            return console.warn("No active scene set, nothing to Play.");
        }
        this.isPlaying = true;
    }

    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    public Stop(): void {
        this.isPlaying = false;
    }

    private Run() {
        const activeScene = Runtime.SceneManager.GetActiveScene();

        if (activeScene) {
            if (this.isPlaying) {
                activeScene.FixedUpdate();
                activeScene.UpdatePhysics();
                activeScene.Update();

                if (this.gizmosEnabled) {
                    activeScene.OnDrawGizmos();
                }
            }

            activeScene.Render();
            activeScene.LateUpdate();
        }

        Runtime.Input.Tick();

        this.currentFrame++;

        requestAnimationFrame(() => { this.Run(); });
    }
}