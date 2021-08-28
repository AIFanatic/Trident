import { Quaternion } from "three";
export declare class Mathf {
    static Deg2Rad: number;
    static Rad2Deg: number;
    static Epsilon: number;
    static QuaternionDot(left: Quaternion, right: Quaternion): number;
    static QuaternionDifferent(quat1: Quaternion, quat2: Quaternion, epsilon: number): boolean;
}
