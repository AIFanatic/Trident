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

### Accessors

- [mesh](Components.MeshFilter.md#mesh)

### Methods

- [Destroy](Components.MeshFilter.md#destroy)
- [OnEnable](Components.MeshFilter.md#onenable)

## Properties

### \_mesh

• **\_mesh**: `Geometry` \| `BufferGeometry`

#### Defined in

[components/MeshFilter.ts:12](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/MeshFilter.ts#L12)

## Accessors

### mesh

• `get` **mesh**(): `Geometry` \| `BufferGeometry`

#### Returns

`Geometry` \| `BufferGeometry`

#### Defined in

[components/MeshFilter.ts:18](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/MeshFilter.ts#L18)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Geometry` \| `BufferGeometry` |

#### Returns

`void`

#### Defined in

[components/MeshFilter.ts:22](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/MeshFilter.ts#L22)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshFilter.ts:28](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/MeshFilter.ts#L28)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/MeshFilter.ts:14](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/MeshFilter.ts#L14)
