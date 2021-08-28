[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshFilter

# Class: MeshFilter

[Components](../modules/Components.md).MeshFilter

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`MeshFilter`**

## Table of contents

### Constructors

- [constructor](Components.MeshFilter.md#constructor)

### Properties

- [\_mesh](Components.MeshFilter.md#_mesh)
- [classname](Components.MeshFilter.md#classname)
- [classtype](Components.MeshFilter.md#classtype)
- [gameObject](Components.MeshFilter.md#gameobject)
- [hasStarted](Components.MeshFilter.md#hasstarted)
- [name](Components.MeshFilter.md#name)
- [transform](Components.MeshFilter.md#transform)
- [uuid](Components.MeshFilter.md#uuid)

### Accessors

- [mesh](Components.MeshFilter.md#mesh)

### Methods

- [Destroy](Components.MeshFilter.md#destroy)
- [FixedUpdate](Components.MeshFilter.md#fixedupdate)
- [LateUpdate](Components.MeshFilter.md#lateupdate)
- [OnDisable](Components.MeshFilter.md#ondisable)
- [OnDrawGizmos](Components.MeshFilter.md#ondrawgizmos)
- [OnEnable](Components.MeshFilter.md#onenable)
- [OnGizmosDisabled](Components.MeshFilter.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.MeshFilter.md#ongizmosenabled)
- [Start](Components.MeshFilter.md#start)
- [Stop](Components.MeshFilter.md#stop)
- [Update](Components.MeshFilter.md#update)

## Constructors

### constructor

• **new MeshFilter**(`gameObject`, `transform`)

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

### \_mesh

• **\_mesh**: `Geometry` \| `BufferGeometry`

#### Defined in

components/MeshFilter.ts:7

___

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

### name

• **name**: `string`

Name of the component.

#### Inherited from

[Component](Components.Component.md).[name](Components.Component.md#name)

#### Defined in

components/Component.ts:40

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

## Accessors

### mesh

• `get` **mesh**(): `Geometry` \| `BufferGeometry`

#### Returns

`Geometry` \| `BufferGeometry`

#### Defined in

components/MeshFilter.ts:12

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Geometry` \| `BufferGeometry` |

#### Returns

`void`

#### Defined in

components/MeshFilter.ts:16

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

components/MeshFilter.ts:25

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

components/MeshFilter.ts:9

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

#### Inherited from

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

components/Component.ts:95
