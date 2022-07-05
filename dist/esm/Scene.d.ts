import { Camera } from "./components";
import { GameObject } from "./components/GameObject";
import { Scene as THREEScene, Vector3 } from 'three';
import { PhysX } from "trident-physx-js-webidl";
import { PhysicsRaycast } from "./physics/PhysicsRaycast";
/**
 * The scene that holds all GameObjects.
 */
export declare class Scene {
    name: string;
    gameObjects: GameObject[];
    private activeCamera;
    userData: any;
    readonly rendererScene: THREEScene;
    readonly physicsScene: PhysX.PxScene;
    readonly physicsRaycast: PhysicsRaycast;
    constructor(name: string);
    /**
     * Adds a new GameObject to the scene.
     * @param {GameObject} gameObject - GameObject to be added to the scene.
     */
    AddGameObject(gameObject: GameObject): boolean;
    /**
     * Remove a GameObject from the scene
     * @returns {boolean} - True if GameObject was successfully removed, false otherwise.
     */
    RemoveGameObject(gameObject: GameObject): boolean;
    /**
     * Get the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @returns {Camera} - Current active camera.
     */
    GetActiveCamera(): Camera;
    /**
     * Set the current main camera.
     * The main camera is the camera that the client is viewing the scene from.
     * @param {Camera} camera - Camera to become the main camera.
     */
    SetActiveCamera(camera: Camera): void;
    /**
     * Called before every Physics update.
     * Calls FixedUpdate on all attached components.
     */
    FixedUpdate(): void;
    Update(): void;
    LateUpdate(): void;
    OnDrawGizmos(): void;
    UpdatePhysics(): void;
    Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask?: number): PhysX.PxRaycastBuffer10;
    Render(): void;
}
