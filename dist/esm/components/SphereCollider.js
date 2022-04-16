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
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
/**
 * Adds a static sphere collider to the GameObject.
 *
 * @noInheritDoc
 */
var SphereCollider = /** @class */ (function (_super) {
    __extends(SphereCollider, _super);
    function SphereCollider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SphereCollider.prototype.Awake = function () {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        var shape = PhysicsShape.CreateSphere(this.physxPhysics, this.transform.localScale.length());
        var geometry = shape.getGeometry().sphere();
        var transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        var rigidbody = this.physxPhysics.createRigidStatic(transform);
        var physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        this.gameObject.BroadcastMessage("CreatedCollider", this.body);
    };
    return SphereCollider;
}(Collider));
export { SphereCollider };
//# sourceMappingURL=SphereCollider.js.map