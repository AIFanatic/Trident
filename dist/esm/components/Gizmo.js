var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "./Component";
import { LineRenderer } from "./LineRenderer";
var Gizmo = /** @class */ (function (_super) {
    __extends(Gizmo, _super);
    function Gizmo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 20;
        return _this;
    }
    Gizmo.prototype.OnEnable = function () {
        this.upLine = this.gameObject.AddComponent(LineRenderer);
        this.rightLine = this.gameObject.AddComponent(LineRenderer);
        this.forwardLine = this.gameObject.AddComponent(LineRenderer);
        this.upLine.color = 0x00ff00;
        this.rightLine.color = 0x0000ff;
        this.forwardLine.color = 0xff0000;
    };
    Gizmo.prototype.Start = function () {
        if (!this.target) {
            console.error("Target is not set");
        }
    };
    Gizmo.prototype.Update = function () {
        this.upLine.from.copy(this.target.position);
        this.upLine.to.copy(this.upLine.from).add(this.target.up.clone().multiplyScalar(this.length));
        this.rightLine.from.copy(this.target.position);
        this.rightLine.to.copy(this.rightLine.from).add(this.target.right.clone().multiplyScalar(this.length));
        this.forwardLine.from.copy(this.target.position);
        this.forwardLine.to.copy(this.forwardLine.from).add(this.target.forward.clone().multiplyScalar(this.length));
    };
    return Gizmo;
}(Component));
export { Gizmo };
//# sourceMappingURL=Gizmo.js.map