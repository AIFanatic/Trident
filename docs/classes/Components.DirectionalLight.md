[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / DirectionalLight

# Class: DirectionalLight

[Components](../modules/Components.md).DirectionalLight

A directional light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`DirectionalLight`**

## Table of contents

### Accessors

- [color](Components.DirectionalLight.md#color)
- [intensity](Components.DirectionalLight.md#intensity)
- [shadows](Components.DirectionalLight.md#shadows)

### Methods

- [Awake](Components.DirectionalLight.md#awake)
- [Destroy](Components.DirectionalLight.md#destroy)
- [OnDrawGizmos](Components.DirectionalLight.md#ondrawgizmos)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/DirectionalLight.ts:15](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L15)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:19](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L19)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:24](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L24)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:28](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L28)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/DirectionalLight.ts:33](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L33)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:37](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L37)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/DirectionalLight.ts:41](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L41)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/DirectionalLight.ts:55](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L55)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/DirectionalLight.ts:46](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/DirectionalLight.ts#L46)
