import { Transform } from "./Transform";
import { Scene } from "../Scene";
import { Component } from "./Component";
import { IComponent } from "../interfaces/IComponent";
import { ComponentsEnum } from "../enums/ComponentsEnum";
import { LayerMask } from "../enums/LayerMask";
/**
 * The main component of the entity component system.
 *
 * GameObjects can have any number of components added to them.
 *
 * @noInheritDoc
 */
export declare class GameObject implements IComponent {
    uuid: string;
    classtype: ComponentsEnum;
    name: string;
    scene: Scene;
    transform: Transform;
    components: any[];
    layer: LayerMask;
    constructor(scene: Scene);
    private IsValidComponent;
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
    AddComponent(component: any): any;
    /**
    * Call a method on any attached component that implements it.
    * @param {string} methodName - The name of the method to be called.
    * @param {any} parameter - Parameters to be called with the method.
    */
    BroadcastMessage(methodName: string, parameter: any): void;
    OnEnable(): void;
    OnDisable(): void;
    /**
    * Removes a component from the GameObject.
    * @param {Component} component - The instance of the component to be removed.
    * @returns {boolean} - If successful returns true, false otherwise.
    */
    RemoveComponent(component: Component): boolean;
    /**
    * Get the instance of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component|null} - If the component is found returns it, null otherwise.
    */
    GetComponent(type: any): any;
    /**
    * Get a list of instances of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component[]} - A list of the matched components, empty list otherwise.
    */
    GetComponents(type: any): any[];
    FixedUpdate(): void;
    Update(): void;
    LateUpdate(): void;
    Start(): void;
    Stop(): void;
    OnGizmosEnabled(): void;
    OnGizmosDisabled(): void;
    OnDrawGizmos(): void;
    /**
    * Remove the GameObject from the scene and all of its components.
    */
    Destroy(): void;
}