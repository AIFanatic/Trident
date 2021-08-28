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