import { Component, GameObject, Transform } from "../components";
import { Scene } from "../Scene";
import { IComponentPropertySerialized, IComponentSerialized, IGameObjectSerialized, ISceneSerialized, ITransformSerialized } from './ISceneSerialized';
export declare class SceneSerializer {
    static getInstanceParentInstance(instance: object): Function;
    static SerializeComponentProperty(component: Component, property: string, checkCustomTypeOnly?: boolean): IComponentPropertySerialized;
    static SerializeComponent(component: Component): IComponentSerialized;
    static SerializeTransform(transform: Transform): ITransformSerialized;
    static SerializeGameObject(gameObject: GameObject): IGameObjectSerialized;
    static Serialize(scene: Scene): ISceneSerialized;
}
