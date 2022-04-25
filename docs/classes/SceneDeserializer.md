[trident](../README.md) / [Exports](../modules.md) / SceneDeserializer

# Class: SceneDeserializer

## Table of contents

### Constructors

- [constructor](SceneDeserializer.md#constructor)

### Methods

- [Deserialize](SceneDeserializer.md#deserialize)
- [DeserializeComponent](SceneDeserializer.md#deserializecomponent)
- [DeserializeComponentProperty](SceneDeserializer.md#deserializecomponentproperty)
- [DeserializeGameObject](SceneDeserializer.md#deserializegameobject)
- [DeserializeTransform](SceneDeserializer.md#deserializetransform)
- [FindTransformByUUID](SceneDeserializer.md#findtransformbyuuid)
- [LoadFile](SceneDeserializer.md#loadfile)
- [getInstanceParentInstance](SceneDeserializer.md#getinstanceparentinstance)

## Constructors

### constructor

• **new SceneDeserializer**()

## Methods

### Deserialize

▸ `Static` **Deserialize**(`scene`, `sceneSerialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |
| `sceneSerialized` | `ISceneSerialized` |

#### Returns

`void`

#### Defined in

[serializer/SceneDeserializer.ts:164](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L164)

___

### DeserializeComponent

▸ `Static` **DeserializeComponent**(`gameObject`, `componentSerialized`): `Promise`<[`Component`](Components.Component.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `componentSerialized` | `IComponentSerialized` |

#### Returns

`Promise`<[`Component`](Components.Component.md)\>

#### Defined in

[serializer/SceneDeserializer.ts:99](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L99)

___

### DeserializeComponentProperty

▸ `Static` **DeserializeComponentProperty**(`component`, `property`, `checkCustomTypeOnly?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `component` | [`Component`](Components.Component.md) | `undefined` |
| `property` | `IComponentPropertySerialized` | `undefined` |
| `checkCustomTypeOnly` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[serializer/SceneDeserializer.ts:28](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L28)

___

### DeserializeGameObject

▸ `Static` **DeserializeGameObject**(`scene`, `gameObjectSerialized`): [`GameObject`](GameObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |
| `gameObjectSerialized` | `IGameObjectSerialized` |

#### Returns

[`GameObject`](GameObject.md)

#### Defined in

[serializer/SceneDeserializer.ts:150](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L150)

___

### DeserializeTransform

▸ `Static` **DeserializeTransform**(`transform`, `transformSerialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Components.Transform.md) |
| `transformSerialized` | `ITransformSerialized` |

#### Returns

`void`

#### Defined in

[serializer/SceneDeserializer.ts:139](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L139)

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

[serializer/SceneDeserializer.ts:133](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L133)

___

### LoadFile

▸ `Static` **LoadFile**(`file`): `Promise`<[`Component`](Components.Component.md) \| `BufferGeometry` \| `Material`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `IFile` |

#### Returns

`Promise`<[`Component`](Components.Component.md) \| `BufferGeometry` \| `Material`\>

#### Defined in

[serializer/SceneDeserializer.ts:14](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L14)

___

### getInstanceParentInstance

▸ `Static` **getInstanceParentInstance**(`instance`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `object` |

#### Returns

`Function`

#### Defined in

[serializer/SceneDeserializer.ts:18](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneDeserializer.ts#L18)
