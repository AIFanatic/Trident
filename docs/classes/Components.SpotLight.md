[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / SpotLight

# Class: SpotLight

[Components](../modules/Components.md).SpotLight

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`SpotLight`**

## Table of contents

### Constructors

- [constructor](Components.SpotLight.md#constructor)

### Properties

- [classname](Components.SpotLight.md#classname)
- [classtype](Components.SpotLight.md#classtype)
- [gameObject](Components.SpotLight.md#gameobject)
- [hasStarted](Components.SpotLight.md#hasstarted)
- [name](Components.SpotLight.md#name)
- [transform](Components.SpotLight.md#transform)
- [uuid](Components.SpotLight.md#uuid)

### Accessors

- [color](Components.SpotLight.md#color)
- [intensity](Components.SpotLight.md#intensity)
- [range](Components.SpotLight.md#range)
- [shadows](Components.SpotLight.md#shadows)
- [spotAngle](Components.SpotLight.md#spotangle)

### Methods

- [Destroy](Components.SpotLight.md#destroy)
- [FixedUpdate](Components.SpotLight.md#fixedupdate)
- [LateUpdate](Components.SpotLight.md#lateupdate)
- [OnDisable](Components.SpotLight.md#ondisable)
- [OnDrawGizmos](Components.SpotLight.md#ondrawgizmos)
- [OnEnable](Components.SpotLight.md#onenable)
- [OnGizmosDisabled](Components.SpotLight.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.SpotLight.md#ongizmosenabled)
- [Start](Components.SpotLight.md#start)
- [Stop](Components.SpotLight.md#stop)
- [Update](Components.SpotLight.md#update)

## Constructors

### constructor

• **new SpotLight**(`gameObject`, `transform`)

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

[components/SpotLight.ts:24](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L24)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:28](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L28)

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:32](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L32)

• `set` **intensity**(`intensity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `intensity` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:36](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L36)

___

### range

• `get` **range**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:16](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L16)

• `set` **range**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:20](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L20)

___

### shadows

• `get` **shadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/SpotLight.ts:40](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L40)

• `set` **shadows**(`shadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:44](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L44)

___

### spotAngle

• `get` **spotAngle**(): `number`

#### Returns

`number`

#### Defined in

[components/SpotLight.ts:8](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L8)

• `set` **spotAngle**(`spotAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spotAngle` | `number` |

#### Returns

`void`

#### Defined in

[components/SpotLight.ts:12](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L12)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/SpotLight.ts:75](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L75)

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

[components/SpotLight.ts:61](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L61)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/SpotLight.ts:48](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L48)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnGizmosDisabled](Components.Component.md#ongizmosdisabled)

#### Defined in

[components/SpotLight.ts:67](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L67)

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

[components/SpotLight.ts:54](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/SpotLight.ts#L54)

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
