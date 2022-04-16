export interface IPhysicsConfiguration {
    physxWasmURL?: string;
    gravity?: {
        x: number,
        y: number,
        z: number,
    };
    framerate?: number;
    performanceCooking?: boolean;
    debug?: boolean;
    debugHost?: string;
    debugPort?: number;
}

export interface IRendererConfiguration {
    containerId: string,
    targetFrameRate?: number;
    antialias?: boolean;
    logarithmicDepthBuffer?: boolean;
    pixelRatio?: number;
    physicallyCorrectLights?: boolean;
}

export interface IApplicationConfiguration {
    rootPath: string;
}

export interface IConfiguration {
    renderer: IRendererConfiguration;
    physics: IPhysicsConfiguration;
    application: IApplicationConfiguration;
}