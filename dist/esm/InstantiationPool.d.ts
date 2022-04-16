import { Component } from "./components";
export declare class _InstantiationPool {
    private pendingAwakes;
    private pendingStarts;
    constructor();
    add(component: Component): void;
    /**
     * Loads all the pending components.
     * Calls all Awake methods first then Start. If at any a new Component is created
     * restarts the Load.
     *
     * TODO: Return when all done.
     */
    Load(): boolean;
}
export declare const InstantiationPool: _InstantiationPool;
