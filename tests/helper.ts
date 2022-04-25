import { Renderer, Physics, Scene, GameObject } from '../src/';
import { Camera, DirectionalLight } from '../src/components';

export function CreateScene(config: any = {}, OnLoaded) {
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

export function CreateCamera(scene: Scene, x = 0, y = 0, z = 0) {
    const cameraGameObject = new GameObject(scene);
    cameraGameObject.name = "SceneCamera";
    const camera = cameraGameObject.AddComponent(Camera);
    scene.SetActiveCamera(camera);
    camera.transform.position.set(x, y, z);
    
    return camera;
}

export function CreateSunlight(scene: Scene) {
    const directionalLightGameObject = new GameObject(scene);
    directionalLightGameObject.name = "DirectionalLight";
    directionalLightGameObject.transform.position.set(0, 3, 0);
    directionalLightGameObject.transform.eulerAngles.set(50, 30, 0);
    const directionalLight = directionalLightGameObject.AddComponent(DirectionalLight);
    directionalLight.intensity = 0.5;
    directionalLight.shadows = true;
}

export async function WaitForTick(scene: Scene, ticks: number = 0) {
    return new Promise<void>((resolve, reject) => {
        const frame = scene.currentFrame;
        const interval = setInterval(() => {
            if (frame + ticks < scene.currentFrame) {
                clearInterval(interval);
                resolve();
            }
        }, 0);
    })
}