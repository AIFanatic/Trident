[trident](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

The scene that holds all GameObjects.

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [gameObjects](Scene.md#gameobjects)
- [name](Scene.md#name)
- [physicsScene](Scene.md#physicsscene)
- [rendererScene](Scene.md#rendererscene)
- [userData](Scene.md#userdata)

### Methods

- [AddGameObject](Scene.md#addgameobject)
- [FixedUpdate](Scene.md#fixedupdate)
- [GetActiveCamera](Scene.md#getactivecamera)
- [LateUpdate](Scene.md#lateupdate)
- [OnDrawGizmos](Scene.md#ondrawgizmos)
- [RemoveGameObject](Scene.md#removegameobject)
- [Render](Scene.md#render)
- [SetActiveCamera](Scene.md#setactivecamera)
- [Update](Scene.md#update)
- [UpdatePhysics](Scene.md#updatephysics)

## Constructors

### constructor

• **new Scene**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[Scene.ts:23](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L23)

## Properties

### gameObjects

• **gameObjects**: [`GameObject`](GameObject.md)[] = `[]`

#### Defined in

[Scene.ts:14](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L14)

___

### name

• **name**: `string`

#### Defined in

[Scene.ts:13](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L13)

___

### physicsScene

• `Readonly` **physicsScene**: `PxScene`

#### Defined in

[Scene.ts:21](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L21)

___

### rendererScene

• `Readonly` **rendererScene**: `Scene`

#### Defined in

[Scene.ts:20](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L20)

___

### userData

• **userData**: `any`

#### Defined in

[Scene.ts:18](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L18)

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

[Scene.ts:38](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L38)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.
Calls FixedUpdate on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:85](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L85)

___

### GetActiveCamera

▸ **GetActiveCamera**(): [`Camera`](Components.Camera.md)

Get the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Returns

[`Camera`](Components.Camera.md)

- Current active camera.

#### Defined in

[Scene.ts:68](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L68)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:97](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L97)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:103](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L103)

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

[Scene.ts:47](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L47)

___

### Render

▸ **Render**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:113](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L113)

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

[Scene.ts:77](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L77)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:91](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L91)

___

### UpdatePhysics

▸ **UpdatePhysics**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:109](https://github.com/AIFanatic/Trident/blob/b587800/src/Scene.ts#L109)
