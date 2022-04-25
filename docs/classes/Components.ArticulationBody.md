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

[components/ArticulationBody.ts:312](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L312)

## Properties

### xDrive

• **xDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:112](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L112)

___

### yDrive

• **yDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:114](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L114)

___

### zDrive

• **zDrive**: `JointDriver`

#### Defined in

[components/ArticulationBody.ts:116](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L116)

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:299](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L299)

• `set` **angularDamping**(`angularDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:303](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L303)

___

### immovable

• `get` **immovable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/ArticulationBody.ts:126](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L126)

• `set` **immovable**(`immovable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immovable` | `boolean` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:132](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L132)

___

### jointType

• `get` **jointType**(): [`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Returns

[`ArticulationJointType`](../enums/ArticulationJointType.md)

#### Defined in

[components/ArticulationBody.ts:138](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L138)

• `set` **jointType**(`jointType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointType` | [`ArticulationJointType`](../enums/ArticulationJointType.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:143](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L143)

___

### linearDamping

• `get` **linearDamping**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:290](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L290)

• `set` **linearDamping**(`linearDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearDamping` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:294](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L294)

___

### linearLockX

• `get` **linearLockX**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:204](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L204)

• `set` **linearLockX**(`linearLockX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockX` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:209](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L209)

___

### linearLockY

• `get` **linearLockY**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:214](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L214)

• `set` **linearLockY**(`linearLockY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockY` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:219](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L219)

___

### linearLockZ

• `get` **linearLockZ**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:224](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L224)

• `set` **linearLockZ**(`linearLockZ`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLockZ` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:229](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L229)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/ArticulationBody.ts:281](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L281)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:285](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L285)

___

### swingYLock

• `get` **swingYLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:250](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L250)

• `set` **swingYLock**(`swingYLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingYLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:255](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L255)

___

### swingZLock

• `get` **swingZLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:260](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L260)

• `set` **swingZLock**(`swingZLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `swingZLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:265](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L265)

___

### twistLock

• `get` **twistLock**(): [`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Returns

[`ArticulationDofLock`](../enums/ArticulationDofLock.md)

#### Defined in

[components/ArticulationBody.ts:271](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L271)

• `set` **twistLock**(`twistLock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twistLock` | [`ArticulationDofLock`](../enums/ArticulationDofLock.md) |

#### Returns

`void`

#### Defined in

[components/ArticulationBody.ts:276](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L276)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/ArticulationBody.ts:400](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L400)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/ArticulationBody.ts:373](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/ArticulationBody.ts#L373)
