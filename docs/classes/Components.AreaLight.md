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

- [Destroy](Components.AreaLight.md#destroy)
- [OnDrawGizmos](Components.AreaLight.md#ondrawgizmos)
- [OnEnable](Components.AreaLight.md#onenable)
- [OnGizmosDisabled](Components.AreaLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.AreaLight.md#ongizmosenabled)

## Accessors

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:32](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L32)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:36](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L36)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:24](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L24)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:28](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L28)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:40](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L40)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:44](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L44)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/AreaLight.ts:48](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L48)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:52](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L52)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:16](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L16)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:20](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L20)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/AreaLight.ts:86](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L86)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/AreaLight.ts:72](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L72)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/AreaLight.ts:56](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L56)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/AreaLight.ts:78](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L78)

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

Called once when Gizmos are enabled.
If Gizmos are enabled before the component is created this method is called once after Start.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosEnabled](Components.Component.md#ongizmosenabled)

#### Defined in

[components/AreaLight.ts:65](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/AreaLight.ts#L65)
