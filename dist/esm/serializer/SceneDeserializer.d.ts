import { Component, GameObject, Transform } from "../components";
import { BufferGeometry, Material } from "three";
import { Scene } from "../Scene";
import { IComponentPropertySerialized, IComponentSerialized, IGameObjectSerialized, ISceneSerialized, ITransformSerialized } from './ISceneSerialized';
import { IFile } from "../interfaces/IFile";
export declare class SceneDeserializer {
    static LoadFile(file: IFile): Promise<Material | BufferGeometry | Component>;
    static getInstanceParentInstance(instance: object): Function;
    static DeserializeComponentProperty(component: Component, property: IComponentPropertySerialized, checkCustomTypeOnly?: boolean): void;
    static DeserializeComponent(gameObject: GameObject, componentSerialized: IComponentSerialized): Promise<Component>;
    static FindTransformByUUID(scene: Scene, uuid: string): Transform;
    static DeserializeTransform(transform: Transform, transformSerialized: ITransformSerialized): void;
    static DeserializeGameObject(scene: Scene, gameObjectSerialized: IGameObjectSerialized): GameObject;
    static Deserialize(scene: Scene, sceneSerialized: ISceneSerialized): void;
}
