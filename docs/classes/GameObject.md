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
- [Destroy](GameObject.md#destroy)
- [FixedUpdate](GameObject.md#fixedupdate)
- [GetComponent](GameObject.md#getcomponent)
- [GetComponents](GameObject.md#getcomponents)
- [LateUpdate](GameObject.md#lateupdate)
- [OnDisable](GameObject.md#ondisable)
- [OnDrawGizmos](GameObject.md#ondrawgizmos)
- [OnEnable](GameObject.md#onenable)
- [OnGizmosDisabled](GameObject.md#ongizmosdisabled)
- [OnGizmosEnabled](GameObject.md#ongizmosenabled)
- [RemoveComponent](GameObject.md#removecomponent)
- [Start](GameObject.md#start)
- [Stop](GameObject.md#stop)
- [Update](GameObject.md#update)

## Constructors

### constructor

• **new GameObject**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Defined in

[components/GameObject.ts:29](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L29)

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/GameObject.ts:20](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L20)

___

### components

• **components**: `any`[] = `[]`

#### Defined in

[components/GameObject.ts:25](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L25)

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

[components/GameObject.ts:27](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L27)

___

### name

• **name**: `string`

#### Implementation of

IComponent.name

#### Defined in

[components/GameObject.ts:21](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L21)

___

### scene

• **scene**: [`Scene`](Scene.md)

#### Defined in

[components/GameObject.ts:23](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L23)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

[components/GameObject.ts:24](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L24)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/GameObject.ts:19](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L19)

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

[components/GameObject.ts:70](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L70)

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

[components/GameObject.ts:103](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L103)

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

[components/GameObject.ts:238](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L238)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:174](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L174)

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

[components/GameObject.ts:149](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L149)

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

[components/GameObject.ts:164](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L164)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:195](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L195)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:117](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L117)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:229](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L229)

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:111](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L111)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:223](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L223)

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:217](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L217)

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

[components/GameObject.ts:125](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L125)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:202](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L202)

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:210](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L210)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:181](https://github.com/AIFanatic/Trident/blob/8a19b43/src/components/GameObject.ts#L181)
