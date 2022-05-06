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

### Properties

- [mesh](Components.MeshRenderer.md#mesh)

### Accessors

- [castShadows](Components.MeshRenderer.md#castshadows)
- [material](Components.MeshRenderer.md#material)
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

[components/MeshRenderer.ts:58](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L58)

## Properties

### mesh

• **mesh**: `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:15](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L15)

## Accessors

### castShadows

• `get` **castShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:35](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L35)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:39](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L39)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:18](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L18)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:22](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L22)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:47](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L47)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:51](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L51)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:109](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L109)

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

[components/MeshRenderer.ts:63](https://github.com/AIFanatic/Trident/blob/a1de164/src/components/MeshRenderer.ts#L63)
