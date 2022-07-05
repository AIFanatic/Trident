[trident](../README.md) / [Exports](../modules.md) / Renderer

# Class: Renderer

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [OnLoaded](Renderer.md#onloaded)
- [renderer](Renderer.md#renderer)

### Methods

- [CreateScene](Renderer.md#createscene)
- [Tick](Renderer.md#tick)

## Constructors

### constructor

• **new Renderer**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IRendererConfiguration` |

#### Defined in

[Renderer.ts:25](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Renderer.ts#L25)

## Properties

### OnLoaded

• **OnLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Renderer.ts:7](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Renderer.ts#L7)

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[Renderer.ts:9](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Renderer.ts#L9)

## Methods

### CreateScene

▸ **CreateScene**(): `Scene`

#### Returns

`Scene`

#### Defined in

[Renderer.ts:56](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Renderer.ts#L56)

___

### Tick

▸ **Tick**(`scene`, `camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `camera` | `PerspectiveCamera` |

#### Returns

`void`

#### Defined in

[Renderer.ts:64](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Renderer.ts#L64)
