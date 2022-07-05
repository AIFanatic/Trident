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

[components/ArticulationBody.ts:283](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L283)

## Properties

### xDrive

• **xDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:104](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L104)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:106](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L106)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:108](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L108)

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:270](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L270)

• `set` **angularDamping**(`angularDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:274](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L274)

___

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:118](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L118)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:123](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L123)

___

### jointType

• `get` **jointType**(): [`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum`

#### Returns

[`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum`

#### Defined in

[components/ArticulationBody.ts:128](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L128)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:132](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L132)

___

### linearDamping

• `get` **linearDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:261](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L261)

• `set` **linearDamping**(`linearDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:265](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L265)

___

### linearLockX

• `get` **linearLockX**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:184](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L184)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:188](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L188)

___

### linearLockY

• `get` **linearLockY**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:193](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L193)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:197](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L197)

___

### linearLockZ

• `get` **linearLockZ**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:202](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L202)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:206](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L206)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:252](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L252)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:256](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L256)

___

### swingYLock

• `get` **swingYLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:225](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L225)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:229](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L229)

___

### swingZLock

• `get` **swingZLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:234](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L234)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:238](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L238)

___

### twistLock

• `get` **twistLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:243](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L243)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:247](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L247)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:371](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L371)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:344](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/ArticulationBody.ts#L344)
