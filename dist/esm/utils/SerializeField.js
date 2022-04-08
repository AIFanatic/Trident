var SerializableTypes = /** @class */ (function () {
    function SerializableTypes() {
        this.types = new Map();
    }
    SerializableTypes.prototype.has = function (classname, property) {
        return this.types.has(classname + "-" + property);
    };
    SerializableTypes.prototype.get = function (classname, property) {
        return this.types.get(classname + "-" + property);
    };
    SerializableTypes.prototype.set = function (classname, property, type) {
        this.types.set(classname + "-" + property, type);
    };
    SerializableTypes.prototype.size = function () {
        return this.types.size;
    };
    return SerializableTypes;
}());
export var SerializableTypesInstance = new SerializableTypes();
export function SerializeField(type, propertyKey, descriptor) {
    // When no arguments are passed descriptor will be defined;
    if (descriptor) {
        descriptor.enumerable = true;
        return;
    }
    // When arguments are passed type will be defined and nothing else will
    function _SerializeField(target, propertyKey, descriptor) {
        var classname = target.constructor.name;
        if (!SerializableTypesInstance.has(classname, propertyKey)) {
            SerializableTypesInstance.set(classname, propertyKey, type);
            descriptor.enumerable = true;
        }
    }
    return _SerializeField;
}
//# sourceMappingURL=SerializeField.js.map