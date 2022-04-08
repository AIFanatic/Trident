[trident](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

The scene that holds all GameObjects.

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [OnLoaded](Scene.md#onloaded)
- [currentFrame](Scene.md#currentframe)
- [gameObjects](Scene.md#gameobjects)
- [isPlaying](Scene.md#isplaying)

### Methods

- [AddGameObject](Scene.md#addgameobject)
- [DisableGizmos](Scene.md#disablegizmos)
- [EnableGizmos](Scene.md#enablegizmos)
- [FixedUpdate](Scene.md#fixedupdate)
- [GetActiveCamera](Scene.md#getactivecamera)
- [GetInput](Scene.md#getinput)
- [GetPhysics](Scene.md#getphysics)
- [GetRenderer](Scene.md#getrenderer)
- [HasGizmosEnabled](Scene.md#hasgizmosenabled)
- [RemoveGameObject](Scene.md#removegameobject)
- [SetActiveCamera](Scene.md#setactivecamera)
- [Start](Scene.md#start)
- [Stop](Scene.md#stop)
- [Update](Scene.md#update)

## Constructors

### constructor

• **new Scene**(`rendererConfig`, `physicsConfig`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rendererConfig` | `IRendererConfiguration` | Renderer configuration. |
| `physicsConfig` | `IPhysicsConfiguration` | Physics configuration. |

#### Defined in

[Scene.ts:37](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L37)

## Properties

### OnLoaded

• **OnLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[Scene.ts:27](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L27)

___

### currentFrame

• **currentFrame**: `number` = `0`

#### Defined in

[Scene.ts:23](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L23)

___

### gameObjects

• **gameObjects**: [`GameObject`](GameObject.md)[] = `[]`

#### Defined in

[Scene.ts:25](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L25)

___

### isPlaying

• **isPlaying**: `boolean`

#### Defined in

[Scene.ts:22](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L22)

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

[Scene.ts:166](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L166)

___

### DisableGizmos

▸ **DisableGizmos**(): `void`

Disables Gizmos from being visible in the scene.

#### Returns

`void`

#### Defined in

[Scene.ts:144](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L144)

___

### EnableGizmos

▸ **EnableGizmos**(): `void`

Enables Gizmos to be visible in the scene.
Gizmos are helpful to visualize and debug components (eg: Camera and Lights).

#### Returns

`void`

#### Defined in

[Scene.ts:132](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L132)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.
Calls FixedUpdate on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:200](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L200)

___

### GetActiveCamera

▸ **GetActiveCamera**(): [`Camera`](Components.Camera.md)

Get the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Returns

[`Camera`](Components.Camera.md)

- Current active camera.

#### Defined in

[Scene.ts:115](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L115)

___

### GetInput

▸ **GetInput**(): [`Input`](Input.md)

Get the input for this scene.

#### Returns

[`Input`](Input.md)

- Input attached to this scene.

#### Defined in

[Scene.ts:106](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L106)

___

### GetPhysics

▸ **GetPhysics**(): `Physics`

Get the physics for this scene.

#### Returns

`Physics`

- Physics attached to this scene.

#### Defined in

[Scene.ts:98](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L98)

___

### GetRenderer

▸ **GetRenderer**(): `Renderer`

Get the renderer for this scene.

#### Returns

`Renderer`

Renderer attached to this scene.

#### Defined in

[Scene.ts:90](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L90)

___

### HasGizmosEnabled

▸ **HasGizmosEnabled**(): `boolean`

Check if Gizmos are enabled.

#### Returns

`boolean`

- If Gizmos are enabled.

#### Defined in

[Scene.ts:157](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L157)

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

[Scene.ts:180](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L180)

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

[Scene.ts:124](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L124)

___

### Start

▸ **Start**(): `void`

Called when the scene starts.
Calls Start on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:243](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L243)

___

### Stop

▸ **Stop**(): `void`

Called when the scene stops.
Calls Stop on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:255](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L255)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.
Calls Update on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:210](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Scene.ts#L210)
