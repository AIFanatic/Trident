import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
export declare class Renderer {
    OnLoaded: () => void;
    scene: Scene;
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
    private OnResize;
    Tick(camera: PerspectiveCamera): void;
}
