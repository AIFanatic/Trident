[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshCollider

# Class: MeshCollider

[Components](../modules/Components.md).MeshCollider

Adds a static mesh collider to the GameObject.

A MeshCollider can either be convex or a trimesh.

## Hierarchy

- `Collider`

  ↳ **`MeshCollider`**

## Table of contents

### Constructors

- [constructor](Components.MeshCollider.md#constructor)

### Methods

- [CreateCollider](Components.MeshCollider.md#createcollider)
- [MeshFilterModelChanged](Components.MeshCollider.md#meshfiltermodelchanged)

## Constructors

### constructor

• **new MeshCollider**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

Collider.constructor

#### Defined in

[components/MeshCollider.ts:28](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/MeshCollider.ts#L28)

## Methods

### CreateCollider

▸ **CreateCollider**(): `void`

#### Returns

`void`

#### Defined in

[components/MeshCollider.ts:40](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/MeshCollider.ts#L40)

___

### MeshFilterModelChanged

▸ **MeshFilterModelChanged**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `BufferGeometry` |

#### Returns

`void`

#### Defined in

[components/MeshCollider.ts:36](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/components/MeshCollider.ts#L36)
