[trident](../README.md) / [Exports](../modules.md) / Resources

# Class: Resources

## Table of contents

### Constructors

- [constructor](Resources.md#constructor)

### Methods

- [LoadAsync](Resources.md#loadasync)
- [LoadComponentAsync](Resources.md#loadcomponentasync)
- [LoadMaterialAsync](Resources.md#loadmaterialasync)
- [LoadMeshAsync](Resources.md#loadmeshasync)

## Constructors

### constructor

• **new Resources**()

## Methods

### LoadAsync

▸ `Static` **LoadAsync**(`path`): `Promise`<[`Component`](Components.Component.md) \| `BufferGeometry` \| `Material`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<[`Component`](Components.Component.md) \| `BufferGeometry` \| `Material`\>

#### Defined in

[resources/Resources.ts:101](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/resources/Resources.ts#L101)

___

### LoadComponentAsync

▸ `Static` **LoadComponentAsync**(`path`, `fileId`): `Promise`<[`Component`](Components.Component.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fileId` | `string` |

#### Returns

`Promise`<[`Component`](Components.Component.md)\>

#### Defined in

[resources/Resources.ts:80](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/resources/Resources.ts#L80)

___

### LoadMaterialAsync

▸ `Static` **LoadMaterialAsync**(`path`, `fileId`): `Promise`<`Material`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fileId` | `string` |

#### Returns

`Promise`<`Material`\>

#### Defined in

[resources/Resources.ts:51](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/resources/Resources.ts#L51)

___

### LoadMeshAsync

▸ `Static` **LoadMeshAsync**(`path`, `type`, `fileId`): `Promise`<`BufferGeometry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `type` | `ResourceExtensions` |
| `fileId` | `string` |

#### Returns

`Promise`<`BufferGeometry`\>

#### Defined in

[resources/Resources.ts:15](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/resources/Resources.ts#L15)
