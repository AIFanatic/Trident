import {IRendererConfiguration} from './IRendererConfiguration'
import {IPhysicsConfiguration} from './IPhysicsConfiguration'

export interface IWorldConfiguration {
    rendererConfig: IRendererConfiguration;
    physicsConfig: IPhysicsConfiguration;
}