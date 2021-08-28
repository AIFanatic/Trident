[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / SphereCollider

# Class: SphereCollider

[Components](../modules/Components.md).SphereCollider

## Hierarchy

- `Collider`

  ↳ **`SphereCollider`**

## Table of contents

### Constructors

- [constructor](Components.SphereCollider.md#constructor)

### Properties

- [body](Components.SphereCollider.md#body)
- [classname](Components.SphereCollider.md#classname)
- [classtype](Components.SphereCollider.md#classtype)
- [gameObject](Components.SphereCollider.md#gameobject)
- [hasStarted](Components.SphereCollider.md#hasstarted)
- [name](Components.SphereCollider.md#name)
- [transform](Components.SphereCollider.md#transform)
- [uuid](Components.SphereCollider.md#uuid)

### Methods

- [Destroy](Components.SphereCollider.md#destroy)
- [FixedUpdate](Components.SphereCollider.md#fixedupdate)
- [LateUpdate](Components.SphereCollider.md#lateupdate)
- [OnDisable](Components.SphereCollider.md#ondisable)
- [OnDrawGizmos](Components.SphereCollider.md#ondrawgizmos)
- [OnEnable](Components.SphereCollider.md#onenable)
- [OnGizmosDisabled](Components.SphereCollider.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.SphereCollider.md#ongizmosenabled)
- [Start](Components.SphereCollider.md#start)
- [Stop](Components.SphereCollider.md#stop)
- [Update](Components.SphereCollider.md#update)

## Constructors

### constructor

• **new SphereCollider**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Inherited from

Collider.constructor

#### Defined in

components/Component.ts:57

## Properties

### body

• **body**: `PhysicsRigidbody`

#### Inherited from

Collider.body

#### Defined in

components/Collider.ts:11

___

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Inherited from

Collider.classname

#### Defined in

components/Component.ts:35

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Inherited from

Collider.classtype

#### Defined in

components/Component.ts:30

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Inherited from

Collider.gameObject

#### Defined in

components/Component.ts:45

___

### hasStarted

• **hasStarted**: `boolean`

**`todo`** Indicates that this component has started.

#### Inherited from

Collider.hasStarted

#### Defined in

components/Component.ts:55

___

### name

• **name**: `string`

Name of the component.

#### Inherited from

Collider.name

#### Defined in

components/Component.ts:40

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Inherited from

Collider.transform

#### Defined in

components/Component.ts:50

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Inherited from

Collider.uuid

#### Defined in

components/Component.ts:25

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Inherited from

Collider.Destroy

#### Defined in

components/Collider.ts:74

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

Collider.FixedUpdate

#### Defined in

components/Collider.ts:56

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Inherited from

Collider.LateUpdate

#### Defined in

components/Component.ts:101

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Inherited from

Collider.OnDisable

#### Defined in

components/Component.ts:71

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Inherited from

Collider.OnDrawGizmos

#### Defined in

components/Component.ts:120

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Overrides

Collider.OnEnable

#### Defined in

components/SphereCollider.ts:13

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Inherited from

Collider.OnGizmosDisabled

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

Collider.OnGizmosEnabled

#### Defined in

components/Component.ts:108

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Inherited from

Collider.Start

#### Defined in

components/Collider.ts:43

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Inherited from

Collider.Stop

#### Defined in

components/Component.ts:83

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Inherited from

Collider.Update

#### Defined in

components/Component.ts:95
