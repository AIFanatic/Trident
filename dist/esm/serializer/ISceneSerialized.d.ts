import { IFile } from "../interfaces/IFile";
import { PropertyTypes } from "./PropertyTypes";
export interface IComponentPropertySerialized {
    name: string;
    value: any;
    type: PropertyTypes;
    file?: IFile;
}
export interface IComponentSerialized {
    uuid: string;
    component: string;
    properties: IComponentPropertySerialized[];
    file?: IFile;
}
export interface ITransformSerialized {
    uuid: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    rotation: {
        x: number;
        y: number;
        z: number;
    };
    scale: {
        x: number;
        y: number;
        z: number;
    };
    parent: string;
}
export interface IGameObjectSerialized {
    uuid: string;
    name: string;
    transform: ITransformSerialized;
    components: IComponentSerialized[];
}
export interface ISceneSerialized {
    gameObjects: IGameObjectSerialized[];
}
