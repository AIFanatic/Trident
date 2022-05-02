import { Input } from "./Input";
import { InstantiationPool } from "./InstantiationPool";
import { SceneManager } from "./SceneManager";
import { Renderer } from "./Renderer";
import { Physics } from "./Physics";
export class Runtime {
    /**
     * @param {Renderer} renderer - Initialized Renderer instance.
     * @param {Physics} physics - Initialized Physics instance.
     */
    constructor(config) {
        this.OnLoaded = () => { };
        this.isPlaying = false;
        this.currentFrame = 0;
        this.gizmosEnabled = false;
        Runtime.Config = config;
        Runtime.Input = new Input(this);
        Runtime.SceneManager = new SceneManager();
        Runtime.Renderer = new Renderer(Runtime.Config.renderer);
        Runtime.Renderer.OnLoaded = () => {
            Runtime.Physics = new Physics(Runtime.Config.physics);
            Runtime.Physics.OnLoaded = () => {
                this.OnLoaded();
                requestAnimationFrame((now) => { this.Run(); });
            };
        };
    }
    /**
     * Load the Runtime.
     * Instanciates all Components
     */
    Load() {
        if (!Runtime.SceneManager.GetActiveScene()) {
            return console.warn("No active scene set, nothing to load.");
        }
        return InstantiationPool.Load();
    }
    /**
     * Called when the scene starts.
     */
    Play() {
        if (!Runtime.SceneManager.GetActiveScene()) {
            return console.warn("No active scene set, nothing to Play.");
        }
        this.isPlaying = true;
    }
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Stop() {
        this.isPlaying = false;
    }
    Run() {
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
//# sourceMappingURL=Runtime.js.map