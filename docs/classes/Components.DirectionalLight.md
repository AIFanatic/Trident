[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / DirectionalLight

# Class: DirectionalLight

[Components](../modules/Components.md).DirectionalLight

A directional light.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`DirectionalLight`**

## Table of contents

### Constructors

- [constructor](Components.DirectionalLight.md#constructor)

### Accessors

- [color](Components.DirectionalLight.md#color)
- [intensity](Components.DirectionalLight.md#intensity)
- [shadows](Components.DirectionalLight.md#shadows)

### Methods

- [Destroy](Components.DirectionalLight.md#destroy)
- [OnDrawGizmos](Components.DirectionalLight.md#ondrawgizmos)

## Constructors

### constructor

• **new DirectionalLight**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/DirectionalLight.ts:42](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L42)

## Accessors

### color

• `get` **color**(): `Color`

#### Returns

`Color`

#### Defined in

[components/DirectionalLight.ts:16](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L16)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:20](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L20)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:25](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L25)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:29](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L29)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/DirectionalLight.ts:34](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L34)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:38](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L38)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/DirectionalLight.ts:57](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L57)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/DirectionalLight.ts:48](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/DirectionalLight.ts#L48)
