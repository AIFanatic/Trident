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

- [Destroy](Components.MeshRenderer.md#destroy)
- [MeshFilterModelChanged](Components.MeshRenderer.md#meshfiltermodelchanged)
- [OnEnable](Components.MeshRenderer.md#onenable)

## Accessors

### castShadows

• `get` **castShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:41](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L41)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:45](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L45)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:29](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L29)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:33](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L33)

___

### mesh

• `get` **mesh**(): `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Returns

`Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:18](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L18)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\> |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:22](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L22)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:49](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L49)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:53](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L53)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:104](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L104)

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

[components/MeshRenderer.ts:62](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L62)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/MeshRenderer.ts:57](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/MeshRenderer.ts#L57)
