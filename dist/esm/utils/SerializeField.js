class SerializableTypes {
    constructor() {
        this.types = new Map();
    }
    has(classname, property) {
        return this.types.has(classname + "-" + property);
    }
    get(classname, property) {
        return this.types.get(classname + "-" + property);
    }
    set(classname, property, type) {
        this.types.set(classname + "-" + property, type);
    }
    size() {
        return this.types.size;
    }
}
export const SerializableTypesInstance = new SerializableTypes();
export function SerializeField(type, propertyKey, descriptor) {
    // When no arguments are passed descriptor will be defined;
    if (descriptor) {
        descriptor.enumerable = true;
        return;
    }
    // When arguments are passed type will be defined and nothing else will
    function _SerializeField(target, propertyKey, descriptor) {
        const classname = target.constructor.name;
        if (!SerializableTypesInstance.has(classname, propertyKey)) {
            SerializableTypesInstance.set(classname, propertyKey, type);
            // Classes dont have a descriptor
            if (descriptor) {
                descriptor.enumerable = true;
            }
        }
    }
    return _SerializeField;
}
//# sourceMappingURL=SerializeField.js.map