import { Camera } from "./components";
import { GameObject } from "./components/GameObject";

import { Runtime } from "./Runtime";

import { AmbientLight, Scene as THREEScene, Vector3 } from 'three';
import { PhysX } from "trident-physx-js-webidl";
import { PhysicsRaycast } from "./physics/PhysicsRaycast";

/**
 * The scene that holds all GameObjects.
 */
export class Scene {
    public name: string;
    public gameObjects: GameObject[] = [];

    private activeCamera: Camera;

    public userData: any;

    public readonly rendererScene: THREEScene;
    public readonly physicsScene: PhysX.PxScene;
    public readonly physicsRaycast: PhysicsRaycast;

    constructor(name: string) {
        this.name = name;

        this.rendererScene = Runtime.Renderer.CreateScene();
        this.physicsScene = Runtime.Physics.CreateScene();

        this.physicsRaycast = new PhysicsRaycast(this.physicsScene);

        // TODO: Clean renderer rendering settings (skybox, fog, ambient, etc)
        const ambientLight = new AmbientLight(0xffffff, 0.3);
        this.rendererScene.add(ambientLight);
    }

    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    public AddGameObject(gameObject: GameObject): boolean {
        this.gameObjects.push(gameObject);
        return true;
    }

    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    public RemoveGameObject(gameObject: GameObject): boolean {
        if (gameObject instanceof GameObject == false) {
            console.error(`Invalid GameObject ${gameObject}`);
            return false;
        }

        const gameObjectIndex = this.gameObjects.indexOf(gameObject);
        if (gameObjectIndex == -1) {
            console.warn(`Tried to remove GameObject ${gameObject} but it wasn't found in ${this}`)
            return false;
        }

        this.gameObjects.splice(gameObjectIndex, 1);
        return true;
    }
    
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    public GetActiveCamera(): Camera {
        return this.activeCamera;
    }
    
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    public SetActiveCamera(camera: Camera) {
        this.activeCamera = camera;
    }
        
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    public FixedUpdate(): void {
        for(let gameObject of this.gameObjects) {
            gameObject.FixedUpdate();
        }
    }

    public Update(): void {
        for(let gameObject of this.gameObjects) {
            gameObject.Update();
        }
    }

    public LateUpdate(): void {
        for(let gameObject of this.gameObjects) {
            gameObject.LateUpdate();
        }
    }

    public OnDrawGizmos(): void {
        for(let gameObject of this.gameObjects) {
            gameObject.OnDrawGizmos();
        }
    }

    public UpdatePhysics(): void {
        Runtime.Physics.Update(this.physicsScene);
    }

    public Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number = 0): PhysX.PxRaycastBuffer10 {
        // const ray = this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
        return this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
    }

    public Render(): void {
        if (this.GetActiveCamera()) {
            Runtime.Renderer.Tick(this.rendererScene, this.GetActiveCamera().GetCamera());
        }
    }
}