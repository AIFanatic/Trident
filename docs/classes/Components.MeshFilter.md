[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshFilter

# Class: MeshFilter

[Components](../modules/Components.md).MeshFilter

Stores a geometry that later can be rendered to the scene.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`MeshFilter`**

## Table of contents

### Properties

- [\_mesh](Components.MeshFilter.md#_mesh)
- [runInEditMode](Components.MeshFilter.md#runineditmode)

### Accessors

- [mesh](Components.MeshFilter.md#mesh)

### Methods

- [Destroy](Components.MeshFilter.md#destroy)

## Properties

### \_mesh

• **\_mesh**: `Geometry` \| `BufferGeometry`

#### Defined in

[components/MeshFilter.ts:14](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/MeshFilter.ts#L14)

___

### runInEditMode

• **runInEditMode**: `boolean` = `true`

#### Overrides

[Component](Components.Component.md).[runInEditMode](Components.Component.md#runineditmode)

#### Defined in

[components/MeshFilter.ts:12](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/MeshFilter.ts#L12)

## Accessors

### mesh

• `get` **mesh**(): `Geometry` \| `BufferGeometry`

#### Returns

`Geometry` \| `BufferGeometry`

#### Defined in

[components/MeshFilter.ts:17](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/MeshFilter.ts#L17)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Geometry` \| `BufferGeometry` |

#### Returns

`void`

#### Defined in

[components/MeshFilter.ts:21](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/MeshFilter.ts#L21)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshFilter.ts:27](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/MeshFilter.ts#L27)
