[trident](../README.md) / [Exports](../modules.md) / SceneSerializer

# Class: SceneSerializer

## Table of contents

### Constructors

- [constructor](SceneSerializer.md#constructor)

### Methods

- [Serialize](SceneSerializer.md#serialize)
- [SerializeComponent](SceneSerializer.md#serializecomponent)
- [SerializeComponentProperty](SceneSerializer.md#serializecomponentproperty)
- [SerializeGameObject](SceneSerializer.md#serializegameobject)
- [SerializeTransform](SceneSerializer.md#serializetransform)
- [getInstanceParentInstance](SceneSerializer.md#getinstanceparentinstance)

## Constructors

### constructor

• **new SceneSerializer**()

## Methods

### Serialize

▸ `Static` **Serialize**(`scene`): `ISceneSerialized`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Returns

`ISceneSerialized`

#### Defined in

[serializer/SceneSerializer.ts:162](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L162)

___

### SerializeComponent

▸ `Static` **SerializeComponent**(`component`): `IComponentSerialized`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Component`](Components.Component.md) |

#### Returns

`IComponentSerialized`

#### Defined in

[serializer/SceneSerializer.ts:93](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L93)

___

### SerializeComponentProperty

▸ `Static` **SerializeComponentProperty**(`component`, `property`, `checkCustomTypeOnly?`): `IComponentPropertySerialized`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `component` | [`Component`](Components.Component.md) | `undefined` |
| `property` | `string` | `undefined` |
| `checkCustomTypeOnly` | `boolean` | `false` |

#### Returns

`IComponentPropertySerialized`

#### Defined in

[serializer/SceneSerializer.ts:23](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L23)

___

### SerializeGameObject

▸ `Static` **SerializeGameObject**(`gameObject`): `IGameObjectSerialized`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |

#### Returns

`IGameObjectSerialized`

#### Defined in

[serializer/SceneSerializer.ts:144](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L144)

___

### SerializeTransform

▸ `Static` **SerializeTransform**(`transform`): `ITransformSerialized`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Components.Transform.md) |

#### Returns

`ITransformSerialized`

#### Defined in

[serializer/SceneSerializer.ts:131](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L131)

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

[serializer/SceneSerializer.ts:13](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/serializer/SceneSerializer.ts#L13)
