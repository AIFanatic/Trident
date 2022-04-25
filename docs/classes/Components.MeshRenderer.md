[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / MeshRenderer

# Class: MeshRenderer

[Components](../modules/Components.md).MeshRenderer

Renders a geometry from MeshFilter into the scene.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`MeshRenderer`**

## Table of contents

### Constructors

- [constructor](Components.MeshRenderer.md#constructor)

### Accessors

- [castShadows](Components.MeshRenderer.md#castshadows)
- [material](Components.MeshRenderer.md#material)
- [mesh](Components.MeshRenderer.md#mesh)
- [receiveShadows](Components.MeshRenderer.md#receiveshadows)

### Methods

- [Destroy](Components.MeshRenderer.md#destroy)
- [MeshFilterModelChanged](Components.MeshRenderer.md#meshfiltermodelchanged)

## Constructors

### constructor

• **new MeshRenderer**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Overrides

[Component](Components.Component.md).[constructor](Components.Component.md#constructor)

#### Defined in

[components/MeshRenderer.ts:69](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L69)

## Accessors

### castShadows

• `get` **castShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:46](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L46)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:50](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L50)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:33](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L33)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:37](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L37)

___

### mesh

• `get` **mesh**(): `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Returns

`Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:21](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L21)

• `set` **mesh**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\> |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:25](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L25)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:58](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L58)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:62](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L62)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:120](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L120)

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

[components/MeshRenderer.ts:75](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/components/MeshRenderer.ts#L75)
