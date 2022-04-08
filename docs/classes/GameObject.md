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

[components/GameObject.ts:32](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L32)

## Properties

### classtype

• **classtype**: `ComponentsEnum`

#### Defined in

[components/GameObject.ts:23](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L23)

___

### components

• **components**: `any`[] = `[]`

#### Defined in

[components/GameObject.ts:28](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L28)

___

### layer

• **layer**: [`LayerMask`](../enums/LayerMask.md)

#### Defined in

[components/GameObject.ts:30](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L30)

___

### name

• **name**: `string`

#### Defined in

[components/GameObject.ts:24](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L24)

___

### scene

• **scene**: [`Scene`](Scene.md)

#### Defined in

[components/GameObject.ts:26](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L26)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

#### Defined in

[components/GameObject.ts:27](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L27)

___

### uuid

• **uuid**: `string`

#### Implementation of

IComponent.uuid

#### Defined in

[components/GameObject.ts:22](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L22)

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

[components/GameObject.ts:100](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L100)

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

[components/GameObject.ts:133](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L133)

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

[components/GameObject.ts:65](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L65)

___

### Destroy

▸ **Destroy**(): `void`

Remove the GameObject from the scene and all of its components.

#### Returns

`void`

#### Defined in

[components/GameObject.ts:268](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L268)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:204](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L204)

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

[components/GameObject.ts:179](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L179)

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

[components/GameObject.ts:194](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L194)

___

### LateUpdate

▸ **LateUpdate**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:225](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L225)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:147](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L147)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:259](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L259)

___

### OnEnable

▸ **OnEnable**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:141](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L141)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:253](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L253)

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:247](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L247)

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

[components/GameObject.ts:155](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L155)

___

### Start

▸ **Start**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:232](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L232)

___

### Stop

▸ **Stop**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:240](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L240)

___

### Update

▸ **Update**(): `void`

#### Returns

`void`

#### Defined in

[components/GameObject.ts:211](https://github.com/AIFanatic/Trident/blob/bbe6ccd/src/components/GameObject.ts#L211)
