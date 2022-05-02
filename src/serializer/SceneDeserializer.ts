import { Component, GameObject, Transform } from "../components";
import { SerializableTypesInstance } from '../utils/SerializeField';

import { Color, Vector3, Vector2, BoxGeometry, MeshStandardMaterial, BufferGeometry, Material } from "three";
import { Scene } from "../Scene";
import { PropertyTypes } from "./PropertyTypes";

import { IComponentPropertySerialized, IComponentSerialized, IGameObjectSerialized, ISceneSerialized, ITransformSerialized } from './ISceneSerialized';
import { Components, Resources } from "..";
import { FileType, IFile } from "../interfaces/IFile";
import { ResourcesCacheEntry } from "../resources/ResourcesCache";

export class SceneDeserializer {
    /**
     * Loads a file asynchronously
     * 
     * This method is separate in order for it to be overridden.
     * This is useful in situations were files are loaded from different places, such as the Editor (File System API) vs Runtime (fetch).
     * @param file File to be loaded
     * @returns Loaded file
     */
    public static async LoadFile(file: IFile): Promise<ResourcesCacheEntry> {
        return Resources.LoadAsync(file.fileId);
    }

    /**
     * Deserializes a component or component class properties.
     * 
     * Deserialization happens based on the "type" field.
     * 
     * For VECTOR3, VECTOR2, COLOR, NUMBER and BOOLEAN the value field just gets assigned as the component's property value.
     * 
     * For MESH and MATERIAL if a "file" is field is present LoadFile is used to load the data, otherwise defaults are assign to the component's property value.
     * 
     * If custom types are found that are functions/classes (through the usage of @SerializeField(T)) deserialization is performed through "DeserializeComponentClassProperties"
     * that essentially calls DeserializeComponentProperty on each of the class properties.
     * This skips the creation of a new component on the GameObject (using AddComponent) since the class may not be a component (eg: ArticulationBody.xDrive).
     * @param component Component class/function
     * @param property Serialized property 
     * @returns
     */
    static DeserializeComponentProperty(component: Component, property: IComponentPropertySerialized) {
        const classname = component.constructor.name;
        const customType = SerializableTypesInstance.get(classname, property.name);

        if (customType) {
            if (typeof customType == "function") {
                this.DeserializeComponentClassProperties(component[property.name], property.value);
            }
            else if (typeof customType == "object") {
                component[property.name] = property.value;
            }
        }

        if (property.type == PropertyTypes.VECTOR3) {
            const vector3 = new Vector3(property.value.x, property.value.y, property.value.z);
            component[property.name] = vector3;
        }
        else if (property.type == PropertyTypes.VECTOR2) {
            const vector2 = new Vector2(property.value.x, property.value.y);
            component[property.name] = vector2;
        }
        else if (property.type == PropertyTypes.COLOR) {
            const color = new Color(property.value);
            component[property.name] = color;
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
            // return { name: property, value: component[property].constructor.name, type: PropertyTypes.OBJECT }
        }
    }

    /**
     * Deserializes a class in a component that are not components themselves.
     * eg: ArticulationBody.xDrive is a class but not a component.
     * @param component Component class/function
     * @param componentSerialized 
     * @returns Created component
     */
    static DeserializeComponentClassProperties(componentClass, componentClassProperties: IComponentSerialized) {
        // Parse component properties
        for (let property of componentClassProperties.properties) {
            try {
                const componentPropertyElement = this.DeserializeComponentProperty(componentClass, property);
            }
            catch (error) {
                // console.warn(error);
            }
        }
        
        return componentClass;
    }
    /**
     * Deserializes a component.
     * @param gameObject GameObject where the component is going to be added to.
     * @param componentSerialized Scerialized component.
     * @returns Created component
     */
    static async DeserializeComponent(gameObject: GameObject, componentSerialized: IComponentSerialized): Promise<Component> {
        const componentCast = componentSerialized.file ? await this.LoadFile(componentSerialized.file) : Components[componentSerialized.component];
        const component = gameObject.AddComponent(componentCast) as Component;
        component.uuid = componentSerialized.uuid;

        // Parse component properties
        for (let property of componentSerialized.properties) {
            try {
                const componentPropertyElement = this.DeserializeComponentProperty(component, property);
            } catch (error) {
                // console.warn(error);
            }
        }

        return component;
    }

    static FindTransformByUUID(scene: Scene, uuid: string): Transform {
        for (let gameObject of scene.gameObjects) {
            if (gameObject.transform.uuid === uuid) return gameObject.transform;
        }
    }
    
    /**
     * Deserializes a Transform
     * @todo In order to set the parent all the transforms need to already be in the scene.
     * Therefore only set the parents when all the GameObjects are created.
     * @param scene Scene that this Transform belongs to.
     * @param transformSerialized Serialized transform.
     * @returns
     */
    static DeserializeTransform(scene: Scene, transform: Transform, transformSerialized: ITransformSerialized) {
        transform.uuid = transformSerialized.uuid;
        // TODO: Order of addition will screw me, as always do this after all gameobjects are added to the scene.
        if (transformSerialized.parent != "") {
            transform.parent = this.FindTransformByUUID(scene, transformSerialized.parent);
        }
        transform.position.set(transformSerialized.position.x, transformSerialized.position.y, transformSerialized.position.z);
        transform.eulerAngles.set(transformSerialized.rotation.x, transformSerialized.rotation.y, transformSerialized.rotation.z);
        transform.localScale.set(transformSerialized.scale.x, transformSerialized.scale.y, transformSerialized.scale.z);
    }

    /**
     * Deserializes a GameObject.
     * @param scene Scene to add GameObject to.
     * @param gameObjectSerialized Scerialized GameObject.
     * @returns Created GameObject
     */
    static async DeserializeGameObject(scene: Scene, gameObjectSerialized: IGameObjectSerialized): Promise<GameObject> {
        const gameObject = new GameObject(scene);
        gameObject.uuid = gameObjectSerialized.uuid;
        gameObject.name = gameObjectSerialized.name;
        this.DeserializeTransform(scene, gameObject.transform, gameObjectSerialized.transform);

        for (let componentSerialized of gameObjectSerialized.components) {
            const component = await this.DeserializeComponent(gameObject, componentSerialized);
        }
        return gameObject;
    }
    
    /**
     * Deserializes a Serialized scene
     * @todo Return a promise that resolves when deserialization is complete.
     * @param sceneSerialized Scerialized Scene.
     * @returns Created Scene
     */
    static async Deserialize(sceneSerialized: ISceneSerialized): Promise<Scene> {
        const scene: Scene = new Scene(sceneSerialized.name);
        scene.userData = sceneSerialized.file ? sceneSerialized.file : null;
        for (let gameObjectSerialized of sceneSerialized.gameObjects) {
            const gameObject = await this.DeserializeGameObject(scene, gameObjectSerialized);
        }

        return scene;
    }
}