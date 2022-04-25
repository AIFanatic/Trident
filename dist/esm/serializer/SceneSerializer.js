import { SerializableTypesInstance } from '../utils/SerializeField';
import { Material, Color, Vector3, Vector2, BufferGeometry, Geometry } from "three";
import { PropertyTypes } from "./PropertyTypes";
import { HideFlags } from "..";
export class SceneSerializer {
    static getInstanceParentInstance(instance) {
        const prototype = Object.getPrototypeOf(instance);
        const prototypeParent = Object.getPrototypeOf(prototype);
        if (prototypeParent.constructor.name == "Object" || prototypeParent.constructor.name == "EventDispatcher") {
            return prototype.constructor;
        }
        return SceneSerializer.getInstanceParentInstance(prototype);
    }
    static SerializeComponentProperty(component, property, checkCustomTypeOnly = false) {
        const classname = component.constructor.name;
        const type = typeof component[property];
        // console.log(classname, type, component, property, component[property] instanceof Geometry)
        if (type == "function")
            return null;
        const customType = SerializableTypesInstance.get(classname, property);
        if (customType) {
            if (typeof customType == "function") {
                return {
                    name: property,
                    value: SceneSerializer.SerializeComponent(component[property]),
                    type: PropertyTypes.CUSTOM_FUNCTION
                };
            }
            else if (typeof customType == "object") {
                return {
                    name: property,
                    value: component[property],
                    type: PropertyTypes.CUSTOM_OBJECT
                };
            }
        }
        if (checkCustomTypeOnly)
            return;
        if (component[property] instanceof Vector3) {
            const value = { x: component[property].x, y: component[property].y, z: component[property].z };
            return { name: property, value: value, type: PropertyTypes.VECTOR3 };
        }
        else if (component[property] instanceof Color) {
            const value = component[property].getHex();
            return { name: property, value: value, type: PropertyTypes.COLOR };
        }
        else if (component[property] instanceof Vector2) {
            const value = { x: component[property].x, y: component[property].y };
            return { name: property, value: value, type: PropertyTypes.VECTOR2 };
        }
        else if (component[property] instanceof Material) {
            return {
                name: property,
                value: "Material",
                type: PropertyTypes.MATERIAL,
                file: component[property].userData ? component[property].userData : null
            };
        }
        else if (component[property] instanceof BufferGeometry || component[property] instanceof Geometry) {
            console.log("BUFFER");
            return {
                name: property,
                value: "BufferGeometry",
                type: PropertyTypes.MESH,
                file: component[property].userData ? component[property].userData : null
            };
        }
        else if (type == "number") {
            return { name: property, value: component[property], type: PropertyTypes.NUMBER };
        }
        else if (type == "boolean") {
            return { name: property, value: component[property], type: PropertyTypes.BOOLEAN };
        }
        else if (type == "object") {
            const parent = SceneSerializer.getInstanceParentInstance(component[property]);
            return { name: property, value: component[property].constructor.name, type: PropertyTypes.OBJECT };
        }
    }
    static SerializeComponent(component) {
        const componentCast = component;
        let componentSerialized = {
            uuid: component.uuid,
            component: component.constructor.name,
            properties: [],
            file: component.userData ? component.userData : null
        };
        // Parse component properties
        for (let property in Object.getPrototypeOf(component)) {
            try {
                const componentPropertyElement = SceneSerializer.SerializeComponentProperty(componentCast, property);
                if (componentPropertyElement) {
                    componentSerialized.properties.push(componentPropertyElement);
                }
            }
            catch (error) {
                // console.warn(error);
            }
        }
        // Parses component class instances properties
        for (let property in component) {
            try {
                if (typeof component[property] != "object")
                    continue;
                const componentPropertyElement = SceneSerializer.SerializeComponentProperty(componentCast, property, true);
                // if (componentPropertyElement && !componentSerialized.properties.includes(componentPropertyElement)) {
                if (componentPropertyElement) {
                    componentSerialized.properties.push(componentPropertyElement);
                }
            }
            catch (error) {
                // console.warn(error);
            }
        }
        return componentSerialized;
    }
    static SerializeTransform(transform) {
        if (transform.parent) {
            console.warn(transform.gameObject.name, transform.parent.gameObject.name);
        }
        ;
        return {
            uuid: transform.uuid,
            position: { x: transform.position.x, y: transform.position.y, z: transform.position.z },
            rotation: { x: transform.eulerAngles.x, y: transform.eulerAngles.y, z: transform.eulerAngles.z },
            scale: { x: transform.localScale.x, y: transform.localScale.y, z: transform.localScale.z },
            parent: transform.parent ? transform.parent.uuid : ""
        };
    }
    static SerializeGameObject(gameObject) {
        let gameObjectSerialized = {
            uuid: gameObject.uuid,
            name: gameObject.name,
            transform: SceneSerializer.SerializeTransform(gameObject.transform),
            components: []
        };
        for (let component of gameObject.components) {
            const componentCast = component;
            if (componentCast.hideFlags == HideFlags.HideAndDontSave)
                continue;
            const componentSerialized = SceneSerializer.SerializeComponent(componentCast);
            gameObjectSerialized.components.push(componentSerialized);
        }
        return gameObjectSerialized;
    }
    static Serialize(scene) {
        let sceneSerialized = { gameObjects: [] };
        for (let gameObject of scene.gameObjects) {
            if (gameObject.hideFlags == HideFlags.HideAndDontSave)
                continue;
            const gameObjectSerialized = SceneSerializer.SerializeGameObject(gameObject);
            sceneSerialized.gameObjects.push(gameObjectSerialized);
        }
        return sceneSerialized;
    }
}
//# sourceMappingURL=SceneSerializer.js.map