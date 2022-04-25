import { AmbientLight, Scene, WebGLRenderer } from 'three';
import { ConfigurationDefaults } from './defaults/ConfigurationDefaults';
export class Renderer {
    constructor(config) {
        this.OnLoaded = () => { };
        this.now = 0;
        this.then = 0;
        this.elapsed = 0;
        this.fpsInterval = 0;
        this.startTime = 0;
        this.frameCount = 0;
        this.currentFps = 0;
        this.config = Object.assign({}, ConfigurationDefaults.renderer, config);
        this.InitRenderer();
    }
    InitRenderer() {
        const scene = new Scene();
        this.canvas = document.getElementById(this.config.containerId);
        const renderer = new WebGLRenderer({ canvas: this.canvas, logarithmicDepthBuffer: this.config.logarithmicDepthBuffer, antialias: this.config.antialias });
        renderer.physicallyCorrectLights = this.config.physicallyCorrectLights;
        renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio * this.config.pixelRatio);
        renderer.shadowMap.enabled = true;
        this.scene = scene;
        this.renderer = renderer;
        // TODO: Clean renderer rendering settings (skybox, fog, ambient, etc)
        this.ambientLight = new AmbientLight(0xffffff, 0.3);
        this.scene.add(this.ambientLight);
        this.fpsInterval = 1000 / this.config.targetFrameRate;
        this.then = Date.now();
        this.startTime = this.then;
        new ResizeObserver(() => { this.OnResize(); }).observe(this.renderer.domElement);
        // Skip a bit so that initiator can set OnLoaded
        setTimeout(() => {
            this.OnLoaded();
        }, 50);
    }
    OnResize() {
        this.renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
    }
    Tick(camera) {
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
//# sourceMappingURL=Renderer.js.map