[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / PlaneCollider

# Class: PlaneCollider

[Components](../modules/Components.md).PlaneCollider

## Hierarchy

- `Collider`

  ↳ **`PlaneCollider`**

## Table of contents

### Constructors

- [constructor](Components.PlaneCollider.md#constructor)

### Properties

- [body](Components.PlaneCollider.md#body)
- [classname](Components.PlaneCollider.md#classname)
- [classtype](Components.PlaneCollider.md#classtype)
- [gameObject](Components.PlaneCollider.md#gameobject)
- [hasStarted](Components.PlaneCollider.md#hasstarted)
- [name](Components.PlaneCollider.md#name)
- [transform](Components.PlaneCollider.md#transform)
- [uuid](Components.PlaneCollider.md#uuid)

### Methods

- [Destroy](Components.PlaneCollider.md#destroy)
- [FixedUpdate](Components.PlaneCollider.md#fixedupdate)
- [LateUpdate](Components.PlaneCollider.md#lateupdate)
- [OnDisable](Components.PlaneCollider.md#ondisable)
- [OnDrawGizmos](Components.PlaneCollider.md#ondrawgizmos)
- [OnEnable](Components.PlaneCollider.md#onenable)
- [OnGizmosDisabled](Components.PlaneCollider.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.PlaneCollider.md#ongizmosenabled)
- [Start](Components.PlaneCollider.md#start)
- [Stop](Components.PlaneCollider.md#stop)
- [Update](Components.PlaneCollider.md#update)

## Constructors

### constructor

• **new PlaneCollider**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Inherited from

Collider.constructor

#### Defined in

[components/Component.ts:57](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L57)

## Properties

### body

• **body**: `PhysicsRigidbody`

#### Inherited from

Collider.body

#### Defined in

[components/Collider.ts:11](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Collider.ts#L11)

___

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Inherited from

Collider.classname

#### Defined in

[components/Component.ts:35](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L35)

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Inherited from

Collider.classtype

#### Defined in

[components/Component.ts:30](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L30)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Inherited from

Collider.gameObject

#### Defined in

[components/Component.ts:45](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L45)

___

### hasStarted

• **hasStarted**: `boolean`

**`todo`** Indicates that this component has started.

#### Inherited from

Collider.hasStarted

#### Defined in

[components/Component.ts:55](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L55)

___

### name

• **name**: `string`

Name of the component.

#### Inherited from

Collider.name

#### Defined in

[components/Component.ts:40](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L40)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Inherited from

Collider.transform

#### Defined in

[components/Component.ts:50](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L50)

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Inherited from

Collider.uuid

#### Defined in

[components/Component.ts:25](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L25)

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Inherited from

Collider.Destroy

#### Defined in

[components/Collider.ts:74](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Collider.ts#L74)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

Collider.FixedUpdate

#### Defined in

[components/Collider.ts:56](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Collider.ts#L56)

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Inherited from

Collider.LateUpdate

#### Defined in

[components/Component.ts:101](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L101)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Inherited from

Collider.OnDisable

#### Defined in

[components/Component.ts:71](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L71)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Inherited from

Collider.OnDrawGizmos

#### Defined in

[components/Component.ts:120](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L120)

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Overrides

Collider.OnEnable

#### Defined in

[components/PlaneCollider.ts:9](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/PlaneCollider.ts#L9)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Inherited from

Collider.OnGizmosDisabled

#### Defined in

[components/Component.ts:114](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L114)

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

[components/Component.ts:108](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L108)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Inherited from

Collider.Start

#### Defined in

[components/Collider.ts:43](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Collider.ts#L43)

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Inherited from

Collider.Stop

#### Defined in

[components/Component.ts:83](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L83)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Overrides

Collider.Update

#### Defined in

[components/PlaneCollider.ts:36](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/PlaneCollider.ts#L36)
