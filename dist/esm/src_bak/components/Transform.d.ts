import { GameObject } from './GameObject';
import { IComponent } from '../interfaces/IComponent';
import { ComponentsEnum } from '../enums/ComponentsEnum';
import { Vector3, Quaternion } from 'three';
import { Object3DExtended } from '../utils/Object3DExtended';
/**
 * Every GameObject has a Transform.
 *
 * It allows for control over the position, scale and rotation of an object.
 *
 * Transforms can be have a parent which allows for simultaneous control of parents and children.
 *
 * @noInheritDoc
 */
export declare class Transform implements IComponent {
    uuid: string;
    classtype: ComponentsEnum;
    name: string;
    tag: string;
    gameObject: GameObject;
    /**
    * The local up vector for this transform.
    */
    up: Vector3;
    /**
    * The local right vector for this transform.
    */
    right: Vector3;
    /**
    * The local forward vector for this transform.
    */
    forward: Vector3;
    _parent: Transform;
    group: Object3DExtended;
    /**
    * Get the world position of this transform.
    * @returns {Vector3} The transform world position.
    */
    get position(): Vector3;
    /**
    * Set the world position of this transform.
    * @param {Vector3} position - The world position to be applied to the transform.
    */
    set position(position: Vector3);
    /**
    * Get the local position of this transform.
    * @returns {Vector3} The transform local position.
    */
    get localPosition(): Vector3;
    /**
    * Set the local position of this transform.
    * @param {Vector3} localPosition - The local position to be applied to the transform.
    */
    set localPosition(localPosition: Vector3);
    /**
    * Get the world rotation of this transform.
    * @returns {Quaternion} The transform world rotation.
    */
    get rotation(): Quaternion;
    /**
    * Set the world rotation of this transform.
    * @param {Quaternion} rotation - The world rotation to be applied to the transform.
    */
    set rotation(rotation: Quaternion);
    /**
    * Get the local rotation of this transform.
    * @returns {Quaternion} The transform local rotation.
    */
    get localRotation(): Quaternion;
    /**
    * Set the local rotation of this transform.
    * @param {Quaternion} localRotation - The local rotation to be applied to the transform.
    */
    set localRotation(localRotation: Quaternion);
    /**
    * Get the world euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform world euler angles.
    */
    get eulerAngles(): Vector3;
    /**
    * Set the world euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} eulerAngles - The world euler angles to be applied to the transform.
    */
    set eulerAngles(eulerAngles: Vector3);
    /**
    * Get the local euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform local euler angles.
    */
    get localEulerAngles(): Vector3;
    /**
    * Set the local euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} localEulerAngles - The local euler angles to be applied to the transform.
    */
    set localEulerAngles(localEulerAngles: Vector3);
    /**
    * Get the local scale of this transform.
    * @returns {Vector3} The transform local scale.
    */
    get localScale(): Vector3;
    /**
    * Set the local scale of this transform.
    * @param {Vector3} localScale - The local scale to be applied to the transform.
    */
    set localScale(localScale: Vector3);
    private children;
    /**
     * Get a transform child by index.
     * @returns {Transform | null} Returns the child Transform or null if not found.
     */
    GetChild(index: number): Transform | null;
    /**
     * The number of children the Transform has.
     * @returns {number} The number of children this Transform has.
     */
    get childCount(): number;
    /**
    * Get the parent of this transform.
    * @returns {Transform} The transform parent.
    */
    get parent(): Transform;
    /**
    * Set the parent of this transform.
    * Position, rotation and scale of this transform will be affected by the parent.
    * @param {Transform} parent - Parent transform.
    */
    set parent(parent: Transform | null);
    constructor(gameObject: GameObject);
    Translate(translation: Vector3): void;
    /**
     * Rotates transform around a point.
     * This method changes both the transform position and rotation.
     *
     * @param {Vector3} point - Point in world space
     * @param {Vector3} axis - Rotation axis
     * @param {number} angle - Angle in degrees
     */
    RotateAround(point: Vector3, axis: Vector3, angle: number): void;
    Tick(): void;
    FixedUpdate(): void;
    LateUpdate(): void;
    Update(): void;
    Start(): void;
    Stop(): void;
    Destroy(): void;
}
