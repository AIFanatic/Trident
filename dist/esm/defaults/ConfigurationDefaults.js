export var ConfigurationDefaults = {
    renderer: {
        containerId: null,
        targetFrameRate: 60,
        antialias: true,
        logarithmicDepthBuffer: false,
        pixelRatio: 1,
        physicallyCorrectLights: false
    },
    physics: {
        physxWasmURL: "./trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
        gravity: {
            x: 0,
            y: -9.8,
            z: 0,
        },
        framerate: 60,
        performanceCooking: false,
    },
    application: {
        rootPath: "./"
    }
};
//# sourceMappingURL=ConfigurationDefaults.js.map