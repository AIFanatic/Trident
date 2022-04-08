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

- [OnEnable](Components.Gizmo.md#onenable)
- [Start](Components.Gizmo.md#start)
- [Update](Components.Gizmo.md#update)

## Properties

### length

• **length**: `number` = `20`

#### Defined in

[components/Gizmo.ts:16](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Gizmo.ts#L16)

___

### target

• **target**: [`Transform`](Components.Transform.md)

#### Defined in

[components/Gizmo.ts:18](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Gizmo.ts#L18)

## Methods

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[OnEnable](Components.Component.md#onenable)

#### Defined in

[components/Gizmo.ts:20](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Gizmo.ts#L20)

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Start](Components.Component.md#start)

#### Defined in

[components/Gizmo.ts:30](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Gizmo.ts#L30)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Overrides

[Component](Components.Component.md).[Update](Components.Component.md#update)

#### Defined in

[components/Gizmo.ts:36](https://github.com/AIFanatic/Trident/blob/c17be51/src/components/Gizmo.ts#L36)
