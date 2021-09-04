var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";
import { Component } from "./Component";
/**
 * Creates a line from point A (from) to point B (to).
 *
 * @noInheritDoc
 */
var LineRenderer = /** @class */ (function (_super) {
    __extends(LineRenderer, _super);
    function LineRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.from = new Vector3();
        _this.to = new Vector3();
        _this.color = 0xffffff;
        _this.previousFrom = new Vector3();
        _this.previousTo = new Vector3();
        return _this;
    }
    LineRenderer.prototype.OnEnable = function () {
        this.material = new LineBasicMaterial({ color: this.color });
        this.geometry = new BufferGeometry().setFromPoints([this.from, this.to]);
        var line = new Line(this.geometry, this.material);
        this.transform.group.add(line);
        this.line = line;
    };
    LineRenderer.prototype.Update = function () {
        if (this.material.color.getHex() != this.color) {
            this.material.color.setHex(this.color);
        }
        if (this.previousFrom.distanceToSquared(this.from) > Number.EPSILON
            || this.previousTo.distanceToSquared(this.to) > Number.EPSILON) {
            this.geometry.setFromPoints([this.from, this.to]);
            this.previousFrom.copy(this.from);
            this.previousTo.copy(this.to);
            this.geometry.attributes.position.needsUpdate = true;
        }
    };
    LineRenderer.prototype.Destroy = function () {
        if (this.line) {
            this.transform.group.remove(this.line);
        }
        this.gameObject.RemoveComponent(this);
    };
    return LineRenderer;
}(Component));
export { LineRenderer };
//# sourceMappingURL=LineRenderer.js.map