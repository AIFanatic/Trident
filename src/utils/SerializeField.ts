class SerializableTypes {
    private types: Map<string, any> = new Map();
    constructor() {
    }

    public has(classname: string, property: string): boolean {
        return this.types.has(classname + "-" + property);
    }

    public get(classname: string, property: string): any {
        return this.types.get(classname + "-" + property);
    }

    public set(classname: string, property: string, type: any) {
        this.types.set(classname + "-" + property, type);
    }

    public size(): number {
        return this.types.size;
    }
}

export const SerializableTypesInstance = new SerializableTypes();

export function SerializeField(target: any, propertyKey?: string, descriptor?: PropertyDescriptor);
export function SerializeField(type?: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
    // When no arguments are passed descriptor will be defined;
    if (descriptor) {
        descriptor.enumerable = true;
        return;
    }
    
    // When arguments are passed type will be defined and nothing else will
    function _SerializeField(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
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