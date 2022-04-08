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

- [Destroy](Components.Camera.md#destroy)
- [GetCamera](Components.Camera.md#getcamera)
- [OnDrawGizmos](Components.Camera.md#ondrawgizmos)
- [OnEnable](Components.Camera.md#onenable)
- [OnGizmosDisabled](Components.Camera.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.Camera.md#ongizmosenabled)

## Accessors

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:35](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L35)

• `set` **far**(`far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:39](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L39)

___

### fieldOfView

• `get` **fieldOfView**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:55](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L55)

• `set` **fieldOfView**(`fieldOfView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOfView` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:59](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L59)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:45](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L45)

• `set` **near**(`near`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:49](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L49)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Camera.ts:103](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L103)

___

### GetCamera

▸ **GetCamera**(): `PerspectiveCamera`

#### Returns

`PerspectiveCamera`

#### Defined in

[components/Camera.ts:79](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L79)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Camera.ts:90](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L90)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Camera.ts:64](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L64)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/Camera.ts:96](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L96)

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

[components/Camera.ts:83](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Camera.ts#L83)
