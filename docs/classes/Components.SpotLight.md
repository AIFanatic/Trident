[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / SpotLight

# Class: SpotLight

[Components](../modules/Components.md).SpotLight

A spot light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`SpotLight`**

## Table of contents

### Accessors

- [color](Components.SpotLight.md#color)
- [intensity](Components.SpotLight.md#intensity)
- [range](Components.SpotLight.md#range)
- [shadows](Components.SpotLight.md#shadows)
- [spotAngle](Components.SpotLight.md#spotangle)

### Methods

- [Awake](Components.SpotLight.md#awake)
- [Destroy](Components.SpotLight.md#destroy)
- [OnDrawGizmos](Components.SpotLight.md#ondrawgizmos)
- [OnGizmosEnabled](Components.SpotLight.md#ongizmosenabled)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/SpotLight.ts:33](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L33)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:37](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L37)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:42](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L42)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:46](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L46)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:24](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L24)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:28](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L28)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/SpotLight.ts:51](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L51)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:55](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L55)

___

### spotAngle

• `get` **spotAngle**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:15](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L15)

• `set` **spotAngle**(`spotAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spotAngle` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:19](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L19)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/SpotLight.ts:59](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L59)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/SpotLight.ts:80](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L80)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/SpotLight.ts:71](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L71)

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

[components/SpotLight.ts:64](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/SpotLight.ts#L64)
