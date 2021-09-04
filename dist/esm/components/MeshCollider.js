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
    Object.defineProperty(MeshCollider.prototype, "isConvex", {
        get: function () {
            return this._isConvex;
        },
        set: function (isConvex) {
            if (isConvex) {
                this.CreateConvexCollider();
            }
            else {
                this.CreateTrimeshCollider();
            }
            this._isConvex = isConvex;
        },
        enumerable: false,
        configurable: true
    });
    MeshCollider.prototype.OnEnable = function () {
        this.physxPhysics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physxScene = this.gameObject.scene.GetPhysics().GetScene();
        this.physxCooking = this.gameObject.scene.GetPhysics().GetCooking();
        var rigidbodyComponent = this.gameObject.GetComponent(Rigidbody);
        if (rigidbodyComponent) {
            var shape = this.CreateTrimeshShape();
            this.body = rigidbodyComponent.body;
            this.body.UpdateShape(shape);
        }
        else {
            this.CreateTrimeshCollider();
        }
    };
    MeshCollider.prototype.GetGeometryFromMeshFilter = function () {
        var meshFilter = this.gameObject.GetComponent(MeshFilter);
        var mesh = meshFilter.mesh;
        return mesh;
    };
    MeshCollider.prototype.CreateConvexShape = function () {
        var bufferGeometry = this.GetGeometryFromMeshFilter();
        if (bufferGeometry) {
            var vertices = bufferGeometry.getAttribute("position").array;
            var shape = PhysicsShape.CreateConvex(this.physxPhysics, this.physxCooking, vertices);
            return shape;
        }
        return null;
    };
    MeshCollider.prototype.CreateConvexCollider = function () {
        var shape = this.CreateConvexShape();
        if (shape) {
            if (this.body) {
                this.body.UpdateShape(shape);
                return;
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
        }
    };
    MeshCollider.prototype.CreateTrimeshShape = function () {
        var bufferGeometry = this.GetGeometryFromMeshFilter();
        if (bufferGeometry) {
            var indexedBufferGeometry = bufferGeometry.index !== null ? bufferGeometry : ConvertGeometryToIndexed(bufferGeometry, TrianglesModeEnum.TriangleStripDrawMode);
            var vertices = indexedBufferGeometry.getAttribute("position").array;
            var indices = indexedBufferGeometry.getIndex().array;
            var shape = PhysicsShape.CreateTrimesh(this.physxPhysics, this.physxCooking, vertices, indices);
            return shape;
        }
        return null;
    };
    MeshCollider.prototype.CreateTrimeshCollider = function () {
        var shape = this.CreateTrimeshShape();
        if (shape) {
            if (this.body) {
                this.body.UpdateShape(shape);
                return;
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
        }
    };
    return MeshCollider;
}(Collider));
export { MeshCollider };
//# sourceMappingURL=MeshCollider.js.map