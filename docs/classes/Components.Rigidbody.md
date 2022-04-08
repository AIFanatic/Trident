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

[components/Rigidbody.ts:32](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L32)

## Accessors

### angularDrag

• `get` **angularDrag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:123](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L123)

• `set` **angularDrag**(`angularDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularDrag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:127](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L127)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:104](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L104)

• `set` **angularVelocity**(`angularVelocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularVelocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:109](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L109)

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

[components/Rigidbody.ts:146](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L146)

___

### drag

• `get` **drag**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:114](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L114)

• `set` **drag**(`drag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drag` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:118](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L118)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Set or get the kinematic propery of the rigid body.
Kinematic rigid bodies will not obey physics

#### Returns

`boolean`

True if the object is kinematic, false otherwise

#### Defined in

[components/Rigidbody.ts:76](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L76)

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

[components/Rigidbody.ts:81](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L81)

___

### mass

• `get` **mass**(): `number`

#### Returns

`number`

#### Defined in

[components/Rigidbody.ts:86](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L86)

• `set` **mass**(`mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:90](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L90)

___

### velocity

• `get` **velocity**(): `Vector3`

#### Returns

`Vector3`

#### Defined in

[components/Rigidbody.ts:94](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L94)

• `set` **velocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `Vector3` |

#### Returns

`void`

#### Defined in

[components/Rigidbody.ts:99](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L99)

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

[components/Rigidbody.ts:163](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L163)

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

[components/Rigidbody.ts:172](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L172)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/Rigidbody.ts:233](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L233)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[FixedUpdate](Components.Component.md#fixedupdate)

#### Defined in

[components/Rigidbody.ts:207](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L207)

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

[components/Rigidbody.ts:181](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L181)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Rigidbody.ts:41](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L41)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Rigidbody.ts:192](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/Rigidbody.ts#L192)
