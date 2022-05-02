import { BufferGeometry, Material } from "three";
import { Component } from "../components";
import { Scene } from "../Scene";

export type ResourcesCacheEntry = Promise<BufferGeometry | Material | Component | Scene>;

class _ResourcesCache {
    private cache: Map<string, ResourcesCacheEntry>;

    constructor() {
        this.cache = new Map();
    }
    
    public get(name: string): ResourcesCacheEntry {
        // console.log("get", name)
        return this.cache.get(name);
    }

    public set(name: string, value: ResourcesCacheEntry) {
        console.log("set", name)
        this.cache.set(name, value);
    }

    public has(name: string): boolean {
        return this.cache.has(name);
    }

    public remove(name: string) {
        this.cache.delete(name);
    }

    public size(): number {
        return this.cache.size
    }

    public clear() {
        this.cache.clear();
    }
}

export const ResourcesCache = new _ResourcesCache();
// console.warn(`[FilesCache] Removal of files not implemented, deque?`);
// console.warn("[ArticulationBody] Articulation needs to be rethough of, maybe separate into multiple individual components (REVOLUTE, PRISMATIC, SPHERICAL");