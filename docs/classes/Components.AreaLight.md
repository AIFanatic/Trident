[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / AreaLight

# Class: AreaLight

[Components](../modules/Components.md).AreaLight

A rectangle area light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`AreaLight`**

## Table of contents

### Accessors

- [color](Components.AreaLight.md#color)
- [height](Components.AreaLight.md#height)
- [intensity](Components.AreaLight.md#intensity)
- [shadows](Components.AreaLight.md#shadows)
- [width](Components.AreaLight.md#width)

### Methods

- [Awake](Components.AreaLight.md#awake)
- [Destroy](Components.AreaLight.md#destroy)
- [OnDrawGizmos](Components.AreaLight.md#ondrawgizmos)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/AreaLight.ts:36](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L36)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:40](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L40)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:27](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L27)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:31](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L31)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:45](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L45)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:49](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L49)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/AreaLight.ts:54](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L54)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:58](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L58)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:18](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L18)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:22](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L22)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/AreaLight.ts:62](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L62)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/AreaLight.ts:78](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L78)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/AreaLight.ts:70](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/AreaLight.ts#L70)
