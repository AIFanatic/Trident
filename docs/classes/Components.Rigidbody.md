[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Rigidbody

# Class: Rigidbody

[Components](../modules/Components.md).Rigidbody

RigidBody adds physics properties to an object

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Rigidbody`**

## Table of contents

### Properties

- [body](Components.Rigidbody.md#body)

### Accessors

- [angularDrag](Components.Rigidbody.md#angulardrag)
- [angularVelocity](Components.Rigidbody.md#angularvelocity)
- [constraints](Components.Rigidbody.md#constraints)
- [drag](Components.Rigidbody.md#drag)
- [isKinematic](Components.Rigidbody.md#iskinematic)
- [mass](Components.Rigidbody.md#mass)
- [velocity](Components.Rigidbody.md#velocity)

### Methods

- [AddForce](Components.Rigidbody.md#addforce)
- [AddTorque](Components.Rigidbody.md#addtorque)
- [Destroy](Components.Rigidbody.md#destroy)
- [FixedUpdate](Components.Rigidbody.md#fixedupdate)
- [MovePosition](Components.Rigidbody.md#moveposition)
- [OnEnable](Components.Rigidbody.md#onenable)
- [Start](Components.Rigidbody.md#start)

## Properties

### body

• **body**: `PhysicsRigidbody`

#### Defined in

[components/Rigidbody.ts:25](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L25)

## Accessors

### angularDrag

• `get` **angularDrag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:113](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L113)

• `set` **angularDrag**(`angularDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDrag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:117](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L117)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:95](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L95)

• `set` **angularVelocity**(`angularVelocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularVelocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:100](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L100)

___

### constraints

• `set` **constraints**(`constraint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | `RigidbodyConstraints` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:136](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L136)

___

### drag

• `get` **drag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:105](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L105)

• `set` **drag**(`drag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:109](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L109)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Returns

`boolean`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:68](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L68)

• `set` **isKinematic**(`kinematic`): `void`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Parameters

| Name | Type |
| :------ | :------ |
| `kinematic` | `boolean` |

#### Returns

`void`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:73](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L73)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:77](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L77)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:81](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L81)

___

### velocity

• `get` **velocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:85](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L85)

• `set` **velocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:90](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L90)

## Methods

### AddForce

▸ **AddForce**(`force`, `mode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `Vector3` |
| `mode` | `ForceMode` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:153](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L153)

___

### AddTorque

▸ **AddTorque**(`torque`, `mode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `torque` | `Vector3` |
| `mode` | `ForceMode` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:162](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L162)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Rigidbody.ts:223](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L223)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Rigidbody.ts:197](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L197)

___

### MovePosition

▸ **MovePosition**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:171](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L171)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Rigidbody.ts:34](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L34)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Rigidbody.ts:182](https://github.com/AIFanatic/Trident/blob/e986bc9/src/components/Rigidbody.ts#L182)
