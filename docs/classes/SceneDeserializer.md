[trident](../README.md) / [Exports](../modules.md) / SceneDeserializer

# Class: SceneDeserializer

## Table of contents

### Constructors

- [constructor](SceneDeserializer.md#constructor)

### Methods

- [Deserialize](SceneDeserializer.md#deserialize)
- [DeserializeComponent](SceneDeserializer.md#deserializecomponent)
- [DeserializeComponentClassProperties](SceneDeserializer.md#deserializecomponentclassproperties)
- [DeserializeComponentProperty](SceneDeserializer.md#deserializecomponentproperty)
- [DeserializeGameObject](SceneDeserializer.md#deserializegameobject)
- [DeserializeTransform](SceneDeserializer.md#deserializetransform)
- [FindTransformByUUID](SceneDeserializer.md#findtransformbyuuid)
- [LoadFile](SceneDeserializer.md#loadfile)

## Constructors

### constructor

• **new SceneDeserializer**()

## Methods

### Deserialize

▸ `Static` **Deserialize**(`sceneSerialized`): `Promise`<[`Scene`](Scene.md)\>

Deserializes a Serialized scene

**`todo`** Return a promise that resolves when deserialization is complete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneSerialized` | `ISceneSerialized` | Scerialized Scene. |

#### Returns

`Promise`<[`Scene`](Scene.md)\>

Created Scene

#### Defined in

[serializer/SceneDeserializer.ts:196](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L196)

___

### DeserializeComponent

▸ `Static` **DeserializeComponent**(`gameObject`, `componentSerialized`): `Promise`<[`Component`](Components.Component.md)\>

Deserializes a component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) | GameObject where the component is going to be added to. |
| `componentSerialized` | `IComponentSerialized` | Scerialized component. |

#### Returns

`Promise`<[`Component`](Components.Component.md)\>

Created component

#### Defined in

[serializer/SceneDeserializer.ts:130](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L130)

___

### DeserializeComponentClassProperties

▸ `Static` **DeserializeComponentClassProperties**(`componentClass`, `componentClassProperties`): `any`

Deserializes a class in a component that are not components themselves.
eg: ArticulationBody.xDrive is a class but not a component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentClass` | `any` |
| `componentClassProperties` | `IComponentSerialized` |

#### Returns

`any`

Created component

#### Defined in

[serializer/SceneDeserializer.ts:111](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L111)

___

### DeserializeComponentProperty

▸ `Static` **DeserializeComponentProperty**(`component`, `property`): `void`

Deserializes a component or component class properties.

Deserialization happens based on the "type" field.

For VECTOR3, VECTOR2, COLOR, NUMBER and BOOLEAN the value field just gets assigned as the component's property value.

For MESH and MATERIAL if a "file" is field is present LoadFile is used to load the data, otherwise defaults are assign to the component's property value.

If custom types are found that are functions/classes (through the usage of @SerializeField(T)) deserialization is performed through "DeserializeComponentClassProperties"
that essentially calls DeserializeComponentProperty on each of the class properties.
This skips the creation of a new component on the GameObject (using AddComponent) since the class may not be a component (eg: ArticulationBody.xDrive).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | [`Component`](Components.Component.md) | Component class/function |
| `property` | `IComponentPropertySerialized` | Serialized property |

#### Returns

`void`

#### Defined in

[serializer/SceneDeserializer.ts:42](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L42)

___

### DeserializeGameObject

▸ `Static` **DeserializeGameObject**(`scene`, `gameObjectSerialized`): `Promise`<[`GameObject`](GameObject.md)\>

Deserializes a GameObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`Scene`](Scene.md) | Scene to add GameObject to. |
| `gameObjectSerialized` | `IGameObjectSerialized` | Scerialized GameObject. |

#### Returns

`Promise`<[`GameObject`](GameObject.md)\>

Created GameObject

#### Defined in

[serializer/SceneDeserializer.ts:178](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L178)

___

### DeserializeTransform

▸ `Static` **DeserializeTransform**(`scene`, `transform`, `transformSerialized`): `void`

Deserializes a Transform

**`todo`** In order to set the parent all the transforms need to already be in the scene.
Therefore only set the parents when all the GameObjects are created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`Scene`](Scene.md) | Scene that this Transform belongs to. |
| `transform` | [`Transform`](Components.Transform.md) | - |
| `transformSerialized` | `ITransformSerialized` | Serialized transform. |

#### Returns

`void`

#### Defined in

[serializer/SceneDeserializer.ts:161](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L161)

___

### FindTransformByUUID

▸ `Static` **FindTransformByUUID**(`scene`, `uuid`): [`Transform`](Components.Transform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |
| `uuid` | `string` |

#### Returns

[`Transform`](Components.Transform.md)

#### Defined in

[serializer/SceneDeserializer.ts:147](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L147)

___

### LoadFile

▸ `Static` **LoadFile**(`file`): `Promise`<`ResourcesCacheEntry`\>

Loads a file asynchronously

This method is separate in order for it to be overridden.
This is useful in situations were files are loaded from different places, such as the Editor (File System API) vs Runtime (fetch).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `IFile` | File to be loaded |

#### Returns

`Promise`<`ResourcesCacheEntry`\>

Loaded file

#### Defined in

[serializer/SceneDeserializer.ts:22](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/serializer/SceneDeserializer.ts#L22)
