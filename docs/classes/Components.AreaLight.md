[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / AreaLight

# Class: AreaLight

[Components](../modules/Components.md).AreaLight

A rectangle area light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`AreaLight`**

## Table of contents

### Constructors

- [constructor](Components.AreaLight.md#constructor)

### Accessors

- [color](Components.AreaLight.md#color)
- [height](Components.AreaLight.md#height)
- [intensity](Components.AreaLight.md#intensity)
- [shadows](Components.AreaLight.md#shadows)
- [width](Components.AreaLight.md#width)

### Methods

- [Destroy](Components.AreaLight.md#destroy)
- [OnDrawGizmos](Components.AreaLight.md#ondrawgizmos)

## Constructors

### constructor

• **new AreaLight**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/AreaLight.ts:64](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L64)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/AreaLight.ts:38](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L38)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:42](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L42)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:29](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L29)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:33](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L33)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:47](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L47)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:51](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L51)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/AreaLight.ts:56](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L56)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:60](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L60)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[components/AreaLight.ts:20](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L20)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[components/AreaLight.ts:24](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L24)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/AreaLight.ts:81](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L81)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/AreaLight.ts:73](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/AreaLight.ts#L73)
