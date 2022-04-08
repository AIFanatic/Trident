[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshCollider

# Class: MeshCollider

[Components](../modules/Components.md).MeshCollider

Adds a static mesh collider to the GameObject.

A MeshCollider can either be convex or a trimesh.

## Hierarchy

- `Collider`

  ↳ **`MeshCollider`**

## Table of contents

### Accessors

- [isConvex](Components.MeshCollider.md#isconvex)

### Methods

- [OnEnable](Components.MeshCollider.md#onenable)

## Accessors

### isConvex

• `get` **isConvex**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshCollider.ts:29](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/MeshCollider.ts#L29)

• `set` **isConvex**(`isConvex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isConvex` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshCollider.ts:33](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/MeshCollider.ts#L33)

## Methods

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Overrides

Collider.OnEnable

#### Defined in

[components/MeshCollider.ts:44](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/MeshCollider.ts#L44)
