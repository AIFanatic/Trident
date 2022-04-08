import { Transform } from "./Transform";
import { ComponentsEnum } from "../enums/ComponentsEnum";
import { UUID } from '../utils/UUID';
import { LayerMask } from "../enums/LayerMask";
/**
 * The main component of the entity component system.
 *
 * GameObjects can have any number of components added to them.
 *
 * @noInheritDoc
 */
var GameObject = /** @class */ (function () {
    function GameObject(scene) {
        this.uuid = UUID.v4();
        this.classtype = ComponentsEnum.GameObject;
        this.components = [];
        this.layer = LayerMask.LAYER0;
        if (!scene) {
            console.error("Invalid scene provided");
            return;
        }
        this.scene = scene;
        this.transform = new Transform(this);
        this.name = "GameObject";
        this.scene.AddGameObject(this);
    }
    GameObject.prototype.IsValidComponent = function (object) {
        var componentInterface = object;
        if (componentInterface.classtype !== undefined) {
            if (componentInterface.classtype == "Component") {
                return true;
            }
        }
        return false;
    };
    /**
    * Attaches a primitive mesh renderer and appropriate collider to this GameObject.
    *
    * @param {PrimitiveType} primitive - The type of primitive object to create.
    * @returns {GameObject} - Returns the GameObject.
    */
    GameObject.prototype.CreatePrimitive = function (primitive) {
        primitive(this);
        return this;
    };
    /**
    * Add a new component to this GameObject.
    *
    * The added component must extend the class Component.
    * @example
    * ```typescript
    *class CustomComponent extends Component {
    *   public Start() {
    *   }
    *}
    *const gameObject = new GameObject(scene);
    *const customComponent = gameObject.AddComponent(CustomComponent) as CustomComponent;
    * ```
    * @param {Component<T>} component - The component class to be attached to this GameObject.
    * @returns {Component} - If successful it returns an instance of the passed component, null otherwise.
    */
    GameObject.prototype.AddComponent = function (component) {
        if (component == Object) {
            return null;
        }
        // try {
        var componentObject = new component(this, this.transform);
        if (!this.IsValidComponent(componentObject)) {
            console.error("Invalid Component " + componentObject);
            return null;
        }
        this.components.push(componentObject);
        componentObject.OnEnable();
        if (this.scene.HasGizmosEnabled()) {
            componentObject.OnGizmosEnabled();
        }
        return componentObject;
        // } catch (error) {
        //     console.error(error)
        //     console.error(`Invalid component ${component}`)
        // }
        return null;
    };
    /**
    * Call a method on any attached component that implements it.
    * @param {string} methodName - The name of the method to be called.
    * @param {any} parameter - Parameters to be called with the method.
    */
    GameObject.prototype.BroadcastMessage = function (methodName, parameter) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component[methodName] !== undefined && typeof component[methodName] === "function") {
                component[methodName](parameter);
            }
        }
    };
    GameObject.prototype.OnEnable = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.OnEnable();
        }
    };
    GameObject.prototype.OnDisable = function () {
    };
    /**
    * Removes a component from the GameObject.
    * @param {Component} component - The instance of the component to be removed.
    * @returns {boolean} - If successful returns true, false otherwise.
    */
    GameObject.prototype.RemoveComponent = function (component) {
        if (!this.IsValidComponent(component)) {
            console.error("Invalid Component " + component);
            return false;
        }
        var componentIndex = this.components.indexOf(component);
        if (componentIndex == -1) {
            // TOOD: Circular loop with components, fix.
            // console.warn(`Tried to remove Component ${component} but it wasn't found in ${this}`)
            return false;
        }
        this.components.splice(componentIndex, 1);
        component.Destroy();
        return true;
    };
    /**
    * Get the instance of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component|null} - If the component is found returns it, null otherwise.
    */
    GameObject.prototype.GetComponent = function (type) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            // if (component.classname == type.name) {
            if (component instanceof type) {
                return component;
            }
        }
        return null;
    };
    /**
    * Get a list of instances of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component[]} - A list of the matched components, empty list otherwise.
    */
    GameObject.prototype.GetComponents = function (type) {
        var matches = [];
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.classname == type.name) {
                matches.push(component);
            }
        }
        return matches;
    };
    GameObject.prototype.FixedUpdate = function () {
        this.transform.FixedUpdate();
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.FixedUpdate();
        }
    };
    GameObject.prototype.Update = function () {
        this.transform.Update();
        if (this.scene.isPlaying) {
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (!component.hasStarted) {
                    component.Start();
                    component.hasStarted = true;
                }
                component.Update();
            }
        }
    };
    GameObject.prototype.LateUpdate = function () {
        this.transform.LateUpdate();
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.LateUpdate();
        }
    };
    GameObject.prototype.Start = function () {
        this.transform.Start();
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.Start();
            component.hasStarted = true;
        }
    };
    GameObject.prototype.Stop = function () {
        this.transform.Stop();
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.Stop();
        }
    };
    GameObject.prototype.OnGizmosEnabled = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.OnGizmosEnabled();
        }
    };
    GameObject.prototype.OnGizmosDisabled = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.OnGizmosDisabled();
        }
    };
    GameObject.prototype.OnDrawGizmos = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.OnDrawGizmos();
        }
    };
    /**
    * Remove the GameObject from the scene and all of its components.
    */
    GameObject.prototype.Destroy = function () {
        this.transform.Destroy();
        var componentsCopy = this.components.slice();
        for (var _i = 0, componentsCopy_1 = componentsCopy; _i < componentsCopy_1.length; _i++) {
            var component = componentsCopy_1[_i];
            component.Destroy();
        }
        for (var _a = 0, _b = this.scene.gameObjects; _a < _b.length; _a++) {
            var potentialChild = _b[_a];
            if (potentialChild.transform.parent === this.transform) {
                potentialChild.Destroy();
            }
        }
        this.scene.RemoveGameObject(this);
    };
    return GameObject;
}());
export { GameObject };
//# sourceMappingURL=GameObject.js.map