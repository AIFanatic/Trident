[trident](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

The scene that holds all GameObjects.

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [OnInitialized](Scene.md#oninitialized)
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

• **new Scene**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IConfiguration` |

#### Defined in

[Scene.ts:38](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L38)

## Properties

### OnInitialized

• **OnInitialized**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Scene.ts:30](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L30)

___

### currentFrame

• **currentFrame**: `number` = `0`

#### Defined in

[Scene.ts:25](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L25)

___

### gameObjects

• **gameObjects**: [`GameObject`](GameObject.md)[] = `[]`

#### Defined in

[Scene.ts:28](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L28)

___

### gizmosEnabled

• **gizmosEnabled**: `boolean` = `false`

#### Defined in

[Scene.ts:26](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L26)

___

### isPlaying

• **isPlaying**: `boolean` = `false`

#### Defined in

[Scene.ts:24](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L24)

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

[Scene.ts:120](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L120)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.
Calls FixedUpdate on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:149](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L149)

___

### GetActiveCamera

▸ **GetActiveCamera**(): [`Camera`](Components.Camera.md)

Get the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Returns

[`Camera`](Components.Camera.md)

- Current active camera.

#### Defined in

[Scene.ts:103](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L103)

___

### GetInput

▸ **GetInput**(): [`Input`](Input.md)

Get the input for this scene.

#### Returns

[`Input`](Input.md)

- Input attached to this scene.

#### Defined in

[Scene.ts:94](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L94)

___

### GetPhysics

▸ **GetPhysics**(): `Physics`

Get the physics for this scene.

#### Returns

`Physics`

- Physics attached to this scene.

#### Defined in

[Scene.ts:86](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L86)

___

### GetRenderer

▸ **GetRenderer**(): `Renderer`

Get the renderer for this scene.

#### Returns

`Renderer`

Renderer attached to this scene.

#### Defined in

[Scene.ts:78](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L78)

___

### Load

▸ **Load**(): `boolean`

Load the Scene.
Instanciates all Components

#### Returns

`boolean`

#### Defined in

[Scene.ts:192](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L192)

___

### Play

▸ **Play**(): `void`

Called when the scene starts.

#### Returns

`void`

#### Defined in

[Scene.ts:199](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L199)

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

[Scene.ts:129](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L129)

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

[Scene.ts:112](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L112)

___

### Stop

▸ **Stop**(): `void`

Called when the scene stops.
Calls Stop on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:207](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L207)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.
Calls Update on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:159](https://github.com/AIFanatic/Trident/blob/49a3665/src/Scene.ts#L159)
