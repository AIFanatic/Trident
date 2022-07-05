[trident](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

The scene that holds all GameObjects.

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [gameObjects](Scene.md#gameobjects)
- [name](Scene.md#name)
- [physicsRaycast](Scene.md#physicsraycast)
- [physicsScene](Scene.md#physicsscene)
- [rendererScene](Scene.md#rendererscene)
- [userData](Scene.md#userdata)

### Methods

- [AddGameObject](Scene.md#addgameobject)
- [FixedUpdate](Scene.md#fixedupdate)
- [GetActiveCamera](Scene.md#getactivecamera)
- [LateUpdate](Scene.md#lateupdate)
- [OnDrawGizmos](Scene.md#ondrawgizmos)
- [Raycast](Scene.md#raycast)
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

[Scene.ts:25](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L25)

## Properties

### gameObjects

• **gameObjects**: [`GameObject`](GameObject.md)[] = `[]`

#### Defined in

[Scene.ts:15](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[Scene.ts:14](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L14)

___

### physicsRaycast

• `Readonly` **physicsRaycast**: `PhysicsRaycast`

#### Defined in

[Scene.ts:23](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L23)

___

### physicsScene

• `Readonly` **physicsScene**: `PxScene`

#### Defined in

[Scene.ts:22](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L22)

___

### rendererScene

• `Readonly` **rendererScene**: `Scene`

#### Defined in

[Scene.ts:21](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L21)

___

### userData

• **userData**: `any`

#### Defined in

[Scene.ts:19](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L19)

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

[Scene.ts:42](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L42)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.
Calls FixedUpdate on all attached components.

#### Returns

`void`

#### Defined in

[Scene.ts:89](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L89)

___

### GetActiveCamera

▸ **GetActiveCamera**(): [`Camera`](Components.Camera.md)

Get the current main camera.
The main camera is the camera that the client is viewing the scene from.

#### Returns

[`Camera`](Components.Camera.md)

- Current active camera.

#### Defined in

[Scene.ts:72](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L72)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:101](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L101)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:107](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L107)

___

### Raycast

▸ **Raycast**(`origin`, `direction`, `maxDistance`, `layerMask?`): `PxRaycastBuffer10`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `origin` | `Vector3` | `undefined` |
| `direction` | `Vector3` | `undefined` |
| `maxDistance` | `number` | `undefined` |
| `layerMask` | `number` | `0` |

#### Returns

`PxRaycastBuffer10`

#### Defined in

[Scene.ts:117](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L117)

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

[Scene.ts:51](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L51)

___

### Render

▸ **Render**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:122](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L122)

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

[Scene.ts:81](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L81)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:95](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L95)

___

### UpdatePhysics

▸ **UpdatePhysics**(): `void`

#### Returns

`void`

#### Defined in

[Scene.ts:113](https://github.com/AIFanatic/Trident/blob/f9d7b7c/src/Scene.ts#L113)
