import { GameObject } from "./GameObject";
import { Transform } from "./Transform";
import { IComponent } from "../interfaces/IComponent";
import { HideFlags } from "../enums/HideFlags";
/**
 * Base class that all components inherit from.
 * Can be extended to create custom components.
 * @example
 * ```typescript
 *class CustomComponent extends Component {
 *   public Start() {
 *   }
 *}
 *const gameObject = new GameObject(scene);
 *const customComponent = gameObject.AddComponent(CustomComponent) as CustomComponent;
 * ```
 */
export declare class Component implements IComponent {
    /**
     * UUID of the component. Generated randomly.
     */
    uuid: string;
    /**
     * Used to detect valid components.
     */
    readonly classtype: string;
    /**
     * Used to identify the class name of individual components.
     */
    classname: string;
    /**
     * GameObject the this component is attached to.
     */
    gameObject: GameObject;
    /**
     * Transform that this component is attached to.
     */
    transform: Transform;
    /**
     * @todo Indicates that this component has started.
     */
    isStarted: boolean;
    isAwake: boolean;
    userData: any;
    hideFlags: HideFlags;
    constructor(gameObject: GameObject, transform: Transform);
    /**
     * Called once when the component is first added to a GameObject.
     */
    Awake(): void;
    OnDisable(): void;
    /**
     * Called once after the scene is started.
     */
    Start(): any;
    /**
     * Called once after the scene is stopped.
     */
    Stop(): void;
    /**
     * Called before every Physics update.
     */
    FixedUpdate(): void;
    /**
     * Called before every Renderer update.
     */
    Update(): void;
    /**
     * Called after every Renderer update.
     */
    LateUpdate(): void;
    /**
     * Called once when Gizmos are enabled.
     * If Gizmos are enabled before the component is created this method is called once after Start.
     */
    OnGizmosEnabled(): void;
    /**
     * Called once when Gizmos are disabled.
     */
    OnGizmosDisabled(): void;
    /**
     * Called after every Update if Gizmos are enabled.
     */
    OnDrawGizmos(): void;
    /**
     * Called when the component is destroyed.
     */
    Destroy(): void;
}
