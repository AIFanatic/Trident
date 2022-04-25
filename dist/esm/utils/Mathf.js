export class Mathf {
    static QuaternionDot(left, right) {
        return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
    }
    static QuaternionDifferent(quat1, quat2, epsilon) {
        if (Math.abs(quat1.x - quat2.x) > epsilon)
            return true;
        if (Math.abs(quat1.y - quat2.y) > epsilon)
            return true;
        if (Math.abs(quat1.z - quat2.z) > epsilon)
            return true;
        if (Math.abs(quat1.w - quat2.w) > epsilon)
            return true;
    }
}
Mathf.Deg2Rad = (Math.PI * 2) / 360;
Mathf.Rad2Deg = 360 / (Math.PI * 2);
Mathf.Epsilon = 0.000001;
//# sourceMappingURL=Mathf.js.map