import { PhysXLoader, PhysX } from 'trident-physx-js-webidl';
import { PhysicsRaycast } from './physics/PhysicsRaycast';
import { ConfigurationDefaults } from './defaults/ConfigurationDefaults';
export class Physics {
    constructor(config) {
        this.OnLoaded = () => { };
        this.FixedUpdate = () => { };
        this.config = Object.assign({}, ConfigurationDefaults.physics, config);
        this.InitPhysX();
    }
    InitPhysX() {
        PhysXLoader(this.config.physxWasmURL).then(response => {
            this.physx = response;
            // Setup
            // TODO: Dunno why PxTopLevelFunctions doesnt work without .prototype
            // @ts-ignore
            const version = PhysX.PxTopLevelFunctions.prototype.PHYSICS_VERSION;
            const defaultErrorCallback = new PhysX.PxDefaultErrorCallback();
            const allocator = new PhysX.PxDefaultAllocator();
            const tolerance = new PhysX.PxTolerancesScale();
            // @ts-ignore
            const foundation = PhysX.PxTopLevelFunctions.prototype.CreateFoundation(version, allocator, defaultErrorCallback);
            let pvdPvd = null;
            if (this.config.debug) {
                console.warn(`⚠️ Make sure Profile/Debug PhysX build is used.`);
                // @ts-ignore
                pvdPvd = PhysX.PxTopLevelFunctions.prototype.CreatePvd(foundation);
                const pvdTransport = this.createPhysXDebugger(this.config.debugHost, this.config.debugPort);
                // @ts-ignore
                pvdPvd.connect(pvdTransport, new PhysX.PxPvdInstrumentationFlags(PhysX._emscripten_enum_PxPvdInstrumentationFlagEnum_eDEBUG()));
            }
            // @ts-ignore
            const physics = PhysX.PxTopLevelFunctions.prototype.CreatePhysics(version, foundation, tolerance, pvdPvd);
            const cookingParamas = new PhysX.PxCookingParams(tolerance);
            if (this.config.performanceCooking) {
                // @ts-ignore
                const flags = new PhysX.PxMeshPreprocessingFlags(PhysX.eDISABLE_CLEAN_MESH | PhysX.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
                cookingParamas.meshPreprocessParams = flags;
                // @ts-ignore
                cookingParamas.midphaseDesc.mBVH33Desc.meshCookingHint = PhysX.eCOOKING_PERFORMANCE;
            }
            // @ts-ignore
            const cooking = PhysX.PxTopLevelFunctions.prototype.CreateCooking(version, foundation, cookingParamas);
            // @ts-ignore
            PhysX.PxTopLevelFunctions.prototype.InitExtensions(physics);
            const sceneDesc = new PhysX.PxSceneDesc(tolerance);
            sceneDesc.gravity = new PhysX.PxVec3(this.config.gravity.x, this.config.gravity.y, this.config.gravity.z);
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
            const sceneFlags = new PhysX.PxSceneFlags(PhysX.ENABLE_CCD);
            const physicsScene = physics.createScene(sceneDesc);
            this.physxPhysics = physics;
            this.physxScene = physicsScene;
            this.physxCooking = cooking;
            this.physicsRaycast = new PhysicsRaycast(this.physxScene);
            this.OnLoaded();
        });
        //     fetch(this.config.physxWasmURL).then(response => {
        //         response.arrayBuffer()
        //         .then(bytes => {
        //             PhysX['wasmBinary'] = bytes;
        //             // If locateFile is used it loads the wasm 3 times
        //             // PhysX['locateFile'] = (s) => {
        //             //     return this.config.physxWasmURL
        //             // };
        //             PhysX()
        //             .then(ret => {
        //                 console.log(PhysX)
        //                 return;
        //                 this.physx = ret;
        //                 // Setup
        //                 // TODO: Dunno why PxTopLevelFunctions doesnt work without .prototype
        //                 // @ts-ignore
        //                 const version = PhysX.PxTopLevelFunctions.prototype.PHYSICS_VERSION;
        //                 const defaultErrorCallback = new PhysX.PxDefaultErrorCallback()
        //                 const allocator = new PhysX.PxDefaultAllocator();
        //                 const tolerance = new PhysX.PxTolerancesScale();
        //                 // @ts-ignore
        //                 const foundation = PhysX.PxTopLevelFunctions.prototype.CreateFoundation(
        //                     version,
        //                     allocator,
        //                     defaultErrorCallback
        //                 )
        //                 let pvdPvd: PhysX.PxPvd = null;
        //                 if (this.config.debug) {
        //                     console.warn(`⚠️ Make sure Profile/Debug PhysX build is used.`);
        //                     // @ts-ignore
        //                     pvdPvd = PhysX.PxTopLevelFunctions.prototype.CreatePvd(foundation);
        //                     const pvdTransport = this.createPhysXDebugger(this.config.debugHost, this.config.debugPort);
        //                     // @ts-ignore
        //                     pvdPvd.connect(pvdTransport, new PhysX.PxPvdInstrumentationFlags(PhysX._emscripten_enum_PxPvdInstrumentationFlagEnum_eDEBUG()));
        //                 }
        //                 // @ts-ignore
        //                 const physics: PhysX.PxPhysics = PhysX.PxTopLevelFunctions.prototype.CreatePhysics(
        //                     version,
        //                     foundation,
        //                     tolerance,
        //                     pvdPvd
        //                 )
        //                 const cookingParamas = new PhysX.PxCookingParams(tolerance);
        //                 if (this.config.performanceCooking) {
        //                     // @ts-ignore
        //                     const flags = new PhysX.PxMeshPreprocessingFlags(PhysX.eDISABLE_CLEAN_MESH | PhysX.eDISABLE_ACTIVE_EDGES_PRECOMPUTE);
        //                     cookingParamas.meshPreprocessParams = flags;
        //                     // @ts-ignore
        //                     cookingParamas.midphaseDesc.mBVH33Desc.meshCookingHint = PhysX.eCOOKING_PERFORMANCE; 
        //                 }
        //                 // @ts-ignore
        //                 const cooking = PhysX.PxTopLevelFunctions.prototype.CreateCooking(version, foundation, cookingParamas);
        //                 // @ts-ignore
        //                 PhysX.PxTopLevelFunctions.prototype.InitExtensions(physics);
        //                 const sceneDesc = new PhysX.PxSceneDesc(tolerance);
        //                 sceneDesc.gravity = new PhysX.PxVec3(this.config.gravity.x, this.config.gravity.y, this.config.gravity.z);
        //                 // @ts-ignore
        //                 sceneDesc.cpuDispatcher = PhysX.PxTopLevelFunctions.prototype.DefaultCpuDispatcherCreate(0);
        //                 // @ts-ignore
        //                 sceneDesc.filterShader = PhysX.PxTopLevelFunctions.prototype.DefaultFilterShader();
        //                 sceneDesc.kineKineFilteringMode = 0;
        //                 sceneDesc.staticKineFilteringMode = 0;
        //                 // @ts-ignore
        //                 sceneDesc.solverType = PhysX.ePGS;
        //                 // @ts-ignore
        //                 // sceneDesc.broadPhaseType = PhysX.eABP;
        //                 // @ts-ignore
        //                 sceneDesc.flags = new PhysX.PxSceneFlags(PhysX.eENABLE_PCM)
        //                 // @ts-ignore
        //                 const sceneFlags = new PhysX.PxSceneFlags(PhysX.ENABLE_CCD);
        //                 const physicsScene: PhysX.PxScene = physics.createScene(sceneDesc);
        //                 this.physxPhysics = physics;
        //                 this.physxScene = physicsScene;
        //                 this.physxCooking = cooking;
        //                 this.physicsRaycast = new PhysicsRaycast(this.physxScene);
        //                 this.OnLoaded();
        //             })
        //         });
        //     });
    }
    createPhysXDebugger(host = 'localhost', port = 8090) {
        const pvdTransport = new PhysX.JSPvdTransport();
        let socket;
        let queue = [];
        let connected = false;
        let closed = false;
        pvdTransport.connect = () => {
            socket = new WebSocket(`ws://${host}:${port}`, ['binary']);
            socket.onopen = () => {
                console.log('🔌 Connected to PhysX Debugger');
                // Send packets the debugger missed
                queue.forEach(data => socket.send(data));
                queue = [];
                connected = true;
            };
            socket.onerror = () => {
                console.error("An error has occurred with the PhysX PVD debugger socket");
            };
            socket.onclose = () => {
                console.error("Websocket connection was closed");
                connected = false;
                closed = true;
            };
            return true;
        };
        pvdTransport.send = (inBytes, inLength) => {
            if (closed)
                return;
            const data = PhysX.HEAPU8.slice(inBytes, inBytes + inLength);
            if (!connected) {
                queue.push(data);
            }
            else {
                socket.send(data);
            }
            return true;
        };
        return pvdTransport;
    }
    ;
    GetPhysX() {
        return this.physx;
    }
    GetPhysics() {
        return this.physxPhysics;
    }
    GetScene() {
        return this.physxScene;
    }
    GetCooking() {
        return this.physxCooking;
    }
    Raycast(origin, direction, maxDistance, layerMask = 0) {
        const ray = this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
        return this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
    }
    Start() {
    }
    Update() {
        if (this.physxScene) {
            this.FixedUpdate();
            this.physxScene.simulate(1 / this.config.framerate, null);
            this.physxScene.fetchResults();
        }
    }
}
//# sourceMappingURL=Physics.js.map