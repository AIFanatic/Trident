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
import { UUID } from '../utils/UUID';
/**
 * Base class that all components inherit from.
 * Can be extended to create custom components.
 * @example
 * ```typescript
 *class CustomComponent extends Component {
 *   public Start() {
 *   }
 *}
 *const gameObject = new GameObject(scene);
 *const customComponent = gameObject.AddComponent(CustomComponent) as CustomComponent;
 * ```
 */
var Component = /** @class */ (function () {
    function Component(gameObject, transform) {
        /**
         * UUID of the component. Generated randomly.
         */
        this.uuid = UUID.v4();
        /**
         * Used to detect valid components.
         */
        this.classtype = "Component";
        /**
         * @todo Indicates that this component has started.
         */
        this.isStarted = false;
        this.isAwake = false;
        this.runInEditMode = false;
        this.gameObject = gameObject;
        this.transform = transform;
        // TODO: Probably doesn't work at runtime
        this.classname = this.constructor.name;
    }
    /**
     * Called once when the component is first added to a GameObject.
     */
    Component.prototype.Awake = function () { };
    ;
    Component.prototype.OnDisable = function () {
    };
    Component.prototype.Start = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /**
     * Called once after the scene is stopped.
     */
    Component.prototype.Stop = function () {
    };
    /**
     * Called before every Physics update.
     */
    Component.prototype.FixedUpdate = function () {
    };
    /**
     * Called before every Renderer update.
     */
    Component.prototype.Update = function () {
    };
    /**
     * Called after every Renderer update.
     */
    Component.prototype.LateUpdate = function () {
    };
    /**
     * Called once when Gizmos are enabled.
     * If Gizmos are enabled before the component is created this method is called once after Start.
     */
    Component.prototype.OnGizmosEnabled = function () {
    };
    /**
     * Called once when Gizmos are disabled.
     */
    Component.prototype.OnGizmosDisabled = function () {
    };
    /**
     * Called after every Update if Gizmos are enabled.
     */
    Component.prototype.OnDrawGizmos = function () {
    };
    /**
     * Called when the component is destroyed.
     */
    Component.prototype.Destroy = function () {
        this.gameObject.RemoveComponent(this);
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map