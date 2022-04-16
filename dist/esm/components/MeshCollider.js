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
import { MeshFilter } from './MeshFilter';
import { PhysicsRigidbody } from '../physics/PhysicsRigidbody';
import { PhysicsShape } from "../physics/PhysicsShape";
import { PhysicsUtils } from "../physics/PhysicsUtils";
import { ConvertGeometryToIndexed, TrianglesModeEnum } from '../utils/ConvertGeometryToIndexed';
/**
 * Adds a static mesh collider to the GameObject.
 *
 * A MeshCollider can either be convex or a trimesh.
 *
 * @noInheritDoc
 */
var MeshCollider = /** @class */ (function (_super) {
    __extends(MeshCollider, _super);
    function MeshCollider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeshCollider.prototype.Awake = function () {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        this.physxCooking = this.gameObject.scene.GetPhysics().GetCooking();
        this.CreateCollider();
    };
    MeshCollider.prototype.MeshFilterModelChanged = function (mesh) {
        this.CreateCollider();
    };
    MeshCollider.prototype.CreateCollider = function () {
        var meshFilter = this.gameObject.GetComponent(MeshFilter);
        var bufferGeometry = meshFilter.mesh;
        if (!bufferGeometry)
            return;
        var createdCollider = false;
        if (this.isConvex) {
            createdCollider = this.CreateConvexCollider(bufferGeometry);
        }
        else {
            createdCollider = this.CreateTrimeshCollider(bufferGeometry);
        }
        if (createdCollider) {
            this.gameObject.BroadcastMessage("CreatedCollider", this.body);
        }
    };
    MeshCollider.prototype.CreateConvexCollider = function (bufferGeometry) {
        var vertices = bufferGeometry.getAttribute("position").array;
        var shape = PhysicsShape.CreateConvex(this.physxPhysics, this.physxCooking, vertices);
        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }
        var geometry = shape.getGeometry().convexMesh();
        var transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        var rigidbody = this.physxPhysics.createRigidStatic(transform);
        var physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        return true;
    };
    MeshCollider.prototype.CreateTrimeshCollider = function (bufferGeometry) {
        var indexedBufferGeometry = bufferGeometry.index !== null ? bufferGeometry : ConvertGeometryToIndexed(bufferGeometry, TrianglesModeEnum.TriangleStripDrawMode);
        var vertices = indexedBufferGeometry.getAttribute("position").array;
        var indices = indexedBufferGeometry.getIndex().array;
        var shape = PhysicsShape.CreateTrimesh(this.physxPhysics, this.physxCooking, vertices, indices);
        if (this.body) {
            this.body.UpdateShape(shape);
            return true;
        }
        var geometry = shape.getGeometry().triangleMesh();
        var transform = PhysicsUtils.ToTransform(this.transform.position, this.transform.rotation);
        var rigidbody = this.physxPhysics.createRigidStatic(transform);
        var physicsBody = {
            rigidbody: rigidbody,
            geometry: geometry,
            shape: shape
        };
        this.body = new PhysicsRigidbody(this.physxPhysics, this.physxScene, physicsBody);
        return true;
    };
    return MeshCollider;
}(Collider));
export { MeshCollider };
//# sourceMappingURL=MeshCollider.js.map