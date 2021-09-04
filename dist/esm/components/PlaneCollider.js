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
import { Collider } from "./Collider";
import { Rigidbody } from './Rigidbody';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
/**
 * Adds a static plane collider to the GameObject.
 *
 * Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.
 *
 * @noInheritDoc
 */
var PlaneCollider = /** @class */ (function (_super) {
    __extends(PlaneCollider, _super);
    function PlaneCollider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaneCollider.prototype.OnEnable = function () {
        var physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        var physxScene = this.gameObject.scene.GetPhysics().GetScene();
        var rigidbodyComponent = this.gameObject.GetComponent(Rigidbody);
        var shape = PhysicsShape.CreatePlane(physxPhysics, this.transform.localScale.x, this.transform.localScale.z);
        if (rigidbodyComponent) {
            this.body = rigidbodyComponent.body;
            this.body.UpdateShape(shape);
        }
        else {
            var geometry = shape.getGeometry().box();
            var transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
            var rigidbody = physxPhysics.createRigidStatic(transform);
            var physicsBody = {
                rigidbody: rigidbody,
                geometry: geometry,
                shape: shape
            };
            this.body = new PhysicsRigidbody(physxPhysics, physxScene, physicsBody);
        }
    };
    // Hacky, but plane is a box therefore PhysicsScale will treat it as a box and forcing Y scale
    PlaneCollider.prototype.Update = function () {
        this.transform.localScale.y = 0.01;
    };
    return PlaneCollider;
}(Collider));
export { PlaneCollider };
//# sourceMappingURL=PlaneCollider.js.map