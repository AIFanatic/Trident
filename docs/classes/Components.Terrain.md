[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Terrain

# Class: Terrain

[Components](../modules/Components.md).Terrain

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Terrain`**

## Table of contents

### Constructors

- [constructor](Components.Terrain.md#constructor)

### Properties

- [material](Components.Terrain.md#material)
- [mesh](Components.Terrain.md#mesh)
- [terrainData](Components.Terrain.md#terraindata)

### Methods

- [Flush](Components.Terrain.md#flush)

## Constructors

### constructor

• **new Terrain**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

components/Terrain.ts:16

## Properties

### material

• **material**: `Material`

#### Defined in

components/Terrain.ts:12

___

### mesh

• **mesh**: `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

components/Terrain.ts:11

___

### terrainData

• **terrainData**: `TerrainData`

#### Defined in

components/Terrain.ts:10

## Methods

### Flush

▸ **Flush**(): `void`

#### Returns

`void`

#### Defined in

components/Terrain.ts:29
