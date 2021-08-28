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
import { Collider } from "./Collider";
import { Rigidbody } from './Rigidbody';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
var CapsuleCollider = /** @class */ (function (_super) {
    __extends(CapsuleCollider, _super);
    function CapsuleCollider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CapsuleCollider.prototype.OnEnable = function () {
        var physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        var physxScene = this.gameObject.scene.GetPhysics().GetScene();
        var rigidbodyComponent = this.gameObject.GetComponent(Rigidbody);
        var shape = PhysicsShape.CreateCapsule(physxPhysics, this.transform.localScale.x, this.transform.localScale.y + 1);
        if (rigidbodyComponent) {
            this.body = rigidbodyComponent.body;
            this.body.UpdateShape(shape);
        }
        else {
            var geometry = shape.getGeometry().capsule();
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
    return CapsuleCollider;
}(Collider));
export { CapsuleCollider };
//# sourceMappingURL=CapsuleCollider.js.map