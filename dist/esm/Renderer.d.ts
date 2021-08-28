import { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
export declare class Renderer {
    scene: Scene;
    renderer: WebGLRenderer;
    private canvas;
    private now;
    private then;
    private elapsed;
    private fpsInterval;
    private startTime;
    private frameCount;
    private currentFps;
    constructor(config: IRendererConfiguration, loadedCb?: () => void);
    Tick(camera: PerspectiveCamera): void;
}
