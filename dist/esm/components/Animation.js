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
import { AnimationMixer, Clock } from "three";
import { Component } from "./Component";
import { MeshRenderer } from "./MeshRenderer";
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.OnEnable = function () {
        this.animations = new Map();
        this.clock = new Clock(true);
        this.OnMeshChanged();
    };
    Animation.prototype.OnMeshChanged = function () {
        var meshFilter = this.gameObject.GetComponent(MeshRenderer);
        var mesh = meshFilter.mesh;
        if (mesh) {
            this.mixer = new AnimationMixer(mesh);
        }
    };
    Animation.prototype.AddClip = function (clip, name) {
        this.animations.set(name, clip);
    };
    Animation.prototype.Play = function (name) {
        if (!this.animations.has(name)) {
            console.warn("Tried to play non existing animation");
            return;
        }
        if (this.action) {
            this.action.stop();
        }
        this.action = this.mixer.clipAction(this.animations.get(name));
        this.action.play();
    };
    Animation.prototype.Stop = function () {
        this.action.stop();
        this.action = null;
    };
    Animation.prototype.Update = function () {
        if (this.mixer && this.action) {
            this.mixer.update(this.clock.getDelta());
        }
    };
    return Animation;
}(Component));
export { Animation };
//# sourceMappingURL=Animation.js.map