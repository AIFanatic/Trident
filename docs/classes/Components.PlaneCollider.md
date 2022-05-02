[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / PlaneCollider

# Class: PlaneCollider

[Components](../modules/Components.md).PlaneCollider

Adds a static plane collider to the GameObject.

Note that a plane should extend to infinity, but in this case it's just a box with a small Y scale.

## Hierarchy

- `Collider`

  ↳ **`PlaneCollider`**

## Table of contents

### Constructors

- [constructor](Components.PlaneCollider.md#constructor)

### Methods

- [Update](Components.PlaneCollider.md#update)

## Constructors

### constructor

• **new PlaneCollider**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

Collider.constructor

#### Defined in

[components/PlaneCollider.ts:18](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/PlaneCollider.ts#L18)

## Methods

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Overrides

Collider.Update

#### Defined in

[components/PlaneCollider.ts:38](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/PlaneCollider.ts#L38)
