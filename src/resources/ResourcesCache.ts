import { BufferGeometry, Material, Texture } from "three";
import { Component } from "../components";
import { Scene } from "../Scene";

export type ResourcesCacheEntry = Promise<BufferGeometry | Material | Component | Scene | Texture>;

class _ResourcesCache {
    private cache: Map<string, ResourcesCacheEntry>;

    constructor() {
        this.cache = new Map();
    }
    
    public get(name: string): ResourcesCacheEntry {
        return this.cache.get(name);
    }

    public set(name: string, value: ResourcesCacheEntry) {
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

/**
 * @ignore
 */
export const ResourcesCache = new _ResourcesCache();