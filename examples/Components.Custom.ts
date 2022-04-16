/**
 * @description Custom component creation.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { GameObject, Components, PrimitiveType } from '../dist/esm/trident-esm-bundle.js';

class CustomComponent extends Components.Component {
    public Start() {
        this.gameObject.CreatePrimitive(PrimitiveType.Cube);
    }

    public Update() {
        this.transform.eulerAngles.x += 1;
    }
}

const scene = SceneHelper.CreateScene();
scene.OnInitialized = () => {
    SceneHelper.CreateCamera(scene);
    SceneHelper.CreateSunlight(scene);
    
    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(CustomComponent);
    cubeComponent.transform.position.set(0, -2, -10);
    
    scene.Load();
    scene.Play();
};