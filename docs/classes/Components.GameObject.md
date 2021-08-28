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

components/GameObject.ts:29

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

components/GameObject.ts:20

___

### components

• **components**: `any`[] = `[]`

#### Defined in

components/GameObject.ts:25

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

components/GameObject.ts:27

___

### name

• **name**: `string`

#### Implementation of

IComponent.name

#### Defined in

components/GameObject.ts:21

___

### scene

• **scene**: [`Scene`](Scene.md)

#### Defined in

components/GameObject.ts:23

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

components/GameObject.ts:24

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

components/GameObject.ts:19

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

components/GameObject.ts:70

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

components/GameObject.ts:103

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

components/GameObject.ts:238

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:174

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

components/GameObject.ts:149

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

components/GameObject.ts:164

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:195

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:117

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:229

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:111

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:223

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:217

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

components/GameObject.ts:125

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:202

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:210

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

components/GameObject.ts:181