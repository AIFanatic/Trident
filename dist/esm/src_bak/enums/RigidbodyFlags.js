export var RigidBodyFlags;
(function (RigidBodyFlags) {
    RigidBodyFlags[RigidBodyFlags["None"] = 0] = "None";
    RigidBodyFlags[RigidBodyFlags["KINEMATIC"] = 1] = "KINEMATIC";
    RigidBodyFlags[RigidBodyFlags["USE_KINEMATIC_TARGET_FOR_SCENE_QUERIES"] = 2] = "USE_KINEMATIC_TARGET_FOR_SCENE_QUERIES";
    RigidBodyFlags[RigidBodyFlags["ENABLE_CCD"] = 4] = "ENABLE_CCD";
    RigidBodyFlags[RigidBodyFlags["ENABLE_CCD_FRICTION"] = 8] = "ENABLE_CCD_FRICTION";
    RigidBodyFlags[RigidBodyFlags["ENABLE_POSE_INTEGRATION_PREVIEW"] = 16] = "ENABLE_POSE_INTEGRATION_PREVIEW";
    RigidBodyFlags[RigidBodyFlags["ENABLE_SPECULATIVE_CCD"] = 32] = "ENABLE_SPECULATIVE_CCD";
    RigidBodyFlags[RigidBodyFlags["ENABLE_CCD_MAX_CONTACT_IMPULSE"] = 64] = "ENABLE_CCD_MAX_CONTACT_IMPULSE";
    RigidBodyFlags[RigidBodyFlags["RETAIN_ACCELERATIONS"] = 128] = "RETAIN_ACCELERATIONS";
})(RigidBodyFlags || (RigidBodyFlags = {}));
//# sourceMappingURL=RigidbodyFlags.js.map