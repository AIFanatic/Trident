import PhysX from 'trident-physx-js-webidl';
import { PhysicsRaycast } from './physics/PhysicsRaycast';
var Physics = /** @class */ (function () {
    function Physics(scene, config, loadedCb) {
        this.OnLoaded = function () { };
        this.scene = scene;
        this.config = config;
        this.InitPhysX(loadedCb);
    }
    Physics.prototype.InitPhysX = function (loadedCb) {
        var _this = this;
        fetch(this.config.physxWasmURL).then(function (response) {
            response.arrayBuffer()
                .then(function (bytes) {
                PhysX['wasmBinary'] = bytes;
                // If locateFile is used it loads the wasm 3 times
                // PhysX['locateFile'] = (s) => {
                //     return this.config.physxWasmURL
                // };
                PhysX()
                    .then(function (ret) {
                    _this.physx = ret;
                    // Setup
                    // TODO: Dunno why PxTopLevelFunctions doesnt work without .prototype
                    // @ts-ignore
                    var version = PhysX.PxTopLevelFunctions.prototype.PHYSICS_VERSION;
                    var defaultErrorCallback = new PhysX.PxDefaultErrorCallback();
                    var allocator = new PhysX.PxDefaultAllocator();
                    var tolerance = new PhysX.PxTolerancesScale();
                    // @ts-ignore
                    var foundation = PhysX.PxTopLevelFunctions.prototype.CreateFoundation(version, allocator, defaultErrorCallback);
                    var pvdPvd = null;
                    if (_this.config.debug) {
                        console.warn("\u26A0\uFE0F Make sure Profile/Debug PhysX build is used.");
                        // @ts-ignore
                        pvdPvd = PhysX.PxTopLevelFunctions.prototype.CreatePvd(foundation);
                        var pvdTransport = _this.createPhysXDebugger(_this.config.debugHost, _this.config.debugPort);
                        // @ts-ignore
                        pvdPvd.connect(pvdTransport, new PhysX.PxPvdInstrumentationFlags(PhysX._emscripten_enum_PxPvdInstrumentationFlagEnum_eDEBUG()));
                    }
                    // @ts-ignore
                    var physics = PhysX.PxTopLevelFunctions.prototype.CreatePhysics(version, foundation, tolerance, pvdPvd);
                    var cookingParamas = new PhysX.PxCookingParams(tolerance);
                    if (_this.config.performanceCooking) {
                        // @ts-ignore
                        var flags = new PhysX.PxMeshPreprocessingFlags(PhysX.eDISABLE_CLEAN_MESH | PhysX.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
                        cookingParamas.meshPreprocessParams = flags;
                        // @ts-ignore
                        cookingParamas.midphaseDesc.mBVH33Desc.meshCookingHint = PhysX.eCOOKING_PERFORMANCE;
                    }
                    // @ts-ignore
                    var cooking = PhysX.PxTopLevelFunctions.prototype.CreateCooking(version, foundation, cookingParamas);
                    // @ts-ignore
                    PhysX.PxTopLevelFunctions.prototype.InitExtensions(physics);
                    var sceneDesc = new PhysX.PxSceneDesc(tolerance);
                    sceneDesc.gravity = new PhysX.PxVec3(_this.config.gravity.x, _this.config.gravity.y, _this.config.gravity.z);
                    // @ts-ignore
                    sceneDesc.cpuDispatcher = PhysX.PxTopLevelFunctions.prototype.DefaultCpuDispatcherCreate(0);
                    // @ts-ignore
                    sceneDesc.filterShader = PhysX.PxTopLevelFunctions.prototype.DefaultFilterShader();
                    sceneDesc.kineKineFilteringMode = 0;
                    sceneDesc.staticKineFilteringMode = 0;
                    // @ts-ignore
                    sceneDesc.solverType = PhysX.ePGS;
                    // @ts-ignore
                    // sceneDesc.broadPhaseType = PhysX.eABP;
                    // @ts-ignore
                    sceneDesc.flags = new PhysX.PxSceneFlags(PhysX.eENABLE_PCM);
                    // @ts-ignore
                    var sceneFlags = new PhysX.PxSceneFlags(PhysX.ENABLE_CCD);
                    var physicsScene = physics.createScene(sceneDesc);
                    _this.physxPhysics = physics;
                    _this.physxScene = physicsScene;
                    _this.physxCooking = cooking;
                    _this.physicsRaycast = new PhysicsRaycast(_this.physxScene);
                    if (loadedCb) {
                        loadedCb();
                    }
                });
            });
        });
    };
    Physics.prototype.createPhysXDebugger = function (host, port) {
        if (host === void 0) { host = 'localhost'; }
        if (port === void 0) { port = 8090; }
        var pvdTransport = new PhysX.JSPvdTransport();
        var socket;
        var queue = [];
        var connected = false;
        var closed = false;
        pvdTransport.connect = function () {
            socket = new WebSocket("ws://" + host + ":" + port, ['binary']);
            socket.onopen = function () {
                console.log('🔌 Connected to PhysX Debugger');
                // Send packets the debugger missed
                queue.forEach(function (data) { return socket.send(data); });
                queue = [];
                connected = true;
            };
            socket.onerror = function () {
                console.error("An error has occurred with the PhysX PVD debugger socket");
            };
            socket.onclose = function () {
                console.error("Websocket connection was closed");
                connected = false;
                closed = true;
            };
            return true;
        };
        pvdTransport.send = function (inBytes, inLength) {
            if (closed)
                return;
            var data = PhysX.HEAPU8.slice(inBytes, inBytes + inLength);
            if (!connected) {
                queue.push(data);
            }
            else {
                socket.send(data);
            }
            return true;
        };
        return pvdTransport;
    };
    ;
    Physics.prototype.GetPhysX = function () {
        return this.physx;
    };
    Physics.prototype.GetPhysics = function () {
        return this.physxPhysics;
    };
    Physics.prototype.GetScene = function () {
        return this.physxScene;
    };
    Physics.prototype.GetCooking = function () {
        return this.physxCooking;
    };
    Physics.prototype.Raycast = function (origin, direction, maxDistance, layerMask) {
        if (layerMask === void 0) { layerMask = 0; }
        var ray = this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
        return this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
    };
    Physics.prototype.Start = function () {
    };
    Physics.prototype.Update = function () {
        if (this.physxScene) {
            this.scene.FixedUpdate();
            this.physxScene.simulate(1 / this.config.framerate, null);
            this.physxScene.fetchResults();
        }
    };
    return Physics;
}());
export { Physics };
//# sourceMappingURL=Physics.js.map