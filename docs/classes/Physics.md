[trident](../README.md) / [Exports](../modules.md) / Physics

# Class: Physics

## Table of contents

### Constructors

- [constructor](Physics.md#constructor)

### Properties

- [OnLoaded](Physics.md#onloaded)

### Methods

- [CreateScene](Physics.md#createscene)
- [GetCooking](Physics.md#getcooking)
- [GetPhysX](Physics.md#getphysx)
- [GetPhysics](Physics.md#getphysics)
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

[Physics.ts:19](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L19)

## Properties

### OnLoaded

• **OnLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Physics.ts:9](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L9)

## Methods

### CreateScene

▸ **CreateScene**(): `PxScene`

#### Returns

`PxScene`

#### Defined in

[Physics.ts:85](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L85)

___

### GetCooking

▸ **GetCooking**(): `PxCooking`

#### Returns

`PxCooking`

#### Defined in

[Physics.ts:168](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L168)

___

### GetPhysX

▸ **GetPhysX**(): typeof `PhysX`

#### Returns

typeof `PhysX`

#### Defined in

[Physics.ts:160](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L160)

___

### GetPhysics

▸ **GetPhysics**(): `PxPhysics`

#### Returns

`PxPhysics`

#### Defined in

[Physics.ts:164](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L164)

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

[Physics.ts:172](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L172)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[Physics.ts:177](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L177)

___

### Update

▸ **Update**(`scene`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `PxScene` |

#### Returns

`void`

#### Defined in

[Physics.ts:180](https://github.com/AIFanatic/Trident/blob/b587800/src/Physics.ts#L180)
