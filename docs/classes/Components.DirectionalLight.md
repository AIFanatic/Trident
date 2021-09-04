[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / DirectionalLight

# Class: DirectionalLight

[Components](../modules/Components.md).DirectionalLight

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`DirectionalLight`**

## Table of contents

### Constructors

- [constructor](Components.DirectionalLight.md#constructor)

### Properties

- [classname](Components.DirectionalLight.md#classname)
- [classtype](Components.DirectionalLight.md#classtype)
- [gameObject](Components.DirectionalLight.md#gameobject)
- [hasStarted](Components.DirectionalLight.md#hasstarted)
- [name](Components.DirectionalLight.md#name)
- [transform](Components.DirectionalLight.md#transform)
- [uuid](Components.DirectionalLight.md#uuid)

### Accessors

- [color](Components.DirectionalLight.md#color)
- [intensity](Components.DirectionalLight.md#intensity)
- [shadows](Components.DirectionalLight.md#shadows)

### Methods

- [Destroy](Components.DirectionalLight.md#destroy)
- [FixedUpdate](Components.DirectionalLight.md#fixedupdate)
- [LateUpdate](Components.DirectionalLight.md#lateupdate)
- [OnDisable](Components.DirectionalLight.md#ondisable)
- [OnDrawGizmos](Components.DirectionalLight.md#ondrawgizmos)
- [OnEnable](Components.DirectionalLight.md#onenable)
- [OnGizmosDisabled](Components.DirectionalLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.DirectionalLight.md#ongizmosenabled)
- [Start](Components.DirectionalLight.md#start)
- [Stop](Components.DirectionalLight.md#stop)
- [Update](Components.DirectionalLight.md#update)

## Constructors

### constructor

• **new DirectionalLight**(`gameObject`, `transform`)

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

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:8](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L8)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:12](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L12)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/DirectionalLight.ts:16](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L16)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:20](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L20)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/DirectionalLight.ts:24](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L24)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/DirectionalLight.ts:28](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L28)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/DirectionalLight.ts:59](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L59)

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

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

[components/DirectionalLight.ts:45](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L45)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/DirectionalLight.ts:32](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L32)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/DirectionalLight.ts:51](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L51)

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

[components/DirectionalLight.ts:38](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/DirectionalLight.ts#L38)

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
