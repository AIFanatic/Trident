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

- [articulation](Components.ArticulationBody.md#articulation)
- [joint](Components.ArticulationBody.md#joint)
- [jointType](Components.ArticulationBody.md#jointtype)
- [link](Components.ArticulationBody.md#link)

### Accessors

- [articulationJointType](Components.ArticulationBody.md#articulationjointtype)
- [immovable](Components.ArticulationBody.md#immovable)

### Methods

- [FixedUpdate](Components.ArticulationBody.md#fixedupdate)
- [OnEnable](Components.ArticulationBody.md#onenable)

## Properties

### articulation

• **articulation**: `PxArticulationReducedCoordinate`

#### Defined in

[components/ArticulationBody.ts:270](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L270)

___

### joint

• **joint**: `PxArticulationJointReducedCoordinate`

#### Defined in

[components/ArticulationBody.ts:272](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L272)

___

### jointType

• **jointType**: `JointTypeFixed` \| `JointTypePrismatic` \| `JointTypeRevolute` \| `JointTypeSpherical`

#### Defined in

[components/ArticulationBody.ts:278](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L278)

___

### link

• **link**: `PxArticulationLink`

#### Defined in

[components/ArticulationBody.ts:271](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L271)

## Accessors

### articulationJointType

• `get` **articulationJointType**(): [`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Returns

[`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Defined in

[components/ArticulationBody.ts:291](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L291)

• `set` **articulationJointType**(`articulationJointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `articulationJointType` | [`ArticulationJointType`](../enums/ArticulationJointType.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:296](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L296)

___

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:280](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L280)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:286](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L286)

## Methods

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:355](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L355)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/ArticulationBody.ts:313](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/ArticulationBody.ts#L313)
