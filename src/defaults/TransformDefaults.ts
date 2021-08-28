import { Vector3, Quaternion } from 'three'

export class TransformDefaults {
    public static VectorUp: Vector3 = new Vector3(0, 1, 0);
    public static VectorRight: Vector3 = new Vector3(0, 0, 1);
    public static VectorForward: Vector3 = new Vector3(1, 0, 0);

    public static Position: Vector3 = new Vector3();
    public static Rotation: Quaternion = new Quaternion();
    public static Scale: Vector3 = new Vector3(1, 1, 1);
}