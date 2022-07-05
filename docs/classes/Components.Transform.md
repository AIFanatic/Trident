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

- [childCount](Components.Transform.md#childcount)
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
- [GetChild](Components.Transform.md#getchild)
- [RotateAround](Components.Transform.md#rotatearound)
- [Tick](Components.Transform.md#tick)
- [Translate](Components.Transform.md#translate)

## Constructors

### constructor

• **new Transform**(`gameObject`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |

#### Defined in

[components/Transform.ts:224](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L224)

## Properties

### \_parent

• **\_parent**: [`Transform`](Components.Transform.md)

#### Defined in

[components/Transform.ts:47](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L47)

___

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/Transform.ts:26](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L26)

___

### forward

• **forward**: `Vector3`

The local forward vector for this transform.

#### Defined in

[components/Transform.ts:45](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L45)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

#### Defined in

[components/Transform.ts:30](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L30)

___

### group

• **group**: `Object3DExtended`

#### Defined in

[components/Transform.ts:49](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L49)

___

### name

• **name**: `string`

#### Defined in

[components/Transform.ts:27](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L27)

___

### right

• **right**: `Vector3`

The local right vector for this transform.

#### Defined in

[components/Transform.ts:40](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L40)

___

### tag

• **tag**: `string` = `"Untagged"`

#### Defined in

[components/Transform.ts:28](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L28)

___

### up

• **up**: `Vector3`

The local up vector for this transform.

#### Defined in

[components/Transform.ts:35](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L35)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/Transform.ts:25](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L25)

## Accessors

### childCount

• `get` **childCount**(): `number`

The number of children the Transform has.

#### Returns

`number`

The number of children this Transform has.

#### Defined in

[components/Transform.ts:187](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L187)

___

### eulerAngles

• `get` **eulerAngles**(): `Vector3`

Get the world euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform world euler angles.

#### Defined in

[components/Transform.ts:121](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L121)

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

[components/Transform.ts:130](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L130)

___

### localEulerAngles

• `get` **localEulerAngles**(): `Vector3`

Get the local euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform local euler angles.

#### Defined in

[components/Transform.ts:140](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L140)

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

[components/Transform.ts:149](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L149)

___

### localPosition

• `get` **localPosition**(): `Vector3`

Get the local position of this transform.

#### Returns

`Vector3`

The transform local position.

#### Defined in

[components/Transform.ts:72](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L72)

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

[components/Transform.ts:80](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L80)

___

### localRotation

• `get` **localRotation**(): `Quaternion`

Get the local rotation of this transform.

#### Returns

`Quaternion`

The transform local rotation.

#### Defined in

[components/Transform.ts:104](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L104)

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

[components/Transform.ts:112](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L112)

___

### localScale

• `get` **localScale**(): `Vector3`

Get the local scale of this transform.

#### Returns

`Vector3`

The transform local scale.

#### Defined in

[components/Transform.ts:158](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L158)

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

[components/Transform.ts:166](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L166)

___

### parent

• `get` **parent**(): [`Transform`](Components.Transform.md)

Get the parent of this transform.

#### Returns

[`Transform`](Components.Transform.md)

The transform parent.

#### Defined in

[components/Transform.ts:195](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L195)

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

[components/Transform.ts:204](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L204)

___

### position

• `get` **position**(): `Vector3`

Get the world position of this transform.

#### Returns

`Vector3`

The transform world position.

#### Defined in

[components/Transform.ts:55](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L55)

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

[components/Transform.ts:63](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L63)

___

### rotation

• `get` **rotation**(): `Quaternion`

Get the world rotation of this transform.

#### Returns

`Quaternion`

The transform world rotation.

#### Defined in

[components/Transform.ts:88](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L88)

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

[components/Transform.ts:96](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L96)

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:269](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L269)

___

### GetChild

▸ **GetChild**(`index`): [`Transform`](Components.Transform.md)

Get a transform child by index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Transform`](Components.Transform.md)

Returns the child Transform or null if not found.

#### Defined in

[components/Transform.ts:176](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L176)

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

[components/Transform.ts:247](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L247)

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:258](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L258)

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

[components/Transform.ts:233](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/Transform.ts#L233)
