import { GameObject } from "./components/GameObject";
import { Renderer } from './Renderer';
import { Physics } from './Physics';
import { Input } from './Input';
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components";
import { AmbientLight } from "three";
/**
 * The scene that holds all GameObjects.
 */
var Scene = /** @class */ (function () {
    /**
     * @param {IRendererConfiguration} rendererConfig - Renderer configuration.
     * @param {IPhysicsConfiguration} physicsConfig - Physics configuration.
     */
    function Scene(rendererConfig, physicsConfig) {
        var _this = this;
        this.currentFrame = 0;
        this.gameObjects = [];
        this.OnLoaded = function () { };
        this.renderer = this.InitializeRenderer(rendererConfig);
        this.physics = this.InitializePhysics(physicsConfig);
        this.input = new Input(this);
        // When a scene is created a camera is created too
        var cameraGameObject = new GameObject(this);
        cameraGameObject.name = "SceneCamera";
        this.camera = cameraGameObject.AddComponent(Camera);
        this.renderer.renderer.shadowMap.enabled = true;
        // When a scene is created a light is created too
        var directionalLightGameObject = new GameObject(this);
        directionalLightGameObject.name = "DirectionalLight";
        directionalLightGameObject.transform.position.set(0, 3, 0);
        directionalLightGameObject.transform.eulerAngles.set(50, 30, 0);
        var directionalLight = directionalLightGameObject.AddComponent(DirectionalLight);
        directionalLight.intensity = 0.5;
        directionalLight.shadows = true;
        // TODO: Temporary
        var ambientLight = new AmbientLight(0xffffff, 0.3);
        this.renderer.scene.add(ambientLight);
        requestAnimationFrame(function (now) { _this.Update(); });
    }
    Scene.prototype.InitializeRenderer = function (rendererConfig) {
        var _this = this;
        return new Renderer(rendererConfig, function () {
            _this.rendererLoaded = true;
            _this.CheckLoaded();
        });
    };
    Scene.prototype.InitializePhysics = function (physicsConfig) {
        var _this = this;
        return new Physics(this, physicsConfig, function () {
            _this.physicsLoaded = true;
            _this.CheckLoaded();
        });
    };
    Scene.prototype.CheckLoaded = function () {
        if (this.rendererLoaded && this.physicsLoaded) {
            if (typeof this.OnLoaded == "function") {
                this.OnLoaded();
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
     * Enables Gizmos to be visible in the scene.
     * Gizmos are helpful to visualize and debug components (eg: Camera and Lights).
     */
    Scene.prototype.EnableGizmos = function () {
        if (!this.gizmosEnabled) {
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.OnGizmosEnabled();
            }
            this.gizmosEnabled = true;
        }
    };
    /**
     * Disables Gizmos from being visible in the scene.
     */
    Scene.prototype.DisableGizmos = function () {
        if (this.gizmosEnabled) {
            for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.OnGizmosDisabled();
            }
            this.gizmosEnabled = false;
        }
    };
    /**
     * Check if Gizmos are enabled.
     * @returns {boolean} - If Gizmos are enabled.
     */
    Scene.prototype.HasGizmosEnabled = function () {
        return this.gizmosEnabled;
    };
    // TODO: Figure another way of checking type due to runtime compilation stripping types
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    Scene.prototype.AddGameObject = function (gameObject) {
        // if (gameObject instanceof GameObject == false) {
        //     console.error(`Invalid GameObject ${gameObject}`);
        //     return false;
        // }
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
     * Called when the scene starts.
     * Calls Start on all attached components.
     */
    Scene.prototype.Start = function () {
        this.isPlaying = true;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.Start();
        }
    };
    /**
     * Called when the scene stops.
     * Calls Stop on all attached components.
     */
    Scene.prototype.Stop = function () {
        this.isPlaying = false;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.Stop();
        }
    };
    return Scene;
}());
export { Scene };
//# sourceMappingURL=Scene.js.map