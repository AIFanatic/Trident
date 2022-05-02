[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / GameObject

# Class: GameObject

[Components](../modules/Components.md).GameObject

The main component of the entity component system.

GameObjects can have any number of components added to them.

## Implements

- `IComponent`

## Table of contents

### Constructors

- [constructor](Components.GameObject.md#constructor)

### Properties

- [classtype](Components.GameObject.md#classtype)
- [components](Components.GameObject.md#components)
- [hideFlags](Components.GameObject.md#hideflags)
- [layer](Components.GameObject.md#layer)
- [name](Components.GameObject.md#name)
- [scene](Components.GameObject.md#scene)
- [transform](Components.GameObject.md#transform)
- [uuid](Components.GameObject.md#uuid)

### Methods

- [AddComponent](Components.GameObject.md#addcomponent)
- [BroadcastMessage](Components.GameObject.md#broadcastmessage)
- [CreatePrimitive](Components.GameObject.md#createprimitive)
- [Destroy](Components.GameObject.md#destroy)
- [FixedUpdate](Components.GameObject.md#fixedupdate)
- [GetComponent](Components.GameObject.md#getcomponent)
- [GetComponents](Components.GameObject.md#getcomponents)
- [LateUpdate](Components.GameObject.md#lateupdate)
- [OnDrawGizmos](Components.GameObject.md#ondrawgizmos)
- [RemoveComponent](Components.GameObject.md#removecomponent)
- [Tick](Components.GameObject.md#tick)
- [Update](Components.GameObject.md#update)

## Constructors

### constructor

• **new GameObject**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Defined in

[components/GameObject.ts:37](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L37)

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/GameObject.ts:25](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L25)

___

### components

• **components**: [`Component`](Components.Component.md)[] = `[]`

#### Defined in

[components/GameObject.ts:29](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L29)

___

### hideFlags

• **hideFlags**: [`HideFlags`](../enums/HideFlags.md)

#### Defined in

[components/GameObject.ts:33](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L33)

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

[components/GameObject.ts:31](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L31)

___

### name

• **name**: `string`

#### Defined in

[components/GameObject.ts:26](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L26)

___

### scene

• `Readonly` **scene**: [`Scene`](Scene.md)

#### Defined in

[components/GameObject.ts:35](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L35)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

[components/GameObject.ts:28](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L28)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/GameObject.ts:24](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L24)

## Methods

### AddComponent

▸ **AddComponent**<`T`\>(`component`): `T`

Add a new component to this GameObject.

The added component must extend the class Component.

**`example`**
```typescript
class CustomComponent extends Component {
  public Start() {
  }    
}
const gameObject = new GameObject(scene);
const customComponent = gameObject.AddComponent(CustomComponent) as CustomComponent;
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Components.Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | (...`args`: `any`[]) => `T` | The component class to be attached to this GameObject. |

#### Returns

`T`

- If successful it returns an instance of the passed component, null otherwise.

#### Defined in

[components/GameObject.ts:105](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L105)

___

### BroadcastMessage

▸ **BroadcastMessage**(`methodName`, `parameter`): `void`

Call a method on any attached component that implements it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodName` | `string` | The name of the method to be called. |
| `parameter` | `any` | Parameters to be called with the method. |

#### Returns

`void`

#### Defined in

[components/GameObject.ts:133](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L133)

___

### CreatePrimitive

▸ **CreatePrimitive**(`primitive`): [`GameObject`](GameObject.md)

Attaches a primitive mesh renderer and appropriate collider to this GameObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `primitive` | [`PrimitiveType`](../enums/PrimitiveType.md) | The type of primitive object to create. |

#### Returns

[`GameObject`](GameObject.md)

- Returns the GameObject.

#### Defined in

[components/GameObject.ts:70](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L70)

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

[components/GameObject.ts:227](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L227)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:198](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L198)

___

### GetComponent

▸ **GetComponent**<`T`\>(`type`): `T`

Get the instance of a component with the specified type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Components.Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | (...`args`: `any`[]) => `T` | The class of the component to search for. |

#### Returns

`T`

- If the component is found returns it, null otherwise.

#### Defined in

[components/GameObject.ts:170](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L170)

___

### GetComponents

▸ **GetComponents**<`T`\>(`type`): `T`[]

Get a list of instances of a component with the specified type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Components.Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | (...`args`: `any`[]) => `T` | The class of the component to search for. |

#### Returns

`T`[]

- A list of the matched components, empty list otherwise.

#### Defined in

[components/GameObject.ts:184](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L184)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:218](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L218)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:212](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L212)

___

### RemoveComponent

▸ **RemoveComponent**(`component`): `boolean`

Removes a component from the GameObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | [`Component`](Components.Component.md) | The instance of the component to be removed. |

#### Returns

`boolean`

- If successful returns true, false otherwise.

#### Defined in

[components/GameObject.ts:146](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L146)

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:194](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L194)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:204](https://github.com/AIFanatic/Trident/blob/44c915e/src/components/GameObject.ts#L204)
