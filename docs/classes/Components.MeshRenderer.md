[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshRenderer

# Class: MeshRenderer

[Components](../modules/Components.md).MeshRenderer

Renders a geometry from MeshFilter into the scene.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`MeshRenderer`**

## Table of contents

### Accessors

- [castShadows](Components.MeshRenderer.md#castshadows)
- [material](Components.MeshRenderer.md#material)
- [mesh](Components.MeshRenderer.md#mesh)
- [receiveShadows](Components.MeshRenderer.md#receiveshadows)

### Methods

- [Awake](Components.MeshRenderer.md#awake)
- [Destroy](Components.MeshRenderer.md#destroy)
- [MeshFilterModelChanged](Components.MeshRenderer.md#meshfiltermodelchanged)

## Accessors

### castShadows

• `get` **castShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:45](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L45)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:49](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L49)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:32](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L32)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:36](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L36)

___

### mesh

• `get` **mesh**(): `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Returns

`Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:20](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L20)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\> |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:24](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L24)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:57](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L57)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:61](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L61)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/MeshRenderer.ts:68](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L68)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:118](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L118)

___

### MeshFilterModelChanged

▸ **MeshFilterModelChanged**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Geometry` \| `BufferGeometry` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:73](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/MeshRenderer.ts#L73)
