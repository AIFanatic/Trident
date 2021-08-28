[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / LineRenderer

# Class: LineRenderer

[Components](../modules/Components.md).LineRenderer

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`LineRenderer`**

## Table of contents

### Constructors

- [constructor](Components.LineRenderer.md#constructor)

### Properties

- [classname](Components.LineRenderer.md#classname)
- [classtype](Components.LineRenderer.md#classtype)
- [color](Components.LineRenderer.md#color)
- [from](Components.LineRenderer.md#from)
- [gameObject](Components.LineRenderer.md#gameobject)
- [hasStarted](Components.LineRenderer.md#hasstarted)
- [name](Components.LineRenderer.md#name)
- [to](Components.LineRenderer.md#to)
- [transform](Components.LineRenderer.md#transform)
- [uuid](Components.LineRenderer.md#uuid)

### Methods

- [Destroy](Components.LineRenderer.md#destroy)
- [FixedUpdate](Components.LineRenderer.md#fixedupdate)
- [LateUpdate](Components.LineRenderer.md#lateupdate)
- [OnDisable](Components.LineRenderer.md#ondisable)
- [OnDrawGizmos](Components.LineRenderer.md#ondrawgizmos)
- [OnEnable](Components.LineRenderer.md#onenable)
- [OnGizmosDisabled](Components.LineRenderer.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.LineRenderer.md#ongizmosenabled)
- [Start](Components.LineRenderer.md#start)
- [Stop](Components.LineRenderer.md#stop)
- [Update](Components.LineRenderer.md#update)

## Constructors

### constructor

• **new LineRenderer**(`gameObject`, `transform`)

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

### color

• **color**: `number` = `0xffffff`

#### Defined in

components/LineRenderer.ts:9

___

### from

• **from**: `Vector3`

#### Defined in

components/LineRenderer.ts:7

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

### name

• **name**: `string`

Name of the component.

#### Inherited from

[Component](Components.Component.md).[name](Components.Component.md#name)

#### Defined in

components/Component.ts:40

___

### to

• **to**: `Vector3`

#### Defined in

components/LineRenderer.ts:8

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

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

components/LineRenderer.ts:44

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

components/LineRenderer.ts:18

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

#### Inherited from

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

components/Component.ts:77

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

components/LineRenderer.ts:28
