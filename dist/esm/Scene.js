import { GameObject } from "./components/GameObject";
import { Renderer } from './Renderer';
import { Physics } from './Physics';
import { Input } from './Input';
import { InstantiationPool } from "./InstantiationPool";
import { ConfigurationDefaults } from "./defaults/ConfigurationDefaults";
/**
 * The scene that holds all GameObjects.
 */
var Scene = /** @class */ (function () {
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    function Scene(config) {
        var _this = this;
        this.isPlaying = false;
        this.currentFrame = 0;
        this.gizmosEnabled = false;
        this.gameObjects = [];
        this.config = {
            renderer: Object.assign({}, ConfigurationDefaults.renderer, config.renderer),
            physics: Object.assign({}, ConfigurationDefaults.physics, config.physics),
            application: Object.assign({}, ConfigurationDefaults.application, config.application)
        };
        this.renderer = this.InitializeRenderer(this.config.renderer);
        this.physics = this.InitializePhysics(this.config.physics);
        this.input = new Input(this);
        requestAnimationFrame(function (now) { _this.Update(); });
    }
    Scene.prototype.InitializeRenderer = function (rendererConfig) {
        var _this = this;
        return new Renderer(rendererConfig, function () {
            _this.rendererLoaded = true;
            _this.CheckInitialized();
        });
    };
    Scene.prototype.InitializePhysics = function (physicsConfig) {
        var _this = this;
        return new Physics(this, physicsConfig, function () {
            _this.physicsLoaded = true;
            _this.CheckInitialized();
        });
    };
    Scene.prototype.CheckInitialized = function () {
        if (this.rendererLoaded && this.physicsLoaded) {
            if (this.OnInitialized) {
                this.OnInitialized();
            }
        }
    };
    /**
     * Get the renderer for this scene.
     * @returns {Renderer} Renderer attached to this scene.
     */
    Scene.prototype.GetRenderer = function () {
        return this.renderer;
    };
    /**
     * Get the physics for this scene.
     * @returns {Physics} - Physics attached to this scene.
     */
    Scene.prototype.GetPhysics = function () {
        return this.physics;
    };
    /**
     * Get the input for this scene.
     * @returns {Input} - Input attached to this scene.
     */
    Scene.prototype.GetInput = function () {
        return this.input;
    };
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    Scene.prototype.GetActiveCamera = function () {
        return this.camera;
    };
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    Scene.prototype.SetActiveCamera = function (camera) {
        this.camera = camera;
    };
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    Scene.prototype.AddGameObject = function (gameObject) {
        this.gameObjects.push(gameObject);
        return true;
    };
    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    Scene.prototype.RemoveGameObject = function (gameObject) {
        if (gameObject instanceof GameObject == false) {
            console.error("Invalid GameObject " + gameObject);
            return false;
        }
        var gameObjectIndex = this.gameObjects.indexOf(gameObject);
        if (gameObjectIndex == -1) {
            console.warn("Tried to remove GameObject " + gameObject + " but it wasn't found in " + this);
            return false;
        }
        this.gameObjects.splice(gameObjectIndex, 1);
        return true;
    };
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    Scene.prototype.FixedUpdate = function () {
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.FixedUpdate();
        }
    };
    /**
     * Called before every Renderer update.
     * Calls Update on all attached components.
     */
    Scene.prototype.Update = function () {
        var _this = this;
        // this.physics.Update();
        if (this.isPlaying) {
            this.physics.Update();
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.Update();
                if (this.gizmosEnabled) {
                    gameObject.OnDrawGizmos();
                }
            }
        }
        if (this.camera) {
            this.renderer.Tick(this.camera.GetCamera());
        }
        for (var _b = 0, _c = this.gameObjects; _b < _c.length; _b++) {
            var gameObject = _c[_b];
            gameObject.LateUpdate();
        }
        this.input.Tick();
        this.currentFrame++;
        requestAnimationFrame(function () { _this.Update(); });
    };
    /**
     * Load the Scene.
     * Instanciates all Components
     */
    Scene.prototype.Load = function () {
        return InstantiationPool.Load();
    };
    /**
     * Called when the scene starts.
     */
    Scene.prototype.Play = function () {
        this.isPlaying = true;
    };
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Scene.prototype.Stop = function () {
        this.isPlaying = false;
    };
    return Scene;
}());
export { Scene };
//# sourceMappingURL=Scene.js.map