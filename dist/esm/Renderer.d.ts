import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
export declare class Renderer {
    OnLoaded: () => void;
    renderer: WebGLRenderer;
    private canvas;
    private config;
    private now;
    private then;
    private elapsed;
    private fpsInterval;
    private startTime;
    private frameCount;
    private currentFps;
    private ambientLight;
    constructor(config: IRendererConfiguration);
    private InitRenderer;
    CreateScene(): Scene;
    private OnResize;
    Tick(scene: Scene, camera: PerspectiveCamera): void;
}
