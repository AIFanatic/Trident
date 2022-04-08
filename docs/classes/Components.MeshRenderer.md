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

[components/MeshRenderer.ts:44](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L44)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:48](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L48)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:31](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L31)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:35](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L35)

___

### mesh

• `get` **mesh**(): `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Returns

`Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:19](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L19)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\> |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:23](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L23)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:56](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L56)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:60](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L60)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:118](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L118)

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

[components/MeshRenderer.ts:73](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L73)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/MeshRenderer.ts:68](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/MeshRenderer.ts#L68)
