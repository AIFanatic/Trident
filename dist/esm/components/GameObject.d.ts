import { Transform } from "./Transform";
import { Scene } from "../Scene";
import { Component } from "./Component";
import { IComponent } from "../interfaces/IComponent";
import { ComponentsEnum } from "../enums/ComponentsEnum";
import { LayerMask } from "../enums/LayerMask";
import { PrimitiveType } from "../enums/PrimitiveType";
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
    components: Component[];
    layer: LayerMask;
    constructor(scene: Scene);
    private IsValidComponent;
    /**
    * Attaches a primitive mesh renderer and appropriate collider to this GameObject.
    *
    * @param {PrimitiveType} primitive - The type of primitive object to create.
    * @returns {GameObject} - Returns the GameObject.
    */
    CreatePrimitive(primitive: PrimitiveType): GameObject;
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
    AddComponent<T extends Component>(component: new (...args: any[]) => T): T;
    /**
    * Call a method on any attached component that implements it.
    * @param {string} methodName - The name of the method to be called.
    * @param {any} parameter - Parameters to be called with the method.
    */
    BroadcastMessage(methodName: string, parameter: any): void;
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
    GetComponent<T extends Component>(type: new (...args: any[]) => T): T;
    /**
    * Get a list of instances of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component[]} - A list of the matched components, empty list otherwise.
    */
    GetComponents<T extends Component>(type: new (...args: any[]) => T): T[];
    FixedUpdate(): void;
    Update(): void;
    LateUpdate(): void;
    OnDrawGizmos(): void;
    /**
    * Remove the GameObject from the scene and all of its components.
    */
    Destroy(): void;
}
