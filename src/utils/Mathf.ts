import { Quaternion, Vector3 } from "three";

export class Mathf {
    static Deg2Rad = (Math.PI * 2) / 360;
    static Rad2Deg = 360 / (Math.PI * 2);
    static Epsilon = 0.000001;

    static QuaternionDot(left: Quaternion, right: Quaternion): number {
        return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
    }

    static QuaternionDifferent(quat1: Quaternion, quat2: Quaternion, epsilon: number): boolean {
        if (Math.abs(quat1.x - quat2.x) > epsilon) return true;
        if (Math.abs(quat1.y - quat2.y) > epsilon) return true;
        if (Math.abs(quat1.z - quat2.z) > epsilon) return true;
        if (Math.abs(quat1.w - quat2.w) > epsilon) return true;
    }
}