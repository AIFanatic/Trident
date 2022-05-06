class _ResourcesCache {
    constructor() {
        this.cache = new Map();
    }
    get(name) {
        return this.cache.get(name);
    }
    set(name, value) {
        this.cache.set(name, value);
    }
    has(name) {
        return this.cache.has(name);
    }
    remove(name) {
        this.cache.delete(name);
    }
    size() {
        return this.cache.size;
    }
    clear() {
        this.cache.clear();
    }
}
export const ResourcesCache = new _ResourcesCache();
// console.warn(`[FilesCache] Removal of files not implemented, deque?`);
// console.warn("[ArticulationBody] Articulation needs to be rethough of, maybe separate into multiple individual components (REVOLUTE, PRISMATIC, SPHERICAL");
//# sourceMappingURL=ResourcesCache.js.map