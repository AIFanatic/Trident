import { Quaternion, Vector3 } from "three";
import { Component } from "./Component";
import { BodyType } from "../enums/BodyType";

import PhysX from "trident-physx-js-webidl";
import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
import { LayerMask } from "../enums/LayerMask";
import { Mathf } from "../utils/Mathf";

/**
 * Base collider class that all colliders extend.
 * 
 * @noInheritDoc
 */
export class Collider extends Component {
    public body: PhysicsRigidbody;

    protected physxPhysics: PhysX.PxPhysics;
    protected physxScene: PhysX.PxScene;

    private position: Vector3 = new Vector3();
    private rotation: Quaternion = new Quaternion();
    private localScale: Vector3 = new Vector3();

    private previousLayer: number = LayerMask.LAYER0;

    // public get friction(): number {
    //     return this.body.ammo.getFriction();
    // }

    // public set friction(friction: number) {
    //     this.body.ammo.setFriction(friction);
    // }

    // public get bounciness(): number {
    //     return this.body.ammo.getRestitution();
    // }

    // public set bounciness(bounciness: number) {
    //     this.body.ammo.setRestitution(bounciness);
    // }

    // public get isTrigger(): boolean {
    //     return this.body.ammo.getCollisionFlags() == BodyType.STATIC_GHOST;
    // }

    // public set isTrigger(_isTrigger: boolean) {
    //     this.body.ammo.setCollisionFlags(_isTrigger == true ? BodyType.STATIC_GHOST : BodyType.KINEMATIC);
    // }

    public Start() {
        if (this.body) {
            this.HandleTransformChanges();
        }
    }

    private HandleTransformChanges() {
        if (this.transform.position.distanceToSquared(this.position) > Number.EPSILON) this.body.UpdatePosition(this.transform.position);
        if (Mathf.QuaternionDifferent(this.transform.rotation, this.rotation, Mathf.Epsilon)) this.body.UpdateRotation(this.transform.rotation);
        if (Math.abs(this.transform.rotation.angleTo(this.rotation)) > 0.00001) this.body.UpdateRotation(this.transform.rotation);
        if (this.transform.localScale.distanceToSquared(this.localScale) > Number.EPSILON) this.body.UpdateScale(this.transform.localScale);
    }

    public FixedUpdate() {
        if (this.body && this.body.rigidbody instanceof PhysX.PxRigidStatic) {
            this.HandleTransformChanges();

            this.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            this.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
            this.localScale.set(this.transform.localScale.x, this.transform.localScale.y, this.transform.localScale.z);

            if (this.previousLayer != this.gameObject.layer) {
                const filterData = new PhysX.PxFilterData();
                filterData.word2 = this.gameObject.layer;
                this.body.shape.setQueryFilterData(filterData);
                
                this.previousLayer = this.gameObject.layer;
            }
        }
    }

    public Destroy() {
        if (this.body && this.body.rigidbody) {
            this.body.rigidbody.detachShape(this.body.shape);
            this.body.shape.release();
            this.body.rigidbody.release();
            this.body = null;
        }
        this.gameObject.RemoveComponent(this);
    }
}