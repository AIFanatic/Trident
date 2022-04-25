import { Transform } from "./Transform";

import { Scene } from "../Scene";
import { Component } from "./Component";
import { IComponent } from "../interfaces/IComponent";
import { ComponentsEnum } from "../enums/ComponentsEnum";

import { UUID } from '../utils/UUID';
import { LayerMask } from "../enums/LayerMask";

import { PrimitiveType } from "../enums/PrimitiveType";
import { Cube, Capsule, Plane, Sphere, Cylinder } from "../primitives";
import { InstantiationPool } from "../InstantiationPool";
import { HideFlags } from "..";

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
    public components: Component[] = [];

    public layer: LayerMask = LayerMask.LAYER0;

    public hideFlags: HideFlags = HideFlags.None;

    constructor(scene: Scene) {
        if (!scene) {
            console.error("Invalid scene provided");
            return;
        }

        this.scene = scene;

        this.transform = new Transform(this);

        this.name = "GameObject";
        
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
    * Attaches a primitive mesh renderer and appropriate collider to this GameObject.
    * 
    * @param {PrimitiveType} primitive - The type of primitive object to create.
    * @returns {GameObject} - Returns the GameObject.
    */
    public CreatePrimitive(primitive: PrimitiveType): GameObject {
        if (primitive == PrimitiveType.Cube) {
            Cube.Create(this);
        }
        else if (primitive == PrimitiveType.Capsule) {
            Capsule.Create(this);
        }
        else if (primitive == PrimitiveType.Plane) {
            Plane.Create(this);
        }
        else if (primitive == PrimitiveType.Sphere) {
            Sphere.Create(this);
        }
        else if (primitive == PrimitiveType.Cylinder) {
            Cylinder.Create(this);
        }
        return this;
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
    public AddComponent<T extends Component>(component: new(...args: any[]) => T): T {
        try {
            let componentObject = new component(this, this.transform);

            if (!this.IsValidComponent(componentObject)) {
                console.error(`Invalid Component ${componentObject}`);
                return null;
            }

            this.components.push(componentObject);

            InstantiationPool.add(componentObject);

            return componentObject;
            
        } catch (error) {
            console.error(error)
            console.error(`Invalid component ${component}`)
        }
        return null;
    }

    /**
    * Call a method on any attached component that implements it.
    * @param {string} methodName - The name of the method to be called.
    * @param {any} parameter - Parameters to be called with the method.
    */
    // TODO: Non Awake or non Start components should not receive messages
    public BroadcastMessage(methodName: string, parameter:any) {
        for(let component of this.components) {
            if (component[methodName] !== undefined && typeof component[methodName] === "function") {
                component[methodName](parameter);
            }
        }
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
    public GetComponent<T extends Component>(type: new(...args: any[]) => T): T {
        for(let component of this.components) {
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
    public GetComponents<T extends Component>(type: new(...args: any[]) => T): T[] {
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
                if (component.isAwake && component.isStarted) {
                    component.Update();
                }
            }
        }
    }

    public LateUpdate(): void {
        this.transform.LateUpdate();
        for(let component of this.components) {
            component.LateUpdate();
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

        for (let potentialChild of this.scene.gameObjects) {
            if (potentialChild.transform.parent === this.transform) {
                potentialChild.Destroy();
            }
        }

        this.scene.RemoveGameObject(this);
    }
}