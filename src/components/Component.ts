import { GameObject } from "./GameObject";
import { Transform } from "./Transform";

import { IComponent } from "../interfaces/IComponent";

import { UUID } from '../utils/UUID';

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
export class Component implements IComponent {
    /**
     * UUID of the component. Generated randomly.
     */
    public uuid = UUID.v4();

    /**
     * Used to detect valid components.
     */
    public readonly classtype: string = "Component";

    /**
     * Used to identify the class name of individual components.
     */
    public classname: string;
    
    /**
     * GameObject the this component is attached to.
     */
    public gameObject: GameObject;

    /**
     * Transform that this component is attached to.
     */
    public transform: Transform;

    /**
     * @todo Indicates that this component has started.
     */
    public hasStarted: boolean;

    constructor(gameObject: GameObject, transform: Transform) {
        this.gameObject = gameObject;
        this.transform = transform;

        // TODO: Probably doesn't work at runtime
        this.classname = this.constructor.name;
    }

    /**
     * Called once when the component is first added to a GameObject.
     */
    public OnEnable() {
    }

    public OnDisable() {
    }
    
    /**
     * Called once after the scene is started.
     */
    public Start() {
    }
    
    /**
     * Called once after the scene is stopped.
     */
    public Stop() {
    }

    /**
     * Called before every Physics update.
     */
    public FixedUpdate() {
    }
    
    /**
     * Called before every Renderer update.
     */
    public Update() {
    }

    /**
     * Called after every Renderer update.
     */
    public LateUpdate() {
    }
    
    /**
     * Called once when Gizmos are enabled.
     * If Gizmos are enabled before the component is created this method is called once after Start.
     */
    public OnGizmosEnabled() {
    }

    /**
     * Called once when Gizmos are disabled.
     */
    public OnGizmosDisabled() {
    }
    
    /**
     * Called after every Update if Gizmos are enabled.
     */
    public OnDrawGizmos() {
    }

    /**
     * Called when the component is destroyed.
     */
    public Destroy() {
        this.gameObject.RemoveComponent(this);
    }
}