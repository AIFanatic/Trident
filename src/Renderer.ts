import { IRendererConfiguration } from './interfaces/IRendererConfiguration';

import {AmbientLight, PerspectiveCamera, Scene, WebGLRenderer} from 'three';

const RendererConfigurationDefaults: IRendererConfiguration = {
    containerId: null,
    targetFrameRate: 60,
    antialias: true,
    logarithmicDepthBuffer: false,
    pixelRatio: 1,
    physicallyCorrectLights: false
}

export class Renderer {
    public scene: Scene;
    public renderer: WebGLRenderer;
    private canvas: HTMLCanvasElement;

    private now: number = 0;
    private then: number = 0;
    private elapsed: number = 0;
    private fpsInterval: number = 0;
    private startTime: number = 0;

    private frameCount: number = 0;
    private currentFps: number = 0;

    private ambientLight: AmbientLight;

    constructor(config: IRendererConfiguration, loadedCb?:() => void) {
        const scene = new Scene();

        const _config = Object.assign({}, RendererConfigurationDefaults, config);

        this.canvas = document.getElementById(_config.containerId) as HTMLCanvasElement;
        const renderer = new WebGLRenderer({canvas: this.canvas, logarithmicDepthBuffer: _config.logarithmicDepthBuffer, antialias: _config.antialias});

        renderer.physicallyCorrectLights = _config.physicallyCorrectLights;
        renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio * _config.pixelRatio);
        renderer.shadowMap.enabled = true;

        this.scene = scene;
        this.renderer = renderer;

        // TODO: Clean renderer rendering settings (skybox, fog, ambient, etc)
        this.ambientLight = new AmbientLight(0xffffff, 0.3);
        this.scene.add(this.ambientLight);

        this.fpsInterval = 1000 / config.targetFrameRate;
        this.then = Date.now();
        this.startTime = this.then;

        window.addEventListener("resize", (event: UIEvent) => {
            this.renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
        });

        if (loadedCb) {
            loadedCb()
        }
    }

    public Tick(camera: PerspectiveCamera) {
        // calc elapsed time since last loop

        this.now = Date.now();
        this.elapsed = this.now - this.then;

        // if enough time has elapsed, draw the next frame

        if (this.elapsed > this.fpsInterval) {
            // Get ready for next frame by setting then=now, but...
            // Also, adjust for fpsInterval not being multiple of 16.67
            this.then = this.now - (this.elapsed % this.fpsInterval);

            // draw stuff here
            if (camera) {
                this.renderer.render(this.scene, camera);
            }

            // TESTING...Report #seconds since start and achieved fps.
            var sinceStart = this.now - this.startTime;
            this.currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
        }
    }
}