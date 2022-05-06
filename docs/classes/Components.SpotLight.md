[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / SpotLight

# Class: SpotLight

[Components](../modules/Components.md).SpotLight

A spot light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`SpotLight`**

## Table of contents

### Constructors

- [constructor](Components.SpotLight.md#constructor)

### Accessors

- [color](Components.SpotLight.md#color)
- [intensity](Components.SpotLight.md#intensity)
- [range](Components.SpotLight.md#range)
- [shadows](Components.SpotLight.md#shadows)
- [spotAngle](Components.SpotLight.md#spotangle)

### Methods

- [Destroy](Components.SpotLight.md#destroy)
- [OnDrawGizmos](Components.SpotLight.md#ondrawgizmos)
- [OnGizmosEnabled](Components.SpotLight.md#ongizmosenabled)

## Constructors

### constructor

• **new SpotLight**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/SpotLight.ts:61](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L61)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/SpotLight.ts:35](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L35)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:39](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L39)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:44](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L44)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:48](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L48)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:26](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L26)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:30](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L30)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/SpotLight.ts:53](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L53)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:57](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L57)

___

### spotAngle

• `get` **spotAngle**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:17](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L17)

• `set` **spotAngle**(`spotAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spotAngle` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:21](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L21)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/SpotLight.ts:83](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L83)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/SpotLight.ts:74](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L74)

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

[components/SpotLight.ts:67](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/SpotLight.ts#L67)
