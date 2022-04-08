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

- [Destroy](Components.PointLight.md#destroy)
- [OnDrawGizmos](Components.PointLight.md#ondrawgizmos)
- [OnEnable](Components.PointLight.md#onenable)
- [OnGizmosDisabled](Components.PointLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.PointLight.md#ongizmosenabled)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/PointLight.ts:24](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L24)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:28](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L28)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:33](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L33)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:37](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L37)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:15](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L15)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:19](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L19)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/PointLight.ts:42](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L42)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:46](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L46)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/PointLight.ts:77](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L77)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/PointLight.ts:63](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L63)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/PointLight.ts:50](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L50)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/PointLight.ts:69](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L69)

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

[components/PointLight.ts:56](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/PointLight.ts#L56)
