[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Animation

# Class: Animation

[Components](../modules/Components.md).Animation

Add and play animations from an existing mesh.

This mostly works with glTF models that have animations embedded into the model.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Animation`**

## Table of contents

### Methods

- [AddClip](Components.Animation.md#addclip)
- [OnEnable](Components.Animation.md#onenable)
- [Play](Components.Animation.md#play)
- [Stop](Components.Animation.md#stop)
- [Update](Components.Animation.md#update)

## Methods

### AddClip

▸ **AddClip**(`clip`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clip` | `AnimationClip` |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[components/Animation.ts:35](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Animation.ts#L35)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Animation.ts:19](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Animation.ts#L19)

___

### Play

▸ **Play**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[components/Animation.ts:39](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Animation.ts#L39)

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Stop](Components.Component.md#stop)

#### Defined in

[components/Animation.ts:53](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Animation.ts#L53)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

[components/Animation.ts:58](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Animation.ts#L58)
