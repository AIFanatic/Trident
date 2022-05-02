import { PhysXLoader, PhysX } from 'trident-physx-js-webidl';
import { IPhysicsConfiguration } from './interfaces/IPhysicsConfiguration';
import { Vector3 } from 'three';

import { PhysicsRaycast } from './physics/PhysicsRaycast';
import { ConfigurationDefaults } from './defaults/ConfigurationDefaults';

export class Physics {
    public OnLoaded: () => void = () => {};
    
    private config: IPhysicsConfiguration;

    private physx: typeof PhysX;
    private physxPhysics: PhysX.PxPhysics;
    private physxCooking: PhysX.PxCooking;

    private physicsRaycast: PhysicsRaycast;

    constructor(config: IPhysicsConfiguration) {
        this.config = Object.assign({}, ConfigurationDefaults.physics, config);
        this.InitPhysX();
    }

    private InitPhysX() {
        PhysXLoader(this.config.physxWasmURL).then(response => {
            this.physx = response as any;
            // Setup
            // TODO: Dunno why PxTopLevelFunctions doesnt work without .prototype
            // @ts-ignore
            const version = PhysX.PxTopLevelFunctions.prototype.PHYSICS_VERSION;
            const defaultErrorCallback = new PhysX.PxDefaultErrorCallback()
            const allocator = new PhysX.PxDefaultAllocator();
            const tolerance = new PhysX.PxTolerancesScale();
            // @ts-ignore
            const foundation = PhysX.PxTopLevelFunctions.prototype.CreateFoundation(
                version,
                allocator,
                defaultErrorCallback
            )

            let pvdPvd: PhysX.PxPvd = null;
            if (this.config.debug) {
                console.warn(`⚠️ Make sure Profile/Debug PhysX build is used.`);
            
                // @ts-ignore
                pvdPvd = PhysX.PxTopLevelFunctions.prototype.CreatePvd(foundation);
                const pvdTransport = this.createPhysXDebugger(this.config.debugHost, this.config.debugPort);

                // @ts-ignore
                pvdPvd.connect(pvdTransport, new PhysX.PxPvdInstrumentationFlags(PhysX._emscripten_enum_PxPvdInstrumentationFlagEnum_eDEBUG()));
            }

            // @ts-ignore
            const physics: PhysX.PxPhysics = PhysX.PxTopLevelFunctions.prototype.CreatePhysics(
                version,
                foundation,
                tolerance,
                pvdPvd
            )

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

            this.physxPhysics = physics;
            this.physxCooking = cooking;

            // this.physicsRaycast = new PhysicsRaycast(this.physxScene);

            this.OnLoaded();
        })
    }

    public CreateScene(): PhysX.PxScene {
        const tolerance = new PhysX.PxTolerancesScale();
        
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
        sceneDesc.flags = new PhysX.PxSceneFlags(PhysX.eENABLE_PCM)

        // @ts-ignore
        const sceneFlags = new PhysX.PxSceneFlags(PhysX.ENABLE_CCD);
        const physicsScene: PhysX.PxScene = this.physxPhysics.createScene(sceneDesc);
        return physicsScene;
    }

    private createPhysXDebugger(host: string = 'localhost', port: number = 8090): PhysX.JSPvdTransport {
        const pvdTransport = new PhysX.JSPvdTransport();
    
        let socket: WebSocket;
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
            }
            return true;
        };

        pvdTransport.send = (inBytes, inLength) => {
            if (closed) return;
            const data = PhysX.HEAPU8.slice(inBytes, inBytes + inLength);
            if (!connected) {
                queue.push(data);
            } else {
                socket.send(data);
            }
    
            return true;
        };

        return pvdTransport;
    };

    public GetPhysX(): typeof PhysX {
        return this.physx;
    }

    public GetPhysics(): PhysX.PxPhysics {
        return this.physxPhysics;
    }

    public GetCooking(): PhysX.PxCooking {
        return this.physxCooking;
    }

    public Raycast(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number = 0): PhysX.PxRaycastBuffer10 {
        const ray = this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
        return this.physicsRaycast.Raycast(origin, direction, maxDistance, layerMask);
    }

    public Start() {
    }

    public Update(scene: PhysX.PxScene) {
        if(scene) {
            scene.simulate(1/this.config.framerate, null);
            scene.fetchResults();
        }
    }
}