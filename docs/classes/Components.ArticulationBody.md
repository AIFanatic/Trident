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

[components/ArticulationBody.ts:103](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L103)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:104](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L104)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:105](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L105)

## Accessors

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:115](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L115)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:121](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L121)

___

### jointType

• `get` **jointType**(): [`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Returns

[`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Defined in

[components/ArticulationBody.ts:127](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L127)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`ArticulationJointType`](../enums/ArticulationJointType.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:132](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L132)

___

### linearLockX

• `get` **linearLockX**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:193](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L193)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:198](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L198)

___

### linearLockY

• `get` **linearLockY**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:203](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L203)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:208](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L208)

___

### linearLockZ

• `get` **linearLockZ**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:213](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L213)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:218](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L218)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:270](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L270)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:274](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L274)

___

### swingYLock

• `get` **swingYLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:239](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L239)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:244](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L244)

___

### swingZLock

• `get` **swingZLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:249](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L249)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:254](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L254)

___

### twistLock

• `get` **twistLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:260](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L260)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:265](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L265)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:355](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L355)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:336](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L336)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/ArticulationBody.ts:278](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/ArticulationBody.ts#L278)
