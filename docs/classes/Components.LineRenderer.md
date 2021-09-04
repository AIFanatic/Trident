[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / LineRenderer

# Class: LineRenderer

[Components](../modules/Components.md).LineRenderer

Creates a line from point A (from) to point B (to).

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`LineRenderer`**

## Table of contents

### Properties

- [color](Components.LineRenderer.md#color)
- [from](Components.LineRenderer.md#from)
- [to](Components.LineRenderer.md#to)

### Methods

- [Destroy](Components.LineRenderer.md#destroy)
- [OnEnable](Components.LineRenderer.md#onenable)
- [Update](Components.LineRenderer.md#update)

## Properties

### color

• **color**: `number` = `0xffffff`

#### Defined in

[components/LineRenderer.ts:12](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L12)

___

### from

• **from**: `Vector3`

#### Defined in

[components/LineRenderer.ts:10](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L10)

___

### to

• **to**: `Vector3`

#### Defined in

[components/LineRenderer.ts:11](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L11)

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Destroy](Components.Component.md#destroy)

#### Defined in

[components/LineRenderer.ts:47](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L47)

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/LineRenderer.ts:21](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L21)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

[components/LineRenderer.ts:31](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/LineRenderer.ts#L31)
