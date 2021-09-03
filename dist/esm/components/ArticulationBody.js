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
import PhysX from "trident-physx-js-webidl";
import { Component } from "./Component";
var ArticulationBody = /** @class */ (function (_super) {
    __extends(ArticulationBody, _super);
    function ArticulationBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArticulationBody.prototype, "immovable", {
        get: function () {
            var flags = this.articulation.getArticulationFlags();
            // @ts-ignore
            return flags.isSet(PhysX.eFIX_BASE);
        },
        set: function (immovable) {
            // @ts-ignore
            // this.articulation.setArticulationFlag(PhysX.eFIX_BASE, immovable);
        },
        enumerable: false,
        configurable: true
    });
    ArticulationBody.prototype.OnEnable = function () {
        var _this = this;
        this.physics = this.gameObject.scene.GetPhysics().GetPhysics();
        this.physicsScene = this.gameObject.scene.GetPhysics().GetScene();
        var position = new PhysX.PxVec3(this.transform.position.x, this.transform.position.y, this.transform.position.z);
        var rotation = new PhysX.PxQuat(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z, this.transform.rotation.w);
        var pose = new PhysX.PxTransform(position, rotation);
        if (this.transform.parent) {
            var parentArticulation = this.transform.parent.gameObject.GetComponent(ArticulationBody);
            if (parentArticulation) {
                this.articulation = parentArticulation.articulation;
                this.link = this.articulation.createLink(parentArticulation.link, pose);
                console.log("adding child", this.link);
            }
        }
        else {
            this.articulation = this.physics.createArticulationReducedCoordinate();
            this.link = this.articulation.createLink(null, pose);
            this.physicsScene.addArticulation(this.articulation);
            console.log("adding parent", this.link);
        }
        //         PxArticulationJointReducedCoordinate* joint = static_cast<PxArticulationJointReducedCoordinate*>(link->getInboundJoint());
        // joint->setParentPose(parentAttachment);
        // joint->setChildPose(childAttachment);
        var inboundJoint = this.link.getInboundJoint();
        // @ts-ignore
        if (inboundJoint.ptr != 0) {
            // Need to cast to correct type
            // @ts-ignore
            this.joint = PhysX.castObject(inboundJoint, PhysX.PxArticulationJointReducedCoordinate);
            console.log(this.joint);
            // @ts-ignore
            this.joint.setJointType(PhysX.eREVOLUTE);
        }
        setInterval(function () {
            if (_this.link) {
                var pose_1 = _this.link.getGlobalPose();
                console.log(pose_1.p.x, pose_1.p.y, pose_1.p.z);
            }
        }, 1000);
    };
    ArticulationBody.prototype.FixedUpdate = function () {
        var pose = this.link.getGlobalPose();
        this.transform.position.set(pose.p.x, pose.p.y, pose.p.z);
        this.transform.rotation.set(pose.q.x, pose.q.y, pose.q.z, pose.q.w);
    };
    return ArticulationBody;
}(Component));
export { ArticulationBody };
//# sourceMappingURL=ArticulationBody.js.map