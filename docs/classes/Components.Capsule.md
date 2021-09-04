[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Capsule

# Class: Capsule

[Components](../modules/Components.md).Capsule

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Capsule`**

## Table of contents

### Constructors

- [constructor](Components.Capsule.md#constructor)

### Properties

- [classname](Components.Capsule.md#classname)
- [classtype](Components.Capsule.md#classtype)
- [gameObject](Components.Capsule.md#gameobject)
- [hasStarted](Components.Capsule.md#hasstarted)
- [name](Components.Capsule.md#name)
- [transform](Components.Capsule.md#transform)
- [uuid](Components.Capsule.md#uuid)

### Methods

- [Destroy](Components.Capsule.md#destroy)
- [FixedUpdate](Components.Capsule.md#fixedupdate)
- [LateUpdate](Components.Capsule.md#lateupdate)
- [OnDisable](Components.Capsule.md#ondisable)
- [OnDrawGizmos](Components.Capsule.md#ondrawgizmos)
- [OnEnable](Components.Capsule.md#onenable)
- [OnGizmosDisabled](Components.Capsule.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.Capsule.md#ongizmosenabled)
- [Start](Components.Capsule.md#start)
- [Stop](Components.Capsule.md#stop)
- [Update](Components.Capsule.md#update)

## Constructors

### constructor

• **new Capsule**(`gameObject`, `transform`)

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

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Component.ts:126](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L126)

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

#### Inherited from

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/Component.ts:120](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L120)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Capsule.ts:9](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Capsule.ts#L9)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Inherited from

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

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

[Component](Components.Component.md).[OnGizmosEnabled](Components.Component.md#ongizmosenabled)

#### Defined in

[components/Component.ts:108](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Component.ts#L108)

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
