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
- [Awake](Components.Rigidbody.md#awake)
- [CreatedCollider](Components.Rigidbody.md#createdcollider)
- [Destroy](Components.Rigidbody.md#destroy)
- [FixedUpdate](Components.Rigidbody.md#fixedupdate)
- [MovePosition](Components.Rigidbody.md#moveposition)

## Properties

### body

• **body**: `PhysicsRigidbody`

#### Defined in

[components/Rigidbody.ts:32](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L32)

## Accessors

### angularDrag

• `get` **angularDrag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:95](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L95)

• `set` **angularDrag**(`angularDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDrag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:99](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L99)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:76](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L76)

• `set` **angularVelocity**(`angularVelocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularVelocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:81](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L81)

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

[components/Rigidbody.ts:118](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L118)

___

### drag

• `get` **drag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:86](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L86)

• `set` **drag**(`drag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:90](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L90)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Returns

`boolean`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:48](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L48)

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

[components/Rigidbody.ts:53](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L53)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:58](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L58)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:62](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L62)

___

### velocity

• `get` **velocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:66](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L66)

• `set` **velocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:71](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L71)

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

[components/Rigidbody.ts:135](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L135)

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

[components/Rigidbody.ts:144](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L144)

___

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/Rigidbody.ts:164](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L164)

___

### CreatedCollider

▸ **CreatedCollider**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `PhysicsRigidbody` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:183](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L183)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Rigidbody.ts:235](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L235)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Rigidbody.ts:209](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L209)

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

[components/Rigidbody.ts:153](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/Rigidbody.ts#L153)
