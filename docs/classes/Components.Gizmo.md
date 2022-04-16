[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Gizmo

# Class: Gizmo

[Components](../modules/Components.md).Gizmo

Allows to visualize the local axis of a Transform.

## Hierarchy

- [`Component`](Components.Component.md)

  ↳ **`Gizmo`**

## Table of contents

### Properties

- [length](Components.Gizmo.md#length)
- [target](Components.Gizmo.md#target)

### Methods

- [Awake](Components.Gizmo.md#awake)
- [Start](Components.Gizmo.md#start)
- [Update](Components.Gizmo.md#update)

## Properties

### length

• **length**: `number` = `20`

#### Defined in

[components/Gizmo.ts:15](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/Gizmo.ts#L15)

___

### target

• **target**: [`Transform`](Components.Transform.md)

#### Defined in

[components/Gizmo.ts:17](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/Gizmo.ts#L17)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Awake](Components.Component.md#awake)

#### Defined in

[components/Gizmo.ts:19](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/Gizmo.ts#L19)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Gizmo.ts:29](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/Gizmo.ts#L29)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

[components/Gizmo.ts:35](https://github.com/AIFanatic/Trident/blob/5fab94d/src/components/Gizmo.ts#L35)
