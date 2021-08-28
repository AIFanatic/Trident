[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Transform

# Class: Transform

[Components](../modules/Components.md).Transform

Every GameObject has a Transform.

It allows for control over the position, scale and rotation of an object.

Transforms can be have a parent which allows for simultaneous control of parents and children.

## Implements

- `IComponent`

## Table of contents

### Constructors

- [constructor](Components.Transform.md#constructor)

### Properties

- [\_parent](Components.Transform.md#_parent)
- [classtype](Components.Transform.md#classtype)
- [forward](Components.Transform.md#forward)
- [gameObject](Components.Transform.md#gameobject)
- [group](Components.Transform.md#group)
- [name](Components.Transform.md#name)
- [right](Components.Transform.md#right)
- [tag](Components.Transform.md#tag)
- [up](Components.Transform.md#up)
- [uuid](Components.Transform.md#uuid)

### Accessors

- [eulerAngles](Components.Transform.md#eulerangles)
- [localEulerAngles](Components.Transform.md#localeulerangles)
- [localPosition](Components.Transform.md#localposition)
- [localRotation](Components.Transform.md#localrotation)
- [localScale](Components.Transform.md#localscale)
- [parent](Components.Transform.md#parent)
- [position](Components.Transform.md#position)
- [rotation](Components.Transform.md#rotation)

### Methods

- [Destroy](Components.Transform.md#destroy)
- [FixedUpdate](Components.Transform.md#fixedupdate)
- [LateUpdate](Components.Transform.md#lateupdate)
- [RotateAround](Components.Transform.md#rotatearound)
- [Start](Components.Transform.md#start)
- [Stop](Components.Transform.md#stop)
- [Tick](Components.Transform.md#tick)
- [Translate](Components.Transform.md#translate)
- [Update](Components.Transform.md#update)

## Constructors

### constructor

• **new Transform**(`gameObject`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |

#### Defined in

components/Transform.ts:191

## Properties

### \_parent

• **\_parent**: [`Transform`](Components.Transform.md)

#### Defined in

components/Transform.ts:45

___

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

components/Transform.ts:24

___

### forward

• **forward**: `Vector3`

The local forward vector for this transform.

#### Defined in

components/Transform.ts:43

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

#### Defined in

components/Transform.ts:28

___

### group

• **group**: `Object3DExtended`

#### Defined in

components/Transform.ts:47

___

### name

• **name**: `string`

#### Implementation of

IComponent.name

#### Defined in

components/Transform.ts:25

___

### right

• **right**: `Vector3`

The local right vector for this transform.

#### Defined in

components/Transform.ts:38

___

### tag

• **tag**: `string` = `"Untagged"`

#### Defined in

components/Transform.ts:26

___

### up

• **up**: `Vector3`

The local up vector for this transform.

#### Defined in

components/Transform.ts:33

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

components/Transform.ts:23

## Accessors

### eulerAngles

• `get` **eulerAngles**(): `Vector3`

Get the world euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform world euler angles.

#### Defined in

components/Transform.ts:118

• `set` **eulerAngles**(`eulerAngles`): `void`

Set the world euler angles of this transform.
The euler angles are in degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eulerAngles` | `Vector3` | The world euler angles to be applied to the transform. |

#### Returns

`void`

The transform world euler angles.

#### Defined in

components/Transform.ts:127

___

### localEulerAngles

• `get` **localEulerAngles**(): `Vector3`

Get the local euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform local euler angles.

#### Defined in

components/Transform.ts:136

• `set` **localEulerAngles**(`localEulerAngles`): `void`

Set the local euler angles of this transform.
The euler angles are in degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `localEulerAngles` | `Vector3` | The local euler angles to be applied to the transform. |

#### Returns

`void`

The transform local euler angles.

#### Defined in

components/Transform.ts:145

___

### localPosition

• `get` **localPosition**(): `Vector3`

Get the local position of this transform.

#### Returns

`Vector3`

The transform local position.

#### Defined in

components/Transform.ts:69

• `set` **localPosition**(`localPosition`): `void`

Set the local position of this transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `localPosition` | `Vector3` | The local position to be applied to the transform. |

#### Returns

`void`

The transform local position.

#### Defined in

components/Transform.ts:77

___

### localRotation

• `get` **localRotation**(): `Quaternion`

Get the local rotation of this transform.

#### Returns

`Quaternion`

The transform local rotation.

#### Defined in

components/Transform.ts:101

• `set` **localRotation**(`localRotation`): `void`

Set the local rotation of this transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `localRotation` | `Quaternion` | The local rotation to be applied to the transform. |

#### Returns

`void`

The transform local rotation.

#### Defined in

components/Transform.ts:109

___

### localScale

• `get` **localScale**(): `Vector3`

Get the local scale of this transform.

#### Returns

`Vector3`

The transform local scale.

#### Defined in

components/Transform.ts:153

• `set` **localScale**(`localScale`): `void`

Set the local scale of this transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `localScale` | `Vector3` | The local scale to be applied to the transform. |

#### Returns

`void`

The transform local scale.

#### Defined in

components/Transform.ts:161

___

### parent

• `get` **parent**(): [`Transform`](Components.Transform.md)

Get the parent of this transform.

#### Returns

[`Transform`](Components.Transform.md)

The transform parent.

#### Defined in

components/Transform.ts:169

• `set` **parent**(`parent`): `void`

Set the parent of this transform.
Position, rotation and scale of this transform will be affected by the parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`Transform`](Components.Transform.md) | Parent transform. |

#### Returns

`void`

The transform parent.

#### Defined in

components/Transform.ts:178

___

### position

• `get` **position**(): `Vector3`

Get the world position of this transform.

#### Returns

`Vector3`

The transform world position.

#### Defined in

components/Transform.ts:53

• `set` **position**(`position`): `void`

Set the world position of this transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `Vector3` | The world position to be applied to the transform. |

#### Returns

`void`

The transform world position.

#### Defined in

components/Transform.ts:61

___

### rotation

• `get` **rotation**(): `Quaternion`

Get the world rotation of this transform.

#### Returns

`Quaternion`

The transform world rotation.

#### Defined in

components/Transform.ts:85

• `set` **rotation**(`rotation`): `void`

Set the world rotation of this transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | `Quaternion` | The world rotation to be applied to the transform. |

#### Returns

`void`

The transform world rotation.

#### Defined in

components/Transform.ts:93

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:251

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:228

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:231

___

### RotateAround

▸ **RotateAround**(`point`, `axis`, `angle`): `void`

Rotates transform around a point.
This method changes both the transform position and rotation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | Point in world space |
| `axis` | `Vector3` | Rotation axis |
| `angle` | `number` | Angle in degrees |

#### Returns

`void`

#### Defined in

components/Transform.ts:214

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:245

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:248

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:225

___

### Translate

▸ **Translate**(`translation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translation` | `Vector3` |

#### Returns

`void`

#### Defined in

components/Transform.ts:200

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:234
