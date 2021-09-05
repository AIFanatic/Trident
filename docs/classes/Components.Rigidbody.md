[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Rigidbody

# Class: Rigidbody

[Components](../modules/Components.md).Rigidbody

RigidBody adds physics properties to an object.

When added the GameObject Transform will be controlled by the RigidBody component.

Rigid bodies obbey physics such as gravity collisions etc, therefore it should only by controlled
with forces, although setting the position, rotation, scale directly works.

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

[components/Rigidbody.ts:31](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L31)

## Accessors

### angularDrag

• `get` **angularDrag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:119](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L119)

• `set` **angularDrag**(`angularDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDrag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:123](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L123)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:101](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L101)

• `set` **angularVelocity**(`angularVelocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularVelocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:106](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L106)

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

[components/Rigidbody.ts:142](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L142)

___

### drag

• `get` **drag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:111](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L111)

• `set` **drag**(`drag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:115](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L115)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Returns

`boolean`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:74](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L74)

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

[components/Rigidbody.ts:79](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L79)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:83](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L83)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:87](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L87)

___

### velocity

• `get` **velocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:91](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L91)

• `set` **velocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:96](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L96)

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

[components/Rigidbody.ts:159](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L159)

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

[components/Rigidbody.ts:168](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L168)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Rigidbody.ts:229](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L229)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Rigidbody.ts:203](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L203)

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

[components/Rigidbody.ts:177](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L177)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Rigidbody.ts:40](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L40)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Rigidbody.ts:188](https://github.com/AIFanatic/Trident/blob/de3c278/src/components/Rigidbody.ts#L188)
