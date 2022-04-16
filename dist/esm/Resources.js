var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { MaterialLoader, Mesh } from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
var ResourcesCache = /** @class */ (function () {
    function ResourcesCache() {
        this.cache = new Map();
    }
    ResourcesCache.prototype.get = function (name) {
        // console.log("get", name)
        return this.cache.get(name);
    };
    ResourcesCache.prototype.set = function (name, value) {
        console.log("set", name);
        this.cache.set(name, value);
    };
    ResourcesCache.prototype.has = function (name) {
        return this.cache.has(name);
    };
    ResourcesCache.prototype.remove = function (name) {
        this.cache.delete(name);
    };
    ResourcesCache.prototype.size = function () {
        return this.cache.size;
    };
    ResourcesCache.prototype.clear = function () {
        this.cache.clear();
    };
    return ResourcesCache;
}());
var FilesCache = new ResourcesCache();
// console.warn(`[FilesCache] Removal of files not implemented, deque?`);
// console.warn("[ArticulationBody] Articulation needs to be rethough of, maybe separate into multiple individual components (REVOLUTE, PRISMATIC, SPHERICAL");
var ResourceExtensions;
(function (ResourceExtensions) {
    ResourceExtensions["MATERIAL"] = "MAT";
    ResourceExtensions["MESH_OBJ"] = "OBJ";
})(ResourceExtensions || (ResourceExtensions = {}));
;
var Resources = /** @class */ (function () {
    function Resources() {
    }
    Resources.LoadMeshAsync = function (path, type) {
        if (type == ResourceExtensions.MESH_OBJ) {
            var loader_1 = new OBJLoader();
            var promise = new Promise(function (resolve, reject) {
                loader_1.load(path, 
                // onLoad callback
                function (group) {
                    if (group.children.length > 0) {
                        var mesh = group.children[0];
                        if (mesh instanceof Mesh) {
                            resolve(mesh.geometry);
                        }
                    }
                }, 
                // onProgress callback
                function (xhr) {
                }, 
                // onError callback
                function (err) {
                    reject(err);
                });
            });
            FilesCache.set(path, promise);
            return promise;
        }
    };
    Resources.LoadMaterialAsync = function (path) {
        var loader = new MaterialLoader();
        var promise = new Promise(function (resolve, reject) {
            loader.load(path, 
            // onLoad callback
            function (material) {
                resolve(material);
            }, 
            // onProgress callback
            function (xhr) {
            }, 
            // onError callback
            function (err) {
                reject(err);
            });
        });
        FilesCache.set(path, promise);
        return promise;
    };
    Resources.LoadAsync = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var extension;
            return __generator(this, function (_a) {
                if (FilesCache.has(path)) {
                    return [2 /*return*/, FilesCache.get(path)];
                }
                extension = path.substr(path.lastIndexOf('.') + 1).toUpperCase();
                if (extension == ResourceExtensions.MATERIAL) {
                    return [2 /*return*/, Resources.LoadMaterialAsync(path)];
                }
                else if (extension == ResourceExtensions.MESH_OBJ) {
                    return [2 /*return*/, Resources.LoadMeshAsync(path, ResourceExtensions.MESH_OBJ)];
                }
                return [2 /*return*/];
            });
        });
    };
    return Resources;
}());
export { Resources };
// const l = Resources.LoadAsync("Cube.fbx", ResourceExtensions.MATERIAL)
// l.then(val => {
// })
//# sourceMappingURL=Resources.js.map