import { PhysX } from 'trident-physx-js-webidl';
import { Quaternion, Vector3 } from 'three';

import { Component } from "./Component";
import { Collider } from './Collider';

import { PhysicsRigidbody } from "../physics/PhysicsRigidbody";
import { PhysicsBody } from "../physics/PhysicsBody";
import { PhysicsShape } from '../physics/PhysicsShape';
import { PhysicsUtils } from '../physics/PhysicsUtils';
import { ForceMode } from '../enums/ForceMode';
import { RigidbodyConstraints } from '../enums/RigidbodyConstraints';
import { LayerMask } from '../enums/LayerMask';
import { Mathf } from '../utils/Mathf';
import { SerializeField } from '../utils/SerializeField';
import { GameObject } from './GameObject';
import { Transform } from './Transform';
import { Runtime } from '../Runtime';

/**
 * RigidBody adds physics properties to an object.
 * 
 * When added the GameObject Transform will be controlled by the RigidBody component.
 * 
 * Rigid bodies obbey physics such as gravity collisions etc, therefore it should only by controlled
 * with forces, although setting the position, rotation, scale directly works.
 * 
 * @noInheritDoc
 */
export class Rigidbody extends Component {
    private physxPhysics: PhysX.PxPhysics;
    private physxScene: PhysX.PxScene;

    public body: PhysicsRigidbody;
    private rigidbody: PhysX.PxRigidDynamic;

    private position: Vector3 = new Vector3();
    private rotation: Quaternion = new Quaternion();
    private localScale: Vector3 = new Vector3();

    private previousLayer: LayerMask = LayerMask.LAYER0;

    /**
     * Set or get the kinematic propery of the rigid body.
     * Kinematic rigid bodies will not obey physics
     *
     * @returns True if the object is kinematic, false otherwise
     */
    @SerializeField
    public get isKinematic(): boolean {
        const flags = this.rigidbody.getRigidBodyFlags();
        return flags.isSet(PhysX.PxRigidBodyFlagEnum.KINEMATIC.valueOf());
    }

    public set isKinematic(kinematic: boolean) {
        this.rigidbody.setRigidBodyFlag(PhysX.PxRigidBodyFlagEnum.KINEMATIC.valueOf(), kinematic);
    }

    @SerializeField
    public get mass(): number {
        return this.rigidbody.getMass();
    }

    public set mass(mass: number) {
        this.rigidbody.setMass(mass);
    }

    public get velocity(): Vector3 {
        const velocity = this.rigidbody.getLinearVelocity();
        return new Vector3(velocity.x, velocity.y, velocity.z);
    }

    public set velocity(velocity: Vector3) {
        const pxVec3 = new PhysX.PxVec3(velocity.x, velocity.y, velocity.z);
        this.rigidbody.setLinearVelocity(pxVec3);
    }

    public get angularVelocity(): Vector3 {
        const angularVelocity = this.rigidbody.getAngularVelocity();
        return new Vector3(angularVelocity.x, angularVelocity.y, angularVelocity.z);
    }

    public set angularVelocity(angularVelocity: Vector3) {
        const pxVec3 = new PhysX.PxVec3(angularVelocity.x, angularVelocity.y, angularVelocity.z);
        this.rigidbody.setAngularVelocity(pxVec3);
    }
    @SerializeField
    public get drag(): number {
        return this.rigidbody.getLinearDamping();
    }

    public set drag(drag: number) {
        this.rigidbody.setLinearDamping(drag);
    }

    @SerializeField
    public get angularDrag(): number {
        return this.rigidbody.getAngularDamping();
    }

    public set angularDrag(angularDrag: number) {
        this.rigidbody.setAngularDamping(angularDrag);
    }

    // public get freezeRotation(): Vector3 {
    //     const vec = this.body.ammo.getAngularFactor();

    //     return new Vector3(vec.x(), vec.y(), vec.z());
    // }

    // public set freezeRotation(vector: Vector3) {
    //     const vec = new Ammo.btVector3(vector.x, vector.y, vector.z);
    //     this.body.ammo.setAngularFactor(vec);
    // }

    // public get constraints(): RigidbodyConstraints {
    //     return this.rigidbody.getRigidDynamicLockFlags();
    // }

    public set constraints(constraint: RigidbodyConstraints) {
        if (constraint == RigidbodyConstraints.FreezePosition) {
            constraint = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
        }
        else if (constraint == RigidbodyConstraints.FreezeRotation) {
            constraint = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ;
        }
        else if (constraint == RigidbodyConstraints.FreezeAll) {
            constraint = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ | 
            RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ;
        }

        const flags = new PhysX.PxRigidDynamicLockFlags(constraint);
        this.rigidbody.setRigidDynamicLockFlags(flags);
        this.rigidbody.wakeUp();
    }

    public AddForce(force: Vector3, mode: ForceMode = ForceMode.FORCE) {
        const pxVec3 = new PhysX.PxVec3(force.x, force.y, force.z);
        this.rigidbody.addForce(pxVec3, mode.valueOf());
    }

    // public AddRelativeForce(force: Vector3) {
    //     this.body.applyCentralLocalForce(force.x, force.y , force.z);
    // }

    public AddTorque(torque: Vector3, mode: ForceMode = ForceMode.FORCE) {
        const pxVec3 = new PhysX.PxVec3(torque.x, torque.y, torque.z);
        this.rigidbody.addTorque(pxVec3, mode.valueOf());
    }

    // public AddRelativeTorque(torque: Vector3) {
    //     this.body.applyLocalTorque(torque.x, torque.y, torque.z);
    // }

    public MovePosition(position: Vector3) {
        const dt = 1/60; // TODO: Should be fixedTimestep instead
        const pNew = position.clone(); //our new desired position
        const p = this.transform.position.clone(); //our current position
        const v = this.velocity.clone(); //our current velocity
        const force = pNew.sub(p).sub(v.multiplyScalar(dt)).divideScalar(dt).multiplyScalar(this.mass);
        
        this.velocity = new Vector3(0, 0, 0);
        this.AddForce(force);
    }

    constructor(gameObject: GameObject, transform: Transform) {
        super(gameObject, transform);

        this.physxPhysics = Runtime.Physics.GetPhysics();
        this.physxScene = gameObject.scene.physicsScene;

        const collider = this.gameObject.GetComponent(Collider) as Collider;

        if (collider && collider.body) {
            this.body = collider.body;
            this.body.ConvertToDynamic();
            this.rigidbody = this.body.rigidbody as PhysX.PxRigidDynamic;
        }
        else {
            const shape = PhysicsShape.CreateBox(this.physxPhysics, new Vector3(1,1,1));
            const geometry = shape.getGeometry().box();
            const physxTransform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
            const rigidbody = this.physxPhysics.createRigidDynamic(physxTransform);
    
            const physicsBody: PhysicsBody = {
                rigidbody: rigidbody,
                geometry: geometry,
                shape: shape
            };
            
            this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
            this.rigidbody = rigidbody;
        }
    }

    public CreatedCollider(body: PhysicsRigidbody) {
        if (this.body) {
            this.body.rigidbody.detachShape(this.body.shape);
            this.body.shape.release();
            this.body.rigidbody.release();
            this.body = null;
        }
        
        this.body = body;
        this.body.ConvertToDynamic();
        this.body.UpdatePose(this.transform.position, this.transform.rotation, this.transform.localScale);
        this.rigidbody = this.body.rigidbody as PhysX.PxRigidDynamic;
    }
    
    private HandleTransformChanges() {
        if (this.transform.position.distanceToSquared(this.position) > Number.EPSILON) {
            this.body.UpdatePosition(this.transform.position);
        }
        if (Mathf.QuaternionDifferent(this.transform.rotation, this.rotation, Mathf.Epsilon)) {
            this.body.UpdateRotation(this.transform.rotation);
        }
        if (this.transform.localScale.distanceToSquared(this.localScale) > Number.EPSILON) {
            this.body.UpdateScale(this.transform.localScale);
        }
    }

    public FixedUpdate() {
        if (!this.body) return;

        this.HandleTransformChanges();

        const body = this.body.rigidbody as PhysX.PxRigidDynamic;
        if (body.isSleeping()) return;
        
        const transform = body.getGlobalPose();

        this.transform.position.set(transform.p.x, transform.p.y, transform.p.z);
        this.transform.rotation.set(transform.q.x, transform.q.y, transform.q.z, transform.q.w);

        this.position.copy(this.transform.position);
        this.rotation.copy(this.transform.rotation);
        this.localScale.set(this.transform.localScale.x, this.transform.localScale.y, this.transform.localScale.z);

        if (this.previousLayer != this.gameObject.layer) {
            const filterData = new PhysX.PxFilterData();
            filterData.word2 = this.gameObject.layer;
            this.body.shape.setQueryFilterData(filterData);
            
            this.previousLayer = this.gameObject.layer;
        }
    }

    public Destroy() {
        const collider = this.gameObject.GetComponent(Collider) as Collider;
        if (collider && collider.body && collider.body.rigidbody && collider.body.rigidbody.getNbShapes() > 0) {
            this.body = collider.body;
            this.body.ConvertToStatic();
        }
        // else {
        //     if (this.body && this.body.rigidbody) {
        //         console.log(this.body.rigidbody)
        //         console.log(this.body.shape)
        //         this.body.rigidbody.detachShape(this.body.shape);
        //         // this.body.shape.release();
        //         // this.body.rigidbody.release();
        //         // this.body = null;
        //     }
        // }

        this.gameObject.RemoveComponent(this);
    }
}