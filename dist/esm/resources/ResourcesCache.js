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
/**
 * @ignore
 */
export const ResourcesCache = new _ResourcesCache();
//# sourceMappingURL=ResourcesCache.js.map