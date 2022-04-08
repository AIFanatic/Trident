import { BoxGeometry, CylinderGeometry, Mesh, PlaneGeometry, SphereGeometry } from "three";
import { GameObject, BoxCollider, MeshFilter, MeshRenderer, CapsuleCollider, PlaneCollider, SphereCollider } from "./components";
import { CapsuleBufferGeometry } from "./utils/CapsuleGeometry";

/**
 * The various primitives that can be created using the gameObject.CreatePrimitive function.
 * @noInheritDoc
 */
export class PrimitiveType {
    /**
     * A cube primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    public static Cube(gameObject: GameObject) {
        const geometry = new BoxGeometry(
            gameObject.transform.localScale.x,
            gameObject.transform.localScale.y,
            gameObject.transform.localScale.z
        );

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(BoxCollider) as BoxCollider;
    }

    /**
     * A capsule primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    public static Capsule(gameObject: GameObject) {
        const geometry = CapsuleBufferGeometry(1, 1, 2, 16, 1, 8, 8, 0, 2*Math.PI);
        geometry.rotateZ(Math.PI / 2);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;

        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(CapsuleCollider) as CapsuleCollider;
    }

    /**
     * A plane primitive, it consists of a MeshFilter, MeshRenderer and PlaneCollider.
     */
    public static Plane(gameObject: GameObject) {
        const geometry = new PlaneGeometry(
            gameObject.transform.localScale.x,
            gameObject.transform.localScale.z,
        );

        geometry.rotateX(-Math.PI/2);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;

        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(PlaneCollider) as PlaneCollider;
    }

    /**
     * A sphere primitive, it consists of a MeshFilter, MeshRenderer and SphereCollider.
     */
    public static Sphere(gameObject: GameObject) {
        const geometry = new SphereGeometry(gameObject.transform.localScale.length(), 32, 32 );

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(SphereCollider) as SphereCollider;
    }

    /**
     * A cylinder primitive, it consists of a MeshFilter, MeshRenderer and CapsuleCollider.
     */
    public static Cylinder(gameObject: GameObject) {
        const geometry = new CylinderGeometry(
            gameObject.transform.localScale.length(), 
            gameObject.transform.localScale.length(),
            gameObject.transform.localScale.y, 32, 32);

        const meshFilter = gameObject.AddComponent(MeshFilter) as MeshFilter;
        meshFilter.mesh = geometry;
    
        const meshRenderer = gameObject.AddComponent(MeshRenderer) as MeshRenderer;
        const colllider = gameObject.AddComponent(CapsuleCollider) as CapsuleCollider;
    }
}