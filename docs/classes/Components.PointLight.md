[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / PointLight

# Class: PointLight

[Components](../modules/Components.md).PointLight

A point light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`PointLight`**

## Table of contents

### Constructors

- [constructor](Components.PointLight.md#constructor)

### Accessors

- [color](Components.PointLight.md#color)
- [intensity](Components.PointLight.md#intensity)
- [range](Components.PointLight.md#range)
- [shadows](Components.PointLight.md#shadows)

### Methods

- [Destroy](Components.PointLight.md#destroy)
- [OnDrawGizmos](Components.PointLight.md#ondrawgizmos)

## Constructors

### constructor

• **new PointLight**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/PointLight.ts:52](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L52)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/PointLight.ts:26](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L26)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:30](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L30)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:35](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L35)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:39](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L39)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/PointLight.ts:17](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L17)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:21](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L21)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/PointLight.ts:44](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L44)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/PointLight.ts:48](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L48)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/PointLight.ts:67](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L67)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/PointLight.ts:58](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/PointLight.ts#L58)
