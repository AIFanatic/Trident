[trident](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

The scene that holds all GameObjects.

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [currentFrame](Scene.md#currentframe)
- [gameObjects](Scene.md#gameobjects)
- [gizmosEnabled](Scene.md#gizmosenabled)
- [isPlaying](Scene.md#isplaying)

### Methods

- [AddGameObject](Scene.md#addgameobject)
- [FixedUpdate](Scene.md#fixedupdate)
- [GetActiveCamera](Scene.md#getactivecamera)
- [GetInput](Scene.md#getinput)
- [GetPhysics](Scene.md#getphysics)
- [GetRenderer](Scene.md#getrenderer)
- [Load](Scene.md#load)
- [Play](Scene.md#play)
- [RemoveGameObject](Scene.md#removegameobject)
- [SetActiveCamera](Scene.md#setactivecamera)
- [Stop](Scene.md#stop)
- [Update](Scene.md#update)

## Constructors

### constructor

• **new Scene**(`renderer`, `physics`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](Renderer.md) | Initialized Renderer instance. |
| `physics` | [`Physics`](Physics.md) | Initialized Physics instance. |

#### Defined in

[Scene.ts:34](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L34)

## Properties

### currentFrame

• **currentFrame**: `number` = `0`

#### Defined in

[Scene.ts:25](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L25)

___

### gameObjects

• **gameObjects**: [`GameObject`](GameObject.md)[] = `[]`

#### Defined in

[Scene.ts:28](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L28)

___

### gizmosEnabled

• **gizmosEnabled**: `boolean` = `false`

#### Defined in

[Scene.ts:26](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L26)

___

### isPlaying

• **isPlaying**: `boolean` = `false`

#### Defined in

[Scene.ts:24](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L24)

## Methods

### AddGameObject

▸ **AddGameObject**(`gameObject`): `boolean`

Adds a new GameObject to the scene.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) | GameObject to be added to the scene. |

#### Returns

`boolean`

#### Defined in

[Scene.ts:91](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L91)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.
Calls FixedUpdate on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:120](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L120)

___

### GetActiveCamera

▸ **GetActiveCamera**(): [`Camera`](Components.Camera.md)

Get the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Returns

[`Camera`](Components.Camera.md)

- Current active camera.

#### Defined in

[Scene.ts:74](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L74)

___

### GetInput

▸ **GetInput**(): [`Input`](Input.md)

Get the input for this scene.

#### Returns

[`Input`](Input.md)

- Input attached to this scene.

#### Defined in

[Scene.ts:65](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L65)

___

### GetPhysics

▸ **GetPhysics**(): [`Physics`](Physics.md)

Get the physics for this scene.

#### Returns

[`Physics`](Physics.md)

- Physics attached to this scene.

#### Defined in

[Scene.ts:57](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L57)

___

### GetRenderer

▸ **GetRenderer**(): [`Renderer`](Renderer.md)

Get the renderer for this scene.

#### Returns

[`Renderer`](Renderer.md)

Renderer attached to this scene.

#### Defined in

[Scene.ts:49](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L49)

___

### Load

▸ **Load**(): `boolean`

Load the Scene.
Instanciates all Components

#### Returns

`boolean`

#### Defined in

[Scene.ts:163](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L163)

___

### Play

▸ **Play**(): `void`

Called when the scene starts.

#### Returns

`void`

#### Defined in

[Scene.ts:170](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L170)

___

### RemoveGameObject

▸ **RemoveGameObject**(`gameObject`): `boolean`

Remove a GameObject from the scene

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |

#### Returns

`boolean`

- True if GameObject was successfully removed, false otherwise.

#### Defined in

[Scene.ts:100](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L100)

___

### SetActiveCamera

▸ **SetActiveCamera**(`camera`): `void`

Set the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | [`Camera`](Components.Camera.md) | Camera to become the main camera. |

#### Returns

`void`

#### Defined in

[Scene.ts:83](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L83)

___

### Stop

▸ **Stop**(): `void`

Called when the scene stops.
Calls Stop on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:178](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L178)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.
Calls Update on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:130](https://github.com/AIFanatic/Trident/blob/b94bc4e/src/Scene.ts#L130)
