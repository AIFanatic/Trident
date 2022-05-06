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

### Constructors

- [constructor](Components.Rigidbody.md#constructor)

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
- [CreatedCollider](Components.Rigidbody.md#createdcollider)
- [Destroy](Components.Rigidbody.md#destroy)
- [FixedUpdate](Components.Rigidbody.md#fixedupdate)
- [MovePosition](Components.Rigidbody.md#moveposition)

## Constructors

### constructor

• **new Rigidbody**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/Rigidbody.ts:166](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L166)

## Properties

### body

• **body**: `PhysicsRigidbody`

#### Defined in

[components/Rigidbody.ts:34](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L34)

## Accessors

### angularDrag

• `get` **angularDrag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:97](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L97)

• `set` **angularDrag**(`angularDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDrag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:101](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L101)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:78](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L78)

• `set` **angularVelocity**(`angularVelocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularVelocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:83](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L83)

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

[components/Rigidbody.ts:120](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L120)

___

### drag

• `get` **drag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:88](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L88)

• `set` **drag**(`drag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:92](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L92)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Returns

`boolean`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:50](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L50)

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

[components/Rigidbody.ts:55](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L55)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:60](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L60)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:64](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L64)

___

### velocity

• `get` **velocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:68](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L68)

• `set` **velocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:73](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L73)

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

[components/Rigidbody.ts:137](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L137)

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

[components/Rigidbody.ts:146](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L146)

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

[components/Rigidbody.ts:196](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L196)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Rigidbody.ts:248](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L248)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Rigidbody.ts:222](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L222)

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

[components/Rigidbody.ts:155](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Rigidbody.ts#L155)
