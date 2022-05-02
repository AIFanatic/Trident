import { Component, GameObject, Transform } from "../components";
import { Scene } from "../Scene";
import { IComponentPropertySerialized, IComponentSerialized, IGameObjectSerialized, ISceneSerialized, ITransformSerialized } from './ISceneSerialized';
import { IFile } from "../interfaces/IFile";
import { ResourcesCacheEntry } from "../resources/ResourcesCache";
export declare class SceneDeserializer {
    /**
     * Loads a file asynchronously
     *
     * This method is separate in order for it to be overridden.
     * This is useful in situations were files are loaded from different places, such as the Editor (File System API) vs Runtime (fetch).
     * @param file File to be loaded
     * @returns Loaded file
     */
    static LoadFile(file: IFile): Promise<ResourcesCacheEntry>;
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
    static DeserializeComponentProperty(component: Component, property: IComponentPropertySerialized): void;
    /**
     * Deserializes a class in a component that are not components themselves.
     * eg: ArticulationBody.xDrive is a class but not a component.
     * @param component Component class/function
     * @param componentSerialized
     * @returns Created component
     */
    static DeserializeComponentClassProperties(componentClass: any, componentClassProperties: IComponentSerialized): any;
    /**
     * Deserializes a component.
     * @param gameObject GameObject where the component is going to be added to.
     * @param componentSerialized Scerialized component.
     * @returns Created component
     */
    static DeserializeComponent(gameObject: GameObject, componentSerialized: IComponentSerialized): Promise<Component>;
    static FindTransformByUUID(scene: Scene, uuid: string): Transform;
    /**
     * Deserializes a Transform
     * @todo In order to set the parent all the transforms need to already be in the scene.
     * Therefore only set the parents when all the GameObjects are created.
     * @param scene Scene that this Transform belongs to.
     * @param transformSerialized Serialized transform.
     * @returns
     */
    static DeserializeTransform(scene: Scene, transform: Transform, transformSerialized: ITransformSerialized): void;
    /**
     * Deserializes a GameObject.
     * @param scene Scene to add GameObject to.
     * @param gameObjectSerialized Scerialized GameObject.
     * @returns Created GameObject
     */
    static DeserializeGameObject(scene: Scene, gameObjectSerialized: IGameObjectSerialized): Promise<GameObject>;
    /**
     * Deserializes a Serialized scene
     * @todo Return a promise that resolves when deserialization is complete.
     * @param sceneSerialized Scerialized Scene.
     * @returns Created Scene
     */
    static Deserialize(sceneSerialized: ISceneSerialized): Promise<Scene>;
}
