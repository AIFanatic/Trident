[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / PointLight

# Class: PointLight

[Components](../modules/Components.md).PointLight

A point light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`PointLight`**

## Table of contents

### Accessors

- [color](Components.PointLight.md#color)
- [intensity](Components.PointLight.md#intensity)
- [range](Components.PointLight.md#range)
- [shadows](Components.PointLight.md#shadows)

### Methods

- [Awake](Components.PointLight.md#awake)
- [Destroy](Components.PointLight.md#destroy)
- [OnDrawGizmos](Components.PointLight.md#ondrawgizmos)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/PointLight.ts:24](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L24)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:28](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L28)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:33](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L33)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:37](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L37)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:15](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L15)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:19](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L19)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/PointLight.ts:42](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L42)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:46](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L46)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/PointLight.ts:50](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L50)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/PointLight.ts:64](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L64)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/PointLight.ts:55](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/PointLight.ts#L55)
