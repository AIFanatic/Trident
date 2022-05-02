import { UUID } from '../utils/UUID';
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
export class Component {
    constructor(gameObject, transform) {
        /**
         * UUID of the component. Generated randomly.
         */
        this.uuid = UUID.v4();
        /**
         * Used to detect valid components.
         */
        this.classtype = "Component";
        /**
         * @todo Indicates that this component has started.
         */
        this.isStarted = false;
        this.isAwake = false;
        this.hideFlags = HideFlags.None;
        this.gameObject = gameObject;
        this.transform = transform;
        // TODO: Probably doesn't work at runtime
        this.classname = this.constructor.name;
    }
    /**
     * Called once when the component is first added to a GameObject.
     */
    Awake() { }
    ;
    OnDisable() {
    }
    async Start() { }
    /**
     * Called once after the scene is stopped.
     */
    Stop() {
    }
    /**
     * Called before every Physics update.
     */
    FixedUpdate() {
    }
    /**
     * Called before every Renderer update.
     */
    Update() {
    }
    /**
     * Called after every Renderer update.
     */
    LateUpdate() {
    }
    /**
     * Called once when Gizmos are enabled.
     * If Gizmos are enabled before the component is created this method is called once after Start.
     */
    OnGizmosEnabled() {
    }
    /**
     * Called once when Gizmos are disabled.
     */
    OnGizmosDisabled() {
    }
    /**
     * Called after every Update if Gizmos are enabled.
     */
    OnDrawGizmos() {
    }
    /**
     * Called when the component is destroyed.
     */
    Destroy() {
        this.gameObject.RemoveComponent(this);
    }
}
//# sourceMappingURL=Component.js.map