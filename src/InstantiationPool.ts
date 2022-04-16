import { Component } from "./components";

export class _InstantiationPool {
    private pendingAwakes: Component[];
    private pendingStarts: Component[];
    
    constructor() {
        this.pendingAwakes = [];
        this.pendingStarts = [];
    }

    public add(component: Component) {
        this.pendingAwakes.push(component);
        this.pendingStarts.push(component);

        // if (component.runInEditMode) {
        //     console.log(`[${component.gameObject.name} ${component.classname}] runInEditMode ${component.runInEditMode}`);
        //     this.Load();
        // }
    }

    /**
     * Loads all the pending components.
     * Calls all Awake methods first then Start. If at any a new Component is created
     * restarts the Load.
     * 
     * TODO: Return when all done.
     */
    public Load() {
        for (let i = this.pendingAwakes.length; i > 0; i--) {
            const component = this.pendingAwakes.pop();
            // console.log(`[${component.gameObject.name} ${component.classname}] Awake`);
            component.Awake();
            component.isAwake = true;
        }

        // Calling Awake may initilize new components, if so restart Load in order to Awake them.
        if (this.pendingAwakes.length > 0) {
            this.Load();
            return;
        }

        for (let i = this.pendingStarts.length; i > 0; i--) {
            const component = this.pendingStarts.pop();
            // console.log(`[${component.gameObject.name} ${component.classname}] Start`);
            component.Start();
            component.isStarted = true;
            
            // If a new component was added to the pool restart the load.
            if (this.pendingAwakes.length != 0) {
                this.Load();
                break;
            }
        }

        return true;
    }
}

export const InstantiationPool = new _InstantiationPool();