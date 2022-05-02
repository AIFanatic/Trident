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

[components/MeshRenderer.ts:56](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L56)

## Properties

### mesh

• **mesh**: `Mesh`<`Geometry` \| `BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[components/MeshRenderer.ts:17](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L17)

## Accessors

### castShadows

• `get` **castShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:33](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L33)

• `set` **castShadows**(`castShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:37](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L37)

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Defined in

[components/MeshRenderer.ts:20](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L20)

• `set` **material**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:24](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L24)

___

### receiveShadows

• `get` **receiveShadows**(): `boolean`

#### Returns

`boolean`

#### Defined in

[components/MeshRenderer.ts:45](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L45)

• `set` **receiveShadows**(`receiveShadows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiveShadows` | `boolean` |

#### Returns

`void`

#### Defined in

[components/MeshRenderer.ts:49](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L49)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/MeshRenderer.ts:107](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L107)

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

[components/MeshRenderer.ts:61](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/MeshRenderer.ts#L61)
