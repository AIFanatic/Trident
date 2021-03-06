import { BufferGeometry, Material, Texture } from "three";
import { Component } from "../components";
import { Scene } from "../Scene";
export declare type ResourcesCacheEntry = Promise<BufferGeometry | Material | Component | Scene | Texture>;
declare class _ResourcesCache {
    private cache;
    constructor();
    get(name: string): ResourcesCacheEntry;
    set(name: string, value: ResourcesCacheEntry): void;
    has(name: string): boolean;
    remove(name: string): void;
    size(): number;
    clear(): void;
}
/**
 * @ignore
 */
export declare const ResourcesCache: _ResourcesCache;
export {};
