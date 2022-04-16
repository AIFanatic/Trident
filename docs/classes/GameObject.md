[trident](../README.md) / [Exports](../modules.md) / GameObject

# Class: GameObject

The main component of the entity component system.

GameObjects can have any number of components added to them.

## Implements

- `IComponent`

## Table of contents

### Constructors

- [constructor](GameObject.md#constructor)

### Properties

- [classtype](GameObject.md#classtype)
- [components](GameObject.md#components)
- [layer](GameObject.md#layer)
- [name](GameObject.md#name)
- [scene](GameObject.md#scene)
- [transform](GameObject.md#transform)
- [uuid](GameObject.md#uuid)

### Methods

- [AddComponent](GameObject.md#addcomponent)
- [BroadcastMessage](GameObject.md#broadcastmessage)
- [CreatePrimitive](GameObject.md#createprimitive)
- [Destroy](GameObject.md#destroy)
- [FixedUpdate](GameObject.md#fixedupdate)
- [GetComponent](GameObject.md#getcomponent)
- [GetComponents](GameObject.md#getcomponents)
- [LateUpdate](GameObject.md#lateupdate)
- [OnDrawGizmos](GameObject.md#ondrawgizmos)
- [RemoveComponent](GameObject.md#removecomponent)
- [Update](GameObject.md#update)

## Constructors

### constructor

• **new GameObject**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Defined in

[components/GameObject.ts:33](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L33)

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/GameObject.ts:24](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L24)

___

### components

• **components**: [`Component`](Components.Component.md)[] = `[]`

#### Defined in

[components/GameObject.ts:29](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L29)

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

[components/GameObject.ts:31](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L31)

___

### name

• **name**: `string`

#### Defined in

[components/GameObject.ts:25](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L25)

___

### scene

• **scene**: [`Scene`](Scene.md)

#### Defined in

[components/GameObject.ts:27](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L27)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

[components/GameObject.ts:28](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L28)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/GameObject.ts:23](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L23)

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

[components/GameObject.ts:101](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L101)

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

[components/GameObject.ts:129](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L129)

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

[components/GameObject.ts:66](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L66)

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

[components/GameObject.ts:225](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L225)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:190](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L190)

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

[components/GameObject.ts:166](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L166)

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

[components/GameObject.ts:180](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L180)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:209](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L209)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:216](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L216)

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

[components/GameObject.ts:142](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L142)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:197](https://github.com/AIFanatic/Trident/blob/61d4a9b/src/components/GameObject.ts#L197)
