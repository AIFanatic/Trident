[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Camera

# Class: Camera

[Components](../modules/Components.md).Camera

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Camera`**

## Table of contents

### Constructors

- [constructor](Components.Camera.md#constructor)

### Properties

- [classname](Components.Camera.md#classname)
- [classtype](Components.Camera.md#classtype)
- [gameObject](Components.Camera.md#gameobject)
- [hasStarted](Components.Camera.md#hasstarted)
- [name](Components.Camera.md#name)
- [transform](Components.Camera.md#transform)
- [uuid](Components.Camera.md#uuid)

### Accessors

- [far](Components.Camera.md#far)
- [fieldOfView](Components.Camera.md#fieldofview)
- [near](Components.Camera.md#near)

### Methods

- [Destroy](Components.Camera.md#destroy)
- [FixedUpdate](Components.Camera.md#fixedupdate)
- [GetCamera](Components.Camera.md#getcamera)
- [LateUpdate](Components.Camera.md#lateupdate)
- [OnDisable](Components.Camera.md#ondisable)
- [OnDrawGizmos](Components.Camera.md#ondrawgizmos)
- [OnEnable](Components.Camera.md#onenable)
- [OnGizmosDisabled](Components.Camera.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.Camera.md#ongizmosenabled)
- [Start](Components.Camera.md#start)
- [Stop](Components.Camera.md#stop)
- [Update](Components.Camera.md#update)

## Constructors

### constructor

• **new Camera**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Inherited from

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/Component.ts:57](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L57)

## Properties

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Inherited from

[Component](Components.Component.md).[classname](Components.Component.md#classname)

#### Defined in

[components/Component.ts:35](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L35)

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Inherited from

[Component](Components.Component.md).[classtype](Components.Component.md#classtype)

#### Defined in

[components/Component.ts:30](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L30)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Inherited from

[Component](Components.Component.md).[gameObject](Components.Component.md#gameobject)

#### Defined in

[components/Component.ts:45](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L45)

___

### hasStarted

• **hasStarted**: `boolean`

**`todo`** Indicates that this component has started.

#### Inherited from

[Component](Components.Component.md).[hasStarted](Components.Component.md#hasstarted)

#### Defined in

[components/Component.ts:55](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L55)

___

### name

• **name**: `string`

Name of the component.

#### Inherited from

[Component](Components.Component.md).[name](Components.Component.md#name)

#### Defined in

[components/Component.ts:40](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L40)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Inherited from

[Component](Components.Component.md).[transform](Components.Component.md#transform)

#### Defined in

[components/Component.ts:50](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L50)

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Inherited from

[Component](Components.Component.md).[uuid](Components.Component.md#uuid)

#### Defined in

[components/Component.ts:25](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L25)

## Accessors

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:25](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L25)

• `set` **far**(`far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:29](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L29)

___

### fieldOfView

• `get` **fieldOfView**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:43](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L43)

• `set` **fieldOfView**(`fieldOfView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldOfView` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:47](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L47)

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

[components/Camera.ts:34](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L34)

• `set` **near**(`near`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |

#### Returns

`void`

#### Defined in

[components/Camera.ts:38](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L38)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Camera.ts:91](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L91)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Component.ts:89](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L89)

___

### GetCamera

▸ **GetCamera**(): `PerspectiveCamera`

#### Returns

`PerspectiveCamera`

#### Defined in

[components/Camera.ts:67](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L67)

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[LateUpdate](Components.Component.md#lateupdate)

#### Defined in

[components/Component.ts:101](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L101)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnDisable](Components.Component.md#ondisable)

#### Defined in

[components/Component.ts:71](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L71)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Camera.ts:78](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L78)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Camera.ts:52](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L52)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/Camera.ts:84](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L84)

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

[components/Camera.ts:71](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Camera.ts#L71)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Component.ts:77](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L77)

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Stop](Components.Component.md#stop)

#### Defined in

[components/Component.ts:83](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L83)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

[components/Component.ts:95](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L95)
