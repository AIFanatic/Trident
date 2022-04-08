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

[components/Transform.ts:195](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L195)

## Properties

### \_parent

• **\_parent**: [`Transform`](Components.Transform.md)

#### Defined in

[components/Transform.ts:46](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L46)

___

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/Transform.ts:25](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L25)

___

### forward

• **forward**: `Vector3`

The local forward vector for this transform.

#### Defined in

[components/Transform.ts:44](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L44)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

#### Defined in

[components/Transform.ts:29](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L29)

___

### group

• **group**: `Object3DExtended`

#### Defined in

[components/Transform.ts:48](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L48)

___

### name

• **name**: `string`

#### Defined in

[components/Transform.ts:26](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L26)

___

### right

• **right**: `Vector3`

The local right vector for this transform.

#### Defined in

[components/Transform.ts:39](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L39)

___

### tag

• **tag**: `string` = `"Untagged"`

#### Defined in

[components/Transform.ts:27](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L27)

___

### up

• **up**: `Vector3`

The local up vector for this transform.

#### Defined in

[components/Transform.ts:34](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L34)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/Transform.ts:24](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L24)

## Accessors

### eulerAngles

• `get` **eulerAngles**(): `Vector3`

Get the world euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform world euler angles.

#### Defined in

[components/Transform.ts:120](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L120)

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

[components/Transform.ts:129](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L129)

___

### localEulerAngles

• `get` **localEulerAngles**(): `Vector3`

Get the local euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform local euler angles.

#### Defined in

[components/Transform.ts:139](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L139)

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

[components/Transform.ts:148](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L148)

___

### localPosition

• `get` **localPosition**(): `Vector3`

Get the local position of this transform.

#### Returns

`Vector3`

The transform local position.

#### Defined in

[components/Transform.ts:71](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L71)

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

[components/Transform.ts:79](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L79)

___

### localRotation

• `get` **localRotation**(): `Quaternion`

Get the local rotation of this transform.

#### Returns

`Quaternion`

The transform local rotation.

#### Defined in

[components/Transform.ts:103](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L103)

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

[components/Transform.ts:111](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L111)

___

### localScale

• `get` **localScale**(): `Vector3`

Get the local scale of this transform.

#### Returns

`Vector3`

The transform local scale.

#### Defined in

[components/Transform.ts:157](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L157)

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

[components/Transform.ts:165](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L165)

___

### parent

• `get` **parent**(): [`Transform`](Components.Transform.md)

Get the parent of this transform.

#### Returns

[`Transform`](Components.Transform.md)

The transform parent.

#### Defined in

[components/Transform.ts:173](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L173)

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

[components/Transform.ts:182](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L182)

___

### position

• `get` **position**(): `Vector3`

Get the world position of this transform.

#### Returns

`Vector3`

The transform world position.

#### Defined in

[components/Transform.ts:54](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L54)

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

[components/Transform.ts:62](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L62)

___

### rotation

• `get` **rotation**(): `Quaternion`

Get the world rotation of this transform.

#### Returns

`Quaternion`

The transform world rotation.

#### Defined in

[components/Transform.ts:87](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L87)

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

[components/Transform.ts:95](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L95)

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:255](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L255)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:232](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L232)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:235](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L235)

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

[components/Transform.ts:218](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L218)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:249](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L249)

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:252](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L252)

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:229](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L229)

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

[components/Transform.ts:204](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L204)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:238](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Transform.ts#L238)
