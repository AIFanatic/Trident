import { Renderer, Physics, Scene, GameObject, Components } from '../../dist/esm/trident-esm-bundle.js';

export class SceneHelper {
    static CreateScene(config = {}, OnLoaded) {
        if (!config.renderer) config.renderer = {};
        if (!config.physics) config.physics = {};
        if (!config.application) config.application = {};

        const defaultConfig = {
            renderer: {
                containerId: "canvasContainer",
            },
            physics: {
                physxWasmURL: window.location + "/../../dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm"
            }
        }
        const _config = {
            renderer: Object.assign({}, defaultConfig.renderer, config.renderer),
            physics: Object.assign({}, defaultConfig.physics, config.physics),
        };

        const renderer = new Renderer(_config.renderer);
        renderer.OnLoaded = () => {
            const physics = new Physics(_config.physics);
            physics.OnLoaded = () => {
                const scene = new Scene(renderer, physics);
                OnLoaded(scene);
            }
        }
    }

    static CreateCamera(scene, x = 0, y = 0, z = 0) {
        const cameraGameObject = new GameObject(scene);
        cameraGameObject.name = "SceneCamera";
        const camera = cameraGameObject.AddComponent(Components.Camera);
        scene.SetActiveCamera(camera);
        camera.transform.position.set(x, y, z);
        
        return camera;
    }

    static CreateSunlight(scene) {
        const directionalLightGameObject = new GameObject(scene);
        directionalLightGameObject.name = "DirectionalLight";
        directionalLightGameObject.transform.position.set(0, 3, 0);
        directionalLightGameObject.transform.eulerAngles.set(50, 30, 0);
        const directionalLight = directionalLightGameObject.AddComponent(Components.DirectionalLight);
        directionalLight.intensity = 0.5;
        directionalLight.shadows = true;
    }
}