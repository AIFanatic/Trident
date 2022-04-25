[trident](../README.md) / [Exports](../modules.md) / Physics

# Class: Physics

## Table of contents

### Constructors

- [constructor](Physics.md#constructor)

### Properties

- [FixedUpdate](Physics.md#fixedupdate)
- [OnLoaded](Physics.md#onloaded)

### Methods

- [GetCooking](Physics.md#getcooking)
- [GetPhysX](Physics.md#getphysx)
- [GetPhysics](Physics.md#getphysics)
- [GetScene](Physics.md#getscene)
- [Raycast](Physics.md#raycast)
- [Start](Physics.md#start)
- [Update](Physics.md#update)

## Constructors

### constructor

• **new Physics**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IPhysicsConfiguration` |

#### Defined in

[Physics.ts:22](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L22)

## Properties

### FixedUpdate

• **FixedUpdate**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Physics.ts:10](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L10)

___

### OnLoaded

• **OnLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Physics.ts:9](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L9)

## Methods

### GetCooking

▸ **GetCooking**(): `PxCooking`

#### Returns

`PxCooking`

#### Defined in

[Physics.ts:269](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L269)

___

### GetPhysX

▸ **GetPhysX**(): typeof `PhysX`

#### Returns

typeof `PhysX`

#### Defined in

[Physics.ts:257](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L257)

___

### GetPhysics

▸ **GetPhysics**(): `PxPhysics`

#### Returns

`PxPhysics`

#### Defined in

[Physics.ts:261](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L261)

___

### GetScene

▸ **GetScene**(): `PxScene`

#### Returns

`PxScene`

#### Defined in

[Physics.ts:265](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L265)

___

### Raycast

▸ **Raycast**(`origin`, `direction`, `maxDistance`, `layerMask?`): `PxRaycastBuffer10`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `origin` | `Vector3` | `undefined` |
| `direction` | `Vector3` | `undefined` |
| `maxDistance` | `number` | `undefined` |
| `layerMask` | `number` | `0` |

#### Returns

`PxRaycastBuffer10`

#### Defined in

[Physics.ts:273](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L273)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[Physics.ts:278](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L278)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[Physics.ts:281](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Physics.ts#L281)
