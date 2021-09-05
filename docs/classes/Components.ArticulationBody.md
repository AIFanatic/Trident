[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / ArticulationBody

# Class: ArticulationBody

[Components](../modules/Components.md).ArticulationBody

An ArticulationBody is a joint chain that obbeys physics.

Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`ArticulationBody`**

## Table of contents

### Properties

- [xDrive](Components.ArticulationBody.md#xdrive)
- [yDrive](Components.ArticulationBody.md#ydrive)
- [zDrive](Components.ArticulationBody.md#zdrive)

### Accessors

- [immovable](Components.ArticulationBody.md#immovable)
- [jointType](Components.ArticulationBody.md#jointtype)
- [linearLockX](Components.ArticulationBody.md#linearlockx)
- [linearLockY](Components.ArticulationBody.md#linearlocky)
- [linearLockZ](Components.ArticulationBody.md#linearlockz)
- [mass](Components.ArticulationBody.md#mass)
- [swingYLock](Components.ArticulationBody.md#swingylock)
- [swingZLock](Components.ArticulationBody.md#swingzlock)
- [twistLock](Components.ArticulationBody.md#twistlock)

### Methods

- [Destroy](Components.ArticulationBody.md#destroy)
- [FixedUpdate](Components.ArticulationBody.md#fixedupdate)
- [OnEnable](Components.ArticulationBody.md#onenable)

## Properties

### xDrive

• **xDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:102](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L102)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:103](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L103)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:104](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L104)

## Accessors

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:113](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L113)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:119](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L119)

___

### jointType

• `get` **jointType**(): [`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Returns

[`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Defined in

[components/ArticulationBody.ts:124](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L124)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`ArticulationJointType`](../enums/ArticulationJointType.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:129](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L129)

___

### linearLockX

• `get` **linearLockX**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:189](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L189)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:194](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L194)

___

### linearLockY

• `get` **linearLockY**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:198](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L198)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:203](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L203)

___

### linearLockZ

• `get` **linearLockZ**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:207](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L207)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:212](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L212)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:259](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L259)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:263](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L263)

___

### swingYLock

• `get` **swingYLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:232](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L232)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:237](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L237)

___

### swingZLock

• `get` **swingZLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:241](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L241)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:246](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L246)

___

### twistLock

• `get` **twistLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:250](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L250)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:255](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L255)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:344](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L344)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:325](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L325)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/ArticulationBody.ts:267](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/ArticulationBody.ts#L267)
