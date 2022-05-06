[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Camera

# Class: Camera

[Components](../modules/Components.md).Camera

Camera allows to create multiple cameras for the same scene.

Use scene.SetActiveCamera(camera) to set it as the main camera.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Camera`**

## Table of contents

### Constructors

- [constructor](Components.Camera.md#constructor)

### Accessors

- [far](Components.Camera.md#far)
- [fieldOfView](Components.Camera.md#fieldofview)
- [near](Components.Camera.md#near)

### Methods

- [Destroy](Components.Camera.md#destroy)
- [GetCamera](Components.Camera.md#getcamera)
- [OnDrawGizmos](Components.Camera.md#ondrawgizmos)
- [OnResize](Components.Camera.md#onresize)

## Constructors

### constructor

• **new Camera**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/Camera.ts:53](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L53)

## Accessors

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:24](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L24)

• `set` **far**(`far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:28](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L28)

___

### fieldOfView

• `get` **fieldOfView**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:44](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L44)

• `set` **fieldOfView**(`fieldOfView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOfView` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:48](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L48)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:34](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L34)

• `set` **near**(`near`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:38](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L38)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Camera.ts:81](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L81)

___

### GetCamera

▸ **GetCamera**(): `PerspectiveCamera`

#### Returns

`PerspectiveCamera`

#### Defined in

[components/Camera.ts:62](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L62)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Camera.ts:72](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L72)

___

### OnResize

▸ **OnResize**(): `void`

#### Returns

`void`

#### Defined in

[components/Camera.ts:66](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Camera.ts#L66)
