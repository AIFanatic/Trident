[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / AreaLight

# Class: AreaLight

[Components](../modules/Components.md).AreaLight

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`AreaLight`**

## Table of contents

### Constructors

- [constructor](Components.AreaLight.md#constructor)

### Properties

- [classname](Components.AreaLight.md#classname)
- [classtype](Components.AreaLight.md#classtype)
- [gameObject](Components.AreaLight.md#gameobject)
- [hasStarted](Components.AreaLight.md#hasstarted)
- [name](Components.AreaLight.md#name)
- [transform](Components.AreaLight.md#transform)
- [uuid](Components.AreaLight.md#uuid)

### Accessors

- [color](Components.AreaLight.md#color)
- [height](Components.AreaLight.md#height)
- [intensity](Components.AreaLight.md#intensity)
- [shadows](Components.AreaLight.md#shadows)
- [width](Components.AreaLight.md#width)

### Methods

- [Destroy](Components.AreaLight.md#destroy)
- [FixedUpdate](Components.AreaLight.md#fixedupdate)
- [LateUpdate](Components.AreaLight.md#lateupdate)
- [OnDisable](Components.AreaLight.md#ondisable)
- [OnDrawGizmos](Components.AreaLight.md#ondrawgizmos)
- [OnEnable](Components.AreaLight.md#onenable)
- [OnGizmosDisabled](Components.AreaLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.AreaLight.md#ongizmosenabled)
- [Start](Components.AreaLight.md#start)
- [Stop](Components.AreaLight.md#stop)
- [Update](Components.AreaLight.md#update)

## Constructors

### constructor

• **new AreaLight**(`gameObject`, `transform`)

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

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

components/AreaLight.ts:27

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

components/AreaLight.ts:31

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

components/AreaLight.ts:19

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

components/AreaLight.ts:23

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

components/AreaLight.ts:35

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

components/AreaLight.ts:39

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/AreaLight.ts:43

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

components/AreaLight.ts:47

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

components/AreaLight.ts:11

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

components/AreaLight.ts:15

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

components/AreaLight.ts:81

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

#### Overrides

[Component](Components.Component.md).[OnDrawGizmos](Components.Component.md#ondrawgizmos)

#### Defined in

components/AreaLight.ts:67

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

components/AreaLight.ts:51

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

components/AreaLight.ts:73

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

components/AreaLight.ts:60

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
