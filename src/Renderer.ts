import { IRendererConfiguration } from './interfaces/IRendererConfiguration';

import {AmbientLight, PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import { ConfigurationDefaults } from './defaults/ConfigurationDefaults';

export class Renderer {
    public OnLoaded: () => void = () => {};

    public renderer: WebGLRenderer;
    private canvas: HTMLCanvasElement;

    private config: IRendererConfiguration;

    private now: number = 0;
    private then: number = 0;
    private elapsed: number = 0;
    private fpsInterval: number = 0;
    private startTime: number = 0;

    private frameCount: number = 0;
    private currentFps: number = 0;

    private ambientLight: AmbientLight;

    constructor(config: IRendererConfiguration) {
        this.config = Object.assign({}, ConfigurationDefaults.renderer, config);

        this.InitRenderer();
    }

    private InitRenderer() {
        const scene = new Scene();

        this.canvas = document.getElementById(this.config.containerId) as HTMLCanvasElement;
        const renderer = new WebGLRenderer({canvas: this.canvas, logarithmicDepthBuffer: this.config.logarithmicDepthBuffer, antialias: this.config.antialias});

        renderer.physicallyCorrectLights = this.config.physicallyCorrectLights;
        renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio * this.config.pixelRatio);
        renderer.shadowMap.enabled = true;

        this.renderer = renderer;

        this.fpsInterval = 1000 / this.config.targetFrameRate;
        this.then = Date.now();
        this.startTime = this.then;

        new ResizeObserver(() => {this.OnResize()}).observe(this.renderer.domElement.parentElement);

        // Skip a bit so that initiator can set OnLoaded
        setTimeout(() => {
            this.OnLoaded();
        }, 50);
    }

    public CreateScene(): Scene {
        return new Scene();
    }

    private OnResize() {
        // this.renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
    }

    public Tick(scene: Scene, camera: PerspectiveCamera) {
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
                this.renderer.render(scene, camera);
            }

            // TESTING...Report #seconds since start and achieved fps.
            var sinceStart = this.now - this.startTime;
            this.currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
        }
    }
}