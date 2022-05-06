[trident](../README.md) / [Exports](../modules.md) / Resources

# Class: Resources

## Table of contents

### Constructors

- [constructor](Resources.md#constructor)

### Methods

- [LoadAsync](Resources.md#loadasync)
- [LoadComponentAsync](Resources.md#loadcomponentasync)
- [LoadFile](Resources.md#loadfile)
- [LoadMaterialAsync](Resources.md#loadmaterialasync)
- [LoadMeshAsync](Resources.md#loadmeshasync)
- [LoadSceneAsync](Resources.md#loadsceneasync)
- [LoadTextureAsync](Resources.md#loadtextureasync)

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

[resources/Resources.ts:221](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L221)

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

[resources/Resources.ts:142](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L142)

___

### LoadFile

▸ `Static` **LoadFile**(`path`): `Promise`<`Blob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `any` |

#### Returns

`Promise`<`Blob`\>

#### Defined in

[resources/Resources.ts:26](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L26)

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

[resources/Resources.ts:80](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L80)

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

[resources/Resources.ts:44](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L44)

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

[resources/Resources.ts:163](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L163)

___

### LoadTextureAsync

▸ `Static` **LoadTextureAsync**(`path`, `fileId`, `type`): `Promise`<`Texture`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fileId` | `string` |
| `type` | `ResourceExtensions` |

#### Returns

`Promise`<`Texture`\>

#### Defined in

[resources/Resources.ts:183](https://github.com/AIFanatic/Trident/blob/456b6ba/src/resources/Resources.ts#L183)
