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

[components/Transform.ts:191](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L191)

## Properties

### \_parent

• **\_parent**: [`Transform`](Components.Transform.md)

#### Defined in

[components/Transform.ts:45](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L45)

___

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/Transform.ts:24](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L24)

___

### forward

• **forward**: `Vector3`

The local forward vector for this transform.

#### Defined in

[components/Transform.ts:43](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L43)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

#### Defined in

[components/Transform.ts:28](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L28)

___

### group

• **group**: `Object3DExtended`

#### Defined in

[components/Transform.ts:47](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L47)

___

### name

• **name**: `string`

#### Implementation of

IComponent.name

#### Defined in

[components/Transform.ts:25](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L25)

___

### right

• **right**: `Vector3`

The local right vector for this transform.

#### Defined in

[components/Transform.ts:38](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L38)

___

### tag

• **tag**: `string` = `"Untagged"`

#### Defined in

[components/Transform.ts:26](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L26)

___

### up

• **up**: `Vector3`

The local up vector for this transform.

#### Defined in

[components/Transform.ts:33](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L33)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/Transform.ts:23](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L23)

## Accessors

### eulerAngles

• `get` **eulerAngles**(): `Vector3`

Get the world euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform world euler angles.

#### Defined in

[components/Transform.ts:118](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L118)

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

[components/Transform.ts:127](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L127)

___

### localEulerAngles

• `get` **localEulerAngles**(): `Vector3`

Get the local euler angles of this transform.
The euler angles are in degrees.

#### Returns

`Vector3`

The transform local euler angles.

#### Defined in

[components/Transform.ts:136](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L136)

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

[components/Transform.ts:145](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L145)

___

### localPosition

• `get` **localPosition**(): `Vector3`

Get the local position of this transform.

#### Returns

`Vector3`

The transform local position.

#### Defined in

[components/Transform.ts:69](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L69)

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

[components/Transform.ts:77](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L77)

___

### localRotation

• `get` **localRotation**(): `Quaternion`

Get the local rotation of this transform.

#### Returns

`Quaternion`

The transform local rotation.

#### Defined in

[components/Transform.ts:101](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L101)

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

[components/Transform.ts:109](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L109)

___

### localScale

• `get` **localScale**(): `Vector3`

Get the local scale of this transform.

#### Returns

`Vector3`

The transform local scale.

#### Defined in

[components/Transform.ts:153](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L153)

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

[components/Transform.ts:161](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L161)

___

### parent

• `get` **parent**(): [`Transform`](Components.Transform.md)

Get the parent of this transform.

#### Returns

[`Transform`](Components.Transform.md)

The transform parent.

#### Defined in

[components/Transform.ts:169](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L169)

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

[components/Transform.ts:178](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L178)

___

### position

• `get` **position**(): `Vector3`

Get the world position of this transform.

#### Returns

`Vector3`

The transform world position.

#### Defined in

[components/Transform.ts:53](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L53)

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

[components/Transform.ts:61](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L61)

___

### rotation

• `get` **rotation**(): `Quaternion`

Get the world rotation of this transform.

#### Returns

`Quaternion`

The transform world rotation.

#### Defined in

[components/Transform.ts:85](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L85)

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

[components/Transform.ts:93](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L93)

## Methods

### Destroy

▸ **Destroy**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:251](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L251)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:228](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L228)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:231](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L231)

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

[components/Transform.ts:214](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L214)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:245](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L245)

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:248](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L248)

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:225](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L225)

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

[components/Transform.ts:200](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L200)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/Transform.ts:234](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Transform.ts#L234)
