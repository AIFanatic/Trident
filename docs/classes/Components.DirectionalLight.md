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

- [Destroy](Components.DirectionalLight.md#destroy)
- [OnDrawGizmos](Components.DirectionalLight.md#ondrawgizmos)
- [OnEnable](Components.DirectionalLight.md#onenable)
- [OnGizmosDisabled](Components.DirectionalLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.DirectionalLight.md#ongizmosenabled)

## Accessors

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:13](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L13)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:17](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L17)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:21](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L21)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:25](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L25)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/DirectionalLight.ts:29](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L29)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:33](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L33)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/DirectionalLight.ts:64](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L64)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/DirectionalLight.ts:50](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L50)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/DirectionalLight.ts:37](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L37)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/DirectionalLight.ts:56](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L56)

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

[components/DirectionalLight.ts:43](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/DirectionalLight.ts#L43)
