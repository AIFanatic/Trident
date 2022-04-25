import { Component, GameObject, Transform } from "../components";
import { SerializableTypesInstance } from '../utils/SerializeField';

import { Color, Vector3, Vector2, BoxGeometry, MeshStandardMaterial, BufferGeometry, Material } from "three";
import { Scene } from "../Scene";
import { PropertyTypes } from "./PropertyTypes";

import { IComponentPropertySerialized, IComponentSerialized, IGameObjectSerialized, ISceneSerialized, ITransformSerialized } from './ISceneSerialized';
import { Components, Resources } from "..";
import { FileType, IFile } from "../interfaces/IFile";

export class SceneDeserializer {

    public static async LoadFile(file: IFile) {
        return Resources.LoadAsync(file.fileId);
    }

    static getInstanceParentInstance(instance: object): Function {
        const prototype = Object.getPrototypeOf(instance);
        const prototypeParent = Object.getPrototypeOf(prototype);

        if (prototypeParent.constructor.name == "Object" || prototypeParent.constructor.name == "EventDispatcher") {
            return prototype.constructor;
        }
        return this.getInstanceParentInstance(prototype);
    }

    static DeserializeComponentProperty(component: Component, property: IComponentPropertySerialized, checkCustomTypeOnly = false) {
        const classname = component.constructor.name;
        const customType = SerializableTypesInstance.get(classname, property.name);

        if (customType) {
            if (typeof customType == "function") {
                console.log("CUSTOM TYPE", property.name)
                // this.DeserializeComponent(component.gameObject, component[property.name])
                // return {
                //     name: property,
                //     value: this.DeserializeComponent(component[property]),
                //     type: PropertyTypes.CUSTOM_FUNCTION
                // }
            }
            else if (typeof customType == "object") {
                component[property.name] = property.value;
            }
        }
        if (checkCustomTypeOnly) return;

        if (property.type == PropertyTypes.VECTOR3) {
            const vector3 = new Vector3(property.value.x, property.value.y, property.value.z);
            component[property.name] = vector3;
        }
        else if (property.type == PropertyTypes.COLOR) {
            const color = new Color(property.value);
            component[property.name] = color;
        }
        else if (property.type == PropertyTypes.VECTOR2) {
            const vector2 = new Vector2(property.value.x, property.value.y);
            component[property.name] = vector2;
        }
        else if (property.type == PropertyTypes.MESH) {
            if (property.file && property.file.type == FileType.MESH) {
                this.LoadFile(property.file)
                .then(geometry => {
                    if (geometry instanceof BufferGeometry) {
                        component[property.name] = geometry;
                    }
                })
            }
            else {
                component[property.name] = new BoxGeometry(1,1,1);
            }
        }
        else if (property.type == PropertyTypes.MATERIAL) {
            if (property.file && property.file.type == FileType.MATERIAL) {
                this.LoadFile(property.file)
                .then(material => {
                    if (material instanceof Material) {
                        component[property.name] = material;
                    }
                })
                // return { name: property, value: component[property].constructor.name, type: PropertyTypes.OBJECT, file: component[property].userData};
            }
            else {
                component[property.name] = new MeshStandardMaterial();
            }
        }
        else if (property.type == PropertyTypes.NUMBER) {
            component[property.name] = property.value;
        }
        else if (property.type == PropertyTypes.BOOLEAN) {
            component[property.name] = property.value;
        }
        else if (property.type == PropertyTypes.OBJECT) {
            // const parent = this.getInstanceParentInstance(component[property]);
            // return { name: property, value: component[property].constructor.name, type: PropertyTypes.OBJECT }
        }
    }

    static async DeserializeComponent(gameObject: GameObject, componentSerialized: IComponentSerialized): Promise<Component> {
        const componentCast = componentSerialized.file ? await this.LoadFile(componentSerialized.file) : Components[componentSerialized.component];
        // const componentCast = Components[componentSerialized.component];
        const component = gameObject.AddComponent(componentCast) as Component;
        component.uuid = componentSerialized.uuid;

        // Parse component properties
        for (let property of componentSerialized.properties) {
            try {
                const componentPropertyElement = this.DeserializeComponentProperty(component, property);
                // if (componentPropertyElement) {
                //     componentSerialized.properties.push(componentPropertyElement);
                // }
            } catch (error) {
                // console.warn(error);
            }
        }

        // // Parses component class instances properties
        // for (let property in component) {
        //     try {
        //         if (typeof component[property] != "object") continue;
        //         const componentPropertyElement = this.DeserializeComponentProperty(componentCast, property, true);
        //         if (componentPropertyElement && !componentSerialized.properties.includes(componentPropertyElement)) {
        //             componentSerialized.properties.push(componentPropertyElement);
        //         }
        //     } catch (error) {
        //         // console.warn(error);
        //     }
        // }

        return component;
    }

    static FindTransformByUUID(scene: Scene, uuid: string): Transform {
        for (let gameObject of scene.gameObjects) {
            if (gameObject.transform.uuid === uuid) return gameObject.transform;
        }
    }

    static DeserializeTransform(transform: Transform, transformSerialized: ITransformSerialized) {
        transform.uuid = transformSerialized.uuid;
        // TODO: Order of addition will screw me, as always do this after all gameobjects are added to the scene.
        if (transformSerialized.parent != "") {
            transform.parent = this.FindTransformByUUID(transform.gameObject.scene, transformSerialized.parent);
        }
        transform.position.set(transformSerialized.position.x, transformSerialized.position.y, transformSerialized.position.z);
        transform.eulerAngles.set(transformSerialized.rotation.x, transformSerialized.rotation.y, transformSerialized.rotation.z);
        transform.localScale.set(transformSerialized.scale.x, transformSerialized.scale.y, transformSerialized.scale.z);
    }

    static DeserializeGameObject(scene: Scene, gameObjectSerialized: IGameObjectSerialized): GameObject {
        const gameObject = new GameObject(scene);
        gameObject.uuid = gameObjectSerialized.uuid;
        gameObject.name = gameObjectSerialized.name;
        this.DeserializeTransform(gameObject.transform, gameObjectSerialized.transform);

        for (let componentSerialized of gameObjectSerialized.components) {
            const component = this.DeserializeComponent(gameObject, componentSerialized);
            // gameObject.AddComponent(component);
        }
        return gameObject;
    }
    
    // TODO: Make async
    static Deserialize(scene: Scene, sceneSerialized: ISceneSerialized) {
        for (let gameObjectSerialized of sceneSerialized.gameObjects) {
            const gameObject = this.DeserializeGameObject(scene, gameObjectSerialized);
        }

        console.log("scene", scene)
    }
}