import { Transform } from "./Transform";

import { Scene } from "../Scene";
import { Component } from "./Component";
import { IComponent } from "../interfaces/IComponent";
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
export class GameObject implements IComponent {
    public uuid = UUID.v4();
    public classtype: ComponentsEnum = ComponentsEnum.GameObject;
    public name: string;

    public scene: Scene;
    public transform: Transform;
    public components: any[] = [];

    public layer: LayerMask = LayerMask.LAYER0;

    constructor(scene: Scene) {
        if (!scene) {
            console.error("Invalid scene provided");
            return;
        }

        this.scene = scene;

        this.transform = new Transform(this);
        
        this.scene.AddGameObject(this);
    }

    private IsValidComponent(object: any): boolean {
        const componentInterface = object as Component;

        if (componentInterface.classtype !== undefined) {
            if (componentInterface.classtype == "Component") {
                return true;
            }
        }

        return false;
    }

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
    public AddComponent(component: any): any {
        if (component == Object) {
            return null;
        }

        // try {
            let componentObject: any = new component(this, this.transform);

            if (!this.IsValidComponent(componentObject)) {
                console.error(`Invalid Component ${componentObject}`);
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
    }

    /**
    * Call a method on any attached component that implements it.
    * @param {string} methodName - The name of the method to be called.
    * @param {any} parameter - Parameters to be called with the method.
    */
    public BroadcastMessage(methodName: string, parameter:any) {
        for(let component of this.components) {
            if (component[methodName] !== undefined && typeof component[methodName] === "function") {
                component[methodName](parameter);
            }
        }
    }

    public OnEnable() {
        for(let component of this.components) {
            component.OnEnable();
        }
    }

    public OnDisable() {
    }

    /**
    * Removes a component from the GameObject.
    * @param {Component} component - The instance of the component to be removed.
    * @returns {boolean} - If successful returns true, false otherwise.
    */
    public RemoveComponent(component: Component): boolean {
        if (!this.IsValidComponent(component)) {
            console.error(`Invalid Component ${component}`);
            return false;
        }

        const componentIndex = this.components.indexOf(component);
        if (componentIndex == -1) {
            // TOOD: Circular loop with components, fix.
            // console.warn(`Tried to remove Component ${component} but it wasn't found in ${this}`)
            return false;
        }

        this.components.splice(componentIndex, 1);

        component.Destroy();
        return true;
    }
    
    /**
    * Get the instance of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component|null} - If the component is found returns it, null otherwise.
    */
    public GetComponent(type: any): any {
        for(let component of this.components) {
            // if (component.classname == type.name) {
            if (component instanceof type) {
                return component;
            }
        }
        return null;
    }

    /**
    * Get a list of instances of a component with the specified type.
    * @param {Component} type - The class of the component to search for.
    * @returns {Component[]} - A list of the matched components, empty list otherwise.
    */
    public GetComponents(type: any): any[] {
        let matches = [];
        for(let component of this.components) {
            if (component.classname == type.name) {
                matches.push(component);
            }
        }
        return matches;
    }

    public FixedUpdate(): void {
        this.transform.FixedUpdate();
        for(let component of this.components) {
            component.FixedUpdate();
        }
    }

    public Update(): void {
        this.transform.Update();

        if (this.scene.isPlaying) {
            for(let component of this.components) {
                if (!component.hasStarted) {
                    component.Start();
                    component.hasStarted = true;
                }
                component.Update();
            }
        }
    }

    public LateUpdate(): void {
        this.transform.LateUpdate();
        for(let component of this.components) {
            component.LateUpdate();
        }
    }

    public Start() {
        this.transform.Start();
        for(let component of this.components) {
            component.Start();
            component.hasStarted = true;
        }
    }

    public Stop() {
        this.transform.Stop();
        for(let component of this.components) {
            component.Stop();
        }
    }

    public OnGizmosEnabled() {
        for(let component of this.components) {
            component.OnGizmosEnabled();
        }
    }

    public OnGizmosDisabled() {
        for(let component of this.components) {
            component.OnGizmosDisabled();
        }
    }

    public OnDrawGizmos() {
        for(let component of this.components) {
            component.OnDrawGizmos();
        }
    }

    /**
    * Remove the GameObject from the scene and all of its components.
    */
    public Destroy() {
        this.transform.Destroy();
        
        const componentsCopy = this.components.slice();
        for(let component of componentsCopy) {
            component.Destroy();
        }

        this.scene.RemoveGameObject(this);
    }
}