import { GameObject } from "./components";
/**
 * The various primitives that can be created using the gameObject.CreatePrimitive function.
 * @noInheritDoc
 */
export declare class PrimitiveType {
    /**
     * A cube primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    static Cube(gameObject: GameObject): void;
    /**
     * A capsule primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    static Capsule(gameObject: GameObject): void;
    /**
     * A plane primitive, it consists of a MeshFilter, MeshRenderer and PlaneCollider.
     */
    static Plane(gameObject: GameObject): void;
    /**
     * A sphere primitive, it consists of a MeshFilter, MeshRenderer and SphereCollider.
     */
    static Sphere(gameObject: GameObject): void;
    /**
     * A cylinder primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    static Cylinder(gameObject: GameObject): void;
}
