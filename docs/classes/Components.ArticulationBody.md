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

[components/ArticulationBody.ts:282](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L282)

## Properties

### xDrive

• **xDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:103](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L103)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:105](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L105)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:107](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L107)

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:269](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L269)

• `set` **angularDamping**(`angularDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:273](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L273)

___

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:117](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L117)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:122](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L122)

___

### jointType

• `get` **jointType**(): [`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum`

#### Returns

[`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum`

#### Defined in

[components/ArticulationBody.ts:127](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L127)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`FixedJoint`](../enums/ArticulationJointType.md#fixedjoint) \| [`PrismaticJoint`](../enums/ArticulationJointType.md#prismaticjoint) \| [`RevoluteJoint`](../enums/ArticulationJointType.md#revolutejoint) \| [`SphericalJoint`](../enums/ArticulationJointType.md#sphericaljoint) \| `PxArticulationJointTypeEnum` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:131](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L131)

___

### linearDamping

• `get` **linearDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:260](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L260)

• `set` **linearDamping**(`linearDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:264](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L264)

___

### linearLockX

• `get` **linearLockX**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:183](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L183)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:187](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L187)

___

### linearLockY

• `get` **linearLockY**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:192](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L192)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:196](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L196)

___

### linearLockZ

• `get` **linearLockZ**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:201](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L201)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:205](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L205)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:251](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L251)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:255](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L255)

___

### swingYLock

• `get` **swingYLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:224](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L224)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:228](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L228)

___

### swingZLock

• `get` **swingZLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:233](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L233)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:237](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L237)

___

### twistLock

• `get` **twistLock**(): `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Returns

`PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion)

#### Defined in

[components/ArticulationBody.ts:242](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L242)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | `PxArticulationMotionEnum` \| [`LockedMotion`](../enums/ArticulationMotion.md#lockedmotion) \| [`LimitedMotion`](../enums/ArticulationMotion.md#limitedmotion) \| [`FreeMotion`](../enums/ArticulationMotion.md#freemotion) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:246](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L246)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:370](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L370)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:343](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/ArticulationBody.ts#L343)
