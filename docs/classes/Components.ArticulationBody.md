[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / ArticulationBody

# Class: ArticulationBody

[Components](../modules/Components.md).ArticulationBody

An ArticulationBody is a joint chain that obbeys physics.

Joint links can be FIXED, PRISMATIC, REVOLUTE and SPHERICAL.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`ArticulationBody`**

## Table of contents

### Constructors

- [constructor](Components.ArticulationBody.md#constructor)

### Properties

- [runInEditMode](Components.ArticulationBody.md#runineditmode)
- [xDrive](Components.ArticulationBody.md#xdrive)
- [yDrive](Components.ArticulationBody.md#ydrive)
- [zDrive](Components.ArticulationBody.md#zdrive)

### Accessors

- [angularDamping](Components.ArticulationBody.md#angulardamping)
- [immovable](Components.ArticulationBody.md#immovable)
- [jointType](Components.ArticulationBody.md#jointtype)
- [linearDamping](Components.ArticulationBody.md#lineardamping)
- [linearLockX](Components.ArticulationBody.md#linearlockx)
- [linearLockY](Components.ArticulationBody.md#linearlocky)
- [linearLockZ](Components.ArticulationBody.md#linearlockz)
- [mass](Components.ArticulationBody.md#mass)
- [swingYLock](Components.ArticulationBody.md#swingylock)
- [swingZLock](Components.ArticulationBody.md#swingzlock)
- [twistLock](Components.ArticulationBody.md#twistlock)

### Methods

- [Awake](Components.ArticulationBody.md#awake)
- [Destroy](Components.ArticulationBody.md#destroy)
- [FixedUpdate](Components.ArticulationBody.md#fixedupdate)

## Constructors

### constructor

• **new ArticulationBody**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/ArticulationBody.ts:303](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L303)

## Properties

### runInEditMode

• **runInEditMode**: `boolean` = `true`

#### Overrides

[Component](Components.Component.md).[runInEditMode](Components.Component.md#runineditmode)

#### Defined in

[components/ArticulationBody.ts:104](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L104)

___

### xDrive

• **xDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:106](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L106)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:107](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L107)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:108](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L108)

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:291](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L291)

• `set` **angularDamping**(`angularDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:295](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L295)

___

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:118](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L118)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:124](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L124)

___

### jointType

• `get` **jointType**(): [`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Returns

[`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Defined in

[components/ArticulationBody.ts:130](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L130)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`ArticulationJointType`](../enums/ArticulationJointType.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:135](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L135)

___

### linearDamping

• `get` **linearDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:282](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L282)

• `set` **linearDamping**(`linearDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:286](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L286)

___

### linearLockX

• `get` **linearLockX**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:196](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L196)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:201](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L201)

___

### linearLockY

• `get` **linearLockY**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:206](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L206)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:211](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L211)

___

### linearLockZ

• `get` **linearLockZ**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:216](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L216)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:221](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L221)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:273](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L273)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:277](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L277)

___

### swingYLock

• `get` **swingYLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:242](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L242)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:247](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L247)

___

### swingZLock

• `get` **swingZLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:252](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L252)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:257](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L257)

___

### twistLock

• `get` **twistLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:263](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L263)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:268](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L268)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/ArticulationBody.ts:363](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L363)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:445](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L445)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:418](https://github.com/AIFanatic/Trident/blob/49a3665/src/components/ArticulationBody.ts#L418)
