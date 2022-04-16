var JointDriver = /** @class */ (function () {
    function JointDriver(joint, axis) {
        this._stiffness = 0;
        this._damping = 0;
        this._forceLimit = 1000;
        this._lowerLimit = 0;
        this._upperLimit = 0;
        this.joint = joint;
        this.axis = axis;
    }
    Object.defineProperty(JointDriver.prototype, "lowerLimit", {
        get: function () {
            return this._lowerLimit;
        },
        set: function (lowerLimit) {
            this.lowerLimit = lowerLimit;
            // @ts-ignore
            this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "upperLimit", {
        get: function () {
            return this._upperLimit;
        },
        set: function (upperLimit) {
            this._upperLimit = upperLimit;
            // @ts-ignore
            this.joint.setLimit(this.axis, this.lowerLimit, this.upperLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "stiffness", {
        get: function () {
            return this._stiffness;
        },
        set: function (stiffness) {
            this._stiffness = stiffness;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "damping", {
        get: function () {
            return this._damping;
        },
        set: function (damping) {
            this._damping = damping;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "forceLimit", {
        get: function () {
            return this._forceLimit;
        },
        set: function (forceLimit) {
            this._forceLimit = forceLimit;
            // @ts-ignore
            this.joint.setDrive(this.axis, this._stiffness, this._damping, this._forceLimit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "target", {
        get: function () {
            // @ts-ignore
            return this.joint.getDriveTarget(this.axis);
        },
        set: function (target) {
            // @ts-ignore
            this.joint.setDriveTarget(this.axis, target);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JointDriver.prototype, "targetVelocity", {
        get: function () {
            // @ts-ignore
            return this.joint.getDriveVelocity(this.axis);
        },
        set: function (targetVelocity) {
            // @ts-ignore
            this.joint.setDriveVelocity(this.axis, targetVelocity);
        },
        enumerable: false,
        configurable: true
    });
    return JointDriver;
}());
export { JointDriver };
//# sourceMappingURL=JointDriver.js.map