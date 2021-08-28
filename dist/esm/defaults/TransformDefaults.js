import { Vector3, Quaternion } from 'three';
var TransformDefaults = /** @class */ (function () {
    function TransformDefaults() {
    }
    TransformDefaults.VectorUp = new Vector3(0, 1, 0);
    TransformDefaults.VectorRight = new Vector3(0, 0, 1);
    TransformDefaults.VectorForward = new Vector3(1, 0, 0);
    TransformDefaults.Position = new Vector3();
    TransformDefaults.Rotation = new Quaternion();
    TransformDefaults.Scale = new Vector3(1, 1, 1);
    return TransformDefaults;
}());
export { TransformDefaults };
//# sourceMappingURL=TransformDefaults.js.map