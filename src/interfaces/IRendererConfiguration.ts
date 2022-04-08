export interface IRendererConfiguration {
    containerId: string,
    targetFrameRate?: number;
    antialias?: boolean;
    logarithmicDepthBuffer?: boolean;
    pixelRatio?: number;
    physicallyCorrectLights?: boolean;
}