[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshCollider

# Class: MeshCollider

[Components](../modules/Components.md).MeshCollider

Adds a static mesh collider to the GameObject.

A MeshCollider can either be convex or a trimesh.

## Hierarchy

- `Collider`

  ↳ **`MeshCollider`**

## Table of contents

### Methods

- [Awake](Components.MeshCollider.md#awake)
- [CreateCollider](Components.MeshCollider.md#createcollider)
- [MeshFilterModelChanged](Components.MeshCollider.md#meshfiltermodelchanged)

## Methods

### Awake

▸ **Awake**(): `void`

#### Returns

`void`

#### Overrides

Collider.Awake

#### Defined in

[components/MeshCollider.ts:25](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshCollider.ts#L25)

___

### CreateCollider

▸ **CreateCollider**(): `void`

#### Returns

`void`

#### Defined in

[components/MeshCollider.ts:37](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshCollider.ts#L37)

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

[components/MeshCollider.ts:33](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshCollider.ts#L33)
