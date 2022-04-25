[trident](../README.md) / [Exports](../modules.md) / Renderer

# Class: Renderer

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [OnLoaded](Renderer.md#onloaded)
- [renderer](Renderer.md#renderer)
- [scene](Renderer.md#scene)

### Methods

- [Tick](Renderer.md#tick)

## Constructors

### constructor

• **new Renderer**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IRendererConfiguration` |

#### Defined in

[Renderer.ts:26](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Renderer.ts#L26)

## Properties

### OnLoaded

• **OnLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Renderer.ts:7](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Renderer.ts#L7)

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[Renderer.ts:10](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Renderer.ts#L10)

___

### scene

• **scene**: `Scene`

#### Defined in

[Renderer.ts:9](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Renderer.ts#L9)

## Methods

### Tick

▸ **Tick**(`camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `PerspectiveCamera` |

#### Returns

`void`

#### Defined in

[Renderer.ts:66](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Renderer.ts#L66)
