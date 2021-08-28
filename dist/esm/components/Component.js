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
var Component = /** @class */ (function () {
    function Component(gameObject, transform) {
        /**
         * UUID of the component. Generated randomly.
         */
        this.uuid = UUID.v4();
        /**
         * Used to detect valid components.
         */
        this.classtype = "Component";
        this.gameObject = gameObject;
        this.transform = transform;
        // TODO: Probably doesn't work at runtime
        this.classname = this.constructor.name;
    }
    /**
     * Called once when the component is first added to a GameObject.
     */
    Component.prototype.OnEnable = function () {
    };
    Component.prototype.OnDisable = function () {
    };
    /**
     * Called once after the scene is started.
     */
    Component.prototype.Start = function () {
    };
    /**
     * Called once after the scene is stopped.
     */
    Component.prototype.Stop = function () {
    };
    /**
     * Called before every Physics update.
     */
    Component.prototype.FixedUpdate = function () {
    };
    /**
     * Called before every Renderer update.
     */
    Component.prototype.Update = function () {
    };
    /**
     * Called after every Renderer update.
     */
    Component.prototype.LateUpdate = function () {
    };
    /**
     * Called once when Gizmos are enabled.
     * If Gizmos are enabled before the component is created this method is called once after Start.
     */
    Component.prototype.OnGizmosEnabled = function () {
    };
    /**
     * Called once when Gizmos are disabled.
     */
    Component.prototype.OnGizmosDisabled = function () {
    };
    /**
     * Called after every Update if Gizmos are enabled.
     */
    Component.prototype.OnDrawGizmos = function () {
    };
    /**
     * Called when the component is destroyed.
     */
    Component.prototype.Destroy = function () {
        this.gameObject.RemoveComponent(this);
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map