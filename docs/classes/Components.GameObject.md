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
- [OnDisable](Components.GameObject.md#ondisable)
- [OnDrawGizmos](Components.GameObject.md#ondrawgizmos)
- [OnEnable](Components.GameObject.md#onenable)
- [OnGizmosDisabled](Components.GameObject.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.GameObject.md#ongizmosenabled)
- [RemoveComponent](Components.GameObject.md#removecomponent)
- [Start](Components.GameObject.md#start)
- [Stop](Components.GameObject.md#stop)
- [Update](Components.GameObject.md#update)

## Constructors

### constructor

• **new GameObject**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Defined in

[components/GameObject.ts:30](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L30)

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/GameObject.ts:21](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L21)

___

### components

• **components**: `any`[] = `[]`

#### Defined in

[components/GameObject.ts:26](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L26)

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

[components/GameObject.ts:28](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L28)

___

### name

• **name**: `string`

#### Defined in

[components/GameObject.ts:22](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L22)

___

### scene

• **scene**: [`Scene`](Scene.md)

#### Defined in

[components/GameObject.ts:24](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L24)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

[components/GameObject.ts:25](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L25)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/GameObject.ts:20](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L20)

## Methods

### AddComponent

▸ **AddComponent**(`component`): `any`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `any` | The component class to be attached to this GameObject. |

#### Returns

`any`

- If successful it returns an instance of the passed component, null otherwise.

#### Defined in

[components/GameObject.ts:84](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L84)

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

[components/GameObject.ts:117](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L117)

___

### CreatePrimitive

▸ **CreatePrimitive**(`primitive`): [`GameObject`](GameObject.md)

Attaches a primitive mesh renderer and appropriate collider to this GameObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `primitive` | (`gameObject`: [`GameObject`](GameObject.md)) => `void` | The type of primitive object to create. |

#### Returns

[`GameObject`](GameObject.md)

- Returns the GameObject.

#### Defined in

[components/GameObject.ts:63](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L63)

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

[components/GameObject.ts:252](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L252)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:188](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L188)

___

### GetComponent

▸ **GetComponent**(`type`): `any`

Get the instance of a component with the specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | The class of the component to search for. |

#### Returns

`any`

- If the component is found returns it, null otherwise.

#### Defined in

[components/GameObject.ts:163](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L163)

___

### GetComponents

▸ **GetComponents**(`type`): `any`[]

Get a list of instances of a component with the specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | The class of the component to search for. |

#### Returns

`any`[]

- A list of the matched components, empty list otherwise.

#### Defined in

[components/GameObject.ts:178](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L178)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:209](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L209)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:131](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L131)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:243](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L243)

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:125](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L125)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:237](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L237)

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:231](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L231)

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

[components/GameObject.ts:139](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L139)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:216](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L216)

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:224](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L224)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:195](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/components/GameObject.ts#L195)
