[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Gizmo

# Class: Gizmo

[Components](../modules/Components.md).Gizmo

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Gizmo`**

## Table of contents

### Constructors

- [constructor](Components.Gizmo.md#constructor)

### Properties

- [classname](Components.Gizmo.md#classname)
- [classtype](Components.Gizmo.md#classtype)
- [gameObject](Components.Gizmo.md#gameobject)
- [hasStarted](Components.Gizmo.md#hasstarted)
- [length](Components.Gizmo.md#length)
- [name](Components.Gizmo.md#name)
- [target](Components.Gizmo.md#target)
- [transform](Components.Gizmo.md#transform)
- [uuid](Components.Gizmo.md#uuid)

### Methods

- [Destroy](Components.Gizmo.md#destroy)
- [FixedUpdate](Components.Gizmo.md#fixedupdate)
- [LateUpdate](Components.Gizmo.md#lateupdate)
- [OnDisable](Components.Gizmo.md#ondisable)
- [OnDrawGizmos](Components.Gizmo.md#ondrawgizmos)
- [OnEnable](Components.Gizmo.md#onenable)
- [OnGizmosDisabled](Components.Gizmo.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.Gizmo.md#ongizmosenabled)
- [Start](Components.Gizmo.md#start)
- [Stop](Components.Gizmo.md#stop)
- [Update](Components.Gizmo.md#update)

## Constructors

### constructor

• **new Gizmo**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Inherited from

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

components/Component.ts:57

## Properties

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Inherited from

[Component](Components.Component.md).[classname](Components.Component.md#classname)

#### Defined in

components/Component.ts:35

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Inherited from

[Component](Components.Component.md).[classtype](Components.Component.md#classtype)

#### Defined in

components/Component.ts:30

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Inherited from

[Component](Components.Component.md).[gameObject](Components.Component.md#gameobject)

#### Defined in

components/Component.ts:45

___

### hasStarted

• **hasStarted**: `boolean`

**`todo`** Indicates that this component has started.

#### Inherited from

[Component](Components.Component.md).[hasStarted](Components.Component.md#hasstarted)

#### Defined in

components/Component.ts:55

___

### length

• **length**: `number` = `20`

#### Defined in

components/Gizmo.ts:11

___

### name

• **name**: `string`

Name of the component.

#### Inherited from

[Component](Components.Component.md).[name](Components.Component.md#name)

#### Defined in

components/Component.ts:40

___

### target

• **target**: [`Transform`](Components.Transform.md)

#### Defined in

components/Gizmo.ts:13

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Inherited from

[Component](Components.Component.md).[transform](Components.Component.md#transform)

#### Defined in

components/Component.ts:50

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Inherited from

[Component](Components.Component.md).[uuid](Components.Component.md#uuid)

#### Defined in

components/Component.ts:25

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

components/Component.ts:126

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

components/Component.ts:89

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[LateUpdate](Components.Component.md#lateupdate)

#### Defined in

components/Component.ts:101

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnDisable](Components.Component.md#ondisable)

#### Defined in

components/Component.ts:71

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

components/Component.ts:120

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

components/Gizmo.ts:15

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

components/Component.ts:114

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

Called once when Gizmos are enabled.
If Gizmos are enabled before the component is created this method is called once after Start.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnGizmosEnabled](Components.Component.md#ongizmosenabled)

#### Defined in

components/Component.ts:108

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

components/Gizmo.ts:25

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Stop](Components.Component.md#stop)

#### Defined in

components/Component.ts:83

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

components/Gizmo.ts:31
