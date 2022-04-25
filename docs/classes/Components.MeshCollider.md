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

[components/MeshCollider.ts:27](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshCollider.ts#L27)

## Methods

### CreateCollider

▸ **CreateCollider**(): `void`

#### Returns

`void`

#### Defined in

[components/MeshCollider.ts:41](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshCollider.ts#L41)

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

[components/MeshCollider.ts:37](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshCollider.ts#L37)
