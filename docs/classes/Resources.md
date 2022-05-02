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
- [LoadSceneAsync](Resources.md#loadsceneasync)

## Constructors

### constructor

• **new Resources**()

## Methods

### LoadAsync

▸ `Static` **LoadAsync**(`path`): `Promise`<`ResourcesCacheEntry`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`ResourcesCacheEntry`\>

#### Defined in

[resources/Resources.ts:128](https://github.com/AIFanatic/Trident/blob/44c915e/src/resources/Resources.ts#L128)

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

[resources/Resources.ts:84](https://github.com/AIFanatic/Trident/blob/44c915e/src/resources/Resources.ts#L84)

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

[resources/Resources.ts:55](https://github.com/AIFanatic/Trident/blob/44c915e/src/resources/Resources.ts#L55)

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

[resources/Resources.ts:19](https://github.com/AIFanatic/Trident/blob/44c915e/src/resources/Resources.ts#L19)

___

### LoadSceneAsync

▸ `Static` **LoadSceneAsync**(`path`, `fileId`): `Promise`<[`Scene`](Scene.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fileId` | `string` |

#### Returns

`Promise`<[`Scene`](Scene.md)\>

#### Defined in

[resources/Resources.ts:105](https://github.com/AIFanatic/Trident/blob/44c915e/src/resources/Resources.ts#L105)
