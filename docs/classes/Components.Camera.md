[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Camera

# Class: Camera

[Components](../modules/Components.md).Camera

Camera allows to create multiple cameras for the same scene.

Use scene.SetActiveCamera(camera) to set it as the main camera.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Camera`**

## Table of contents

### Accessors

- [far](Components.Camera.md#far)
- [fieldOfView](Components.Camera.md#fieldofview)
- [near](Components.Camera.md#near)

### Methods

- [Awake](Components.Camera.md#awake)
- [Destroy](Components.Camera.md#destroy)
- [GetCamera](Components.Camera.md#getcamera)
- [OnDrawGizmos](Components.Camera.md#ondrawgizmos)
- [OnResize](Components.Camera.md#onresize)

## Accessors

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:22](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L22)

• `set` **far**(`far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:26](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L26)

___

### fieldOfView

• `get` **fieldOfView**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:42](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L42)

• `set` **fieldOfView**(`fieldOfView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOfView` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:46](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L46)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:32](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L32)

• `set` **near**(`near`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:36](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L36)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/Camera.ts:51](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L51)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Camera.ts:79](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L79)

___

### GetCamera

▸ **GetCamera**(): `PerspectiveCamera`

#### Returns

`PerspectiveCamera`

#### Defined in

[components/Camera.ts:60](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L60)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Camera.ts:70](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L70)

___

### OnResize

▸ **OnResize**(): `void`

#### Returns

`void`

#### Defined in

[components/Camera.ts:64](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/Camera.ts#L64)
