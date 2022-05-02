import { Input } from "./Input";
import { SceneManager } from "./SceneManager";
import { IConfiguration } from "./interfaces/IConfiguration";
import { Renderer } from "./Renderer";
import { Physics } from "./Physics";
export declare class Runtime {
    OnLoaded: () => void;
    static Renderer: Renderer;
    static Physics: Physics;
    static Config: IConfiguration;
    static Input: Input;
    static SceneManager: SceneManager;
    isPlaying: boolean;
    currentFrame: number;
    gizmosEnabled: boolean;
    /**
     * @param {Renderer} renderer - Initialized Renderer instance.
     * @param {Physics} physics - Initialized Physics instance.
     */
    constructor(config: IConfiguration);
    /**
     * Load the Runtime.
     * Instanciates all Components
     */
    Load(): boolean | void;
    /**
     * Called when the scene starts.
     */
    Play(): void;
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Stop(): void;
    private Run;
}
