import { TransformDefaults } from '../defaults/TransformDefaults';
import { GameObject } from './GameObject';

import { IComponent } from '../interfaces/IComponent';
import { ComponentsEnum } from '../enums/ComponentsEnum';

import { Vector3, Quaternion } from 'three';

import { UUID } from '../utils/UUID';
import { Mathf } from '../utils/Mathf';
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
export class Transform implements IComponent {
    public uuid = UUID.v4();
    public classtype: ComponentsEnum = ComponentsEnum.Transform;
    public name: string;
    public tag: string = "Untagged";

    public gameObject: GameObject;

    /**
    * The local up vector for this transform.
    */
    public up: Vector3 = TransformDefaults.VectorUp.clone();
    
    /**
    * The local right vector for this transform.
    */
    public right: Vector3 = TransformDefaults.VectorRight.clone();
    
    /**
    * The local forward vector for this transform.
    */
    public forward: Vector3 = TransformDefaults.VectorForward.clone();

    public _parent: Transform;

    public group: Object3DExtended;

    /**
    * Get the world position of this transform.
    * @returns {Vector3} The transform world position.
    */
    public get position(): Vector3 {
        return this.group.worldPosition;
    }

    /**
    * Set the world position of this transform.
    * @param {Vector3} position - The world position to be applied to the transform.
    */
    public set position(position: Vector3) {
        this.group.worldPosition.copy(position);
    }
    
    /**
    * Get the local position of this transform.
    * @returns {Vector3} The transform local position.
    */
    public get localPosition(): Vector3 {
        return this.group.position;
    }
    
    /**
    * Set the local position of this transform.
    * @param {Vector3} localPosition - The local position to be applied to the transform.
    */
    public set localPosition(localPosition: Vector3) {
        this.group.position.copy(localPosition);
    }
    
    /**
    * Get the world rotation of this transform.
    * @returns {Quaternion} The transform world rotation.
    */
    public get rotation(): Quaternion {
        return this.group.worldRotation;
    }

    /**
    * Set the world rotation of this transform.
    * @param {Quaternion} rotation - The world rotation to be applied to the transform.
    */
    public set rotation(rotation: Quaternion) {
        this.group.worldRotation.copy(rotation);
    }

    /**
    * Get the local rotation of this transform.
    * @returns {Quaternion} The transform local rotation.
    */
    public get localRotation(): Quaternion {
        return this.group.quaternion;
    }
    
    /**
    * Set the local rotation of this transform.
    * @param {Quaternion} localRotation - The local rotation to be applied to the transform.
    */
    public set localRotation(localRotation: Quaternion) {
        this.group.quaternion.copy(localRotation);
    }
    
    /**
    * Get the world euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform world euler angles.
    */
    public get eulerAngles(): Vector3 {
        return this.group.worldEuler;
    }
    
    /**
    * Set the world euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} eulerAngles - The world euler angles to be applied to the transform.
    */
    public set eulerAngles(eulerAngles: Vector3) {
        this.group.worldEuler.copy(eulerAngles);
    }
    
    /**
    * Get the local euler angles of this transform.
    * The euler angles are in degrees.
    * @returns {Vector3} The transform local euler angles.
    */
    public get localEulerAngles(): Vector3 {
        return this.group.euler;
    }

    /**
    * Set the local euler angles of this transform.
    * The euler angles are in degrees.
    * @param {Vector3} localEulerAngles - The local euler angles to be applied to the transform.
    */
    public set localEulerAngles(localEulerAngles: Vector3) {
        this.group.euler.copy(localEulerAngles);
    }

    /**
    * Get the local scale of this transform.
    * @returns {Vector3} The transform local scale.
    */
    public get localScale(): Vector3 {
        return this.group.scale;
    }
   
    /**
    * Set the local scale of this transform.
    * @param {Vector3} localScale - The local scale to be applied to the transform.
    */
    public set localScale(localScale: Vector3) {
        this.group.scale.copy(localScale);
    }
    
    /**
    * Get the parent of this transform.
    * @returns {Transform} The transform parent.
    */
    public get parent(): Transform {
        return this._parent;
    }

    /**
    * Set the parent of this transform.
    * Position, rotation and scale of this transform will be affected by the parent.
    * @param {Transform} parent - Parent transform.
    */
    public set parent(parent: Transform | null) {
        if (parent == null) {
            this._parent = null;

            this.gameObject.scene.GetRenderer().scene.attach(this.group);

            return;
        }

        this._parent = parent;
        parent.group.attach(this.group);
    }

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;

        this.group = new Object3DExtended();
        this.group["transform"] = this;

        this.gameObject.scene.GetRenderer().scene.add(this.group);
    }

    public Translate(translation: Vector3) {
        this.group.translateX(translation.x);
        this.group.translateY(translation.y);
        this.group.translateZ(translation.z);
    }
    
    /**
     * Rotates transform around a point.
     * This method changes both the transform position and rotation.
     * 
     * @param {Vector3} point - Point in world space
     * @param {Vector3} axis - Rotation axis
     * @param {number} angle - Angle in degrees
     */
    public RotateAround(point: Vector3, axis: Vector3, angle: number ) {
        const q = new Quaternion();
        q.setFromAxisAngle( axis, angle * Mathf.Deg2Rad );

        this.group.applyQuaternion( q );

        this.group.position.sub( point );
        this.group.position.applyQuaternion( q );
        this.group.position.add( point );
    }

    public Tick() {
    }

    public FixedUpdate() {
    }

    public LateUpdate() {
    }

    public Update() {
        this.up.copy(TransformDefaults.VectorUp);
        this.up.applyQuaternion(this.rotation);

        this.right.copy(TransformDefaults.VectorRight);
        this.right.applyQuaternion(this.rotation);

        this.forward.copy(TransformDefaults.VectorForward);
        this.forward.applyQuaternion(this.rotation);
    }

    public Start() {
    }

    public Stop() {
    }

    public Destroy() {
        this.group.clear();
        this.gameObject.scene.GetRenderer().scene.remove(this.group);
    }
}