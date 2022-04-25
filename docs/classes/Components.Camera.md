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

[components/Camera.ts:52](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L52)

## Accessors

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:23](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L23)

• `set` **far**(`far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:27](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L27)

___

### fieldOfView

• `get` **fieldOfView**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:43](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L43)

• `set` **fieldOfView**(`fieldOfView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOfView` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:47](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L47)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:33](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L33)

• `set` **near**(`near`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:37](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L37)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Camera.ts:82](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L82)

___

### GetCamera

▸ **GetCamera**(): `PerspectiveCamera`

#### Returns

`PerspectiveCamera`

#### Defined in

[components/Camera.ts:63](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L63)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Camera.ts:73](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L73)

___

### OnResize

▸ **OnResize**(): `void`

#### Returns

`void`

#### Defined in

[components/Camera.ts:67](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/Camera.ts#L67)
