declare class SerializableTypes {
    private types;
    constructor();
    has(classname: string, property: string): boolean;
    get(classname: string, property: string): any;
    set(classname: string, property: string, type: any): void;
    size(): number;
}
export declare const SerializableTypesInstance: SerializableTypes;
export declare function SerializeField(target: any, propertyKey?: string, descriptor?: PropertyDescriptor): any;
export {};
