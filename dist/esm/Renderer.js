import { Scene, WebGLRenderer } from 'three';
var RendererConfigurationDefaults = {
    containerId: null,
    targetFrameRate: 60,
    antialias: true,
    logarithmicDepthBuffer: false,
    pixelRatio: 1,
    physicallyCorrectLights: false
};
var Renderer = /** @class */ (function () {
    function Renderer(config, loadedCb) {
        var _this = this;
        this.now = 0;
        this.then = 0;
        this.elapsed = 0;
        this.fpsInterval = 0;
        this.startTime = 0;
        this.frameCount = 0;
        this.currentFps = 0;
        var scene = new Scene();
        var _config = Object.assign({}, RendererConfigurationDefaults, config);
        this.canvas = document.getElementById(_config.containerId);
        var renderer = new WebGLRenderer({ canvas: this.canvas, logarithmicDepthBuffer: _config.logarithmicDepthBuffer, antialias: _config.antialias });
        renderer.physicallyCorrectLights = _config.physicallyCorrectLights;
        renderer.setSize(this.canvas.parentElement.offsetWidth, this.canvas.parentElement.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio * _config.pixelRatio);
        this.scene = scene;
        // this.camera = camera;
        this.renderer = renderer;
        this.fpsInterval = 1000 / config.targetFrameRate;
        this.then = Date.now();
        this.startTime = this.then;
        window.addEventListener("resize", function (event) {
            _this.renderer.setSize(_this.canvas.parentElement.offsetWidth, _this.canvas.parentElement.offsetHeight);
        });
        if (loadedCb) {
            loadedCb();
        }
    }
    Renderer.prototype.Tick = function (camera) {
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
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=Renderer.js.map