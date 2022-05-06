[trident](../README.md) / [Exports](../modules.md) / [Components](../modules/Components.md) / Component

# Class: Component

[Components](../modules/Components.md).Component

Base class that all components inherit from.
Can be extended to create custom components.

**`example`**
```typescript
class CustomComponent extends Component {
  public Start() {
  }    
}
const gameObject = new GameObject(scene);
const customComponent = gameObject.AddComponent(CustomComponent) as CustomComponent;
```

## Hierarchy

- **`Component`**

  ↳ [`Camera`](Components.Camera.md)

  ↳ [`MeshFilter`](Components.MeshFilter.md)

  ↳ [`MeshRenderer`](Components.MeshRenderer.md)

  ↳ [`Rigidbody`](Components.Rigidbody.md)

  ↳ [`Animation`](Components.Animation.md)

  ↳ [`LineRenderer`](Components.LineRenderer.md)

  ↳ [`Gizmo`](Components.Gizmo.md)

  ↳ [`PointLight`](Components.PointLight.md)

  ↳ [`DirectionalLight`](Components.DirectionalLight.md)

  ↳ [`SpotLight`](Components.SpotLight.md)

  ↳ [`AreaLight`](Components.AreaLight.md)

  ↳ [`ArticulationBody`](Components.ArticulationBody.md)

## Implements

- `IComponent`

## Table of contents

### Constructors

- [constructor](Components.Component.md#constructor)

### Properties

- [classname](Components.Component.md#classname)
- [classtype](Components.Component.md#classtype)
- [gameObject](Components.Component.md#gameobject)
- [hideFlags](Components.Component.md#hideflags)
- [isAwake](Components.Component.md#isawake)
- [isStarted](Components.Component.md#isstarted)
- [transform](Components.Component.md#transform)
- [userData](Components.Component.md#userdata)
- [uuid](Components.Component.md#uuid)

### Methods

- [Awake](Components.Component.md#awake)
- [Destroy](Components.Component.md#destroy)
- [FixedUpdate](Components.Component.md#fixedupdate)
- [LateUpdate](Components.Component.md#lateupdate)
- [OnDisable](Components.Component.md#ondisable)
- [OnDrawGizmos](Components.Component.md#ondrawgizmos)
- [OnGizmosDisabled](Components.Component.md#ongizmosdisabled)
- [OnGizmosEnabled](Components.Component.md#ongizmosenabled)
- [Start](Components.Component.md#start)
- [Stop](Components.Component.md#stop)
- [Update](Components.Component.md#update)

## Constructors

### constructor

• **new Component**(`gameObject`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) |
| `transform` | [`Transform`](Components.Transform.md) |

#### Defined in

[components/Component.ts:59](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L59)

## Properties

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Defined in

[components/Component.ts:36](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L36)

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Defined in

[components/Component.ts:31](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L31)

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Defined in

[components/Component.ts:41](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L41)

___

### hideFlags

• **hideFlags**: [`HideFlags`](../enums/HideFlags.md)

#### Defined in

[components/Component.ts:57](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L57)

___

### isAwake

• **isAwake**: `boolean` = `false`

#### Defined in

[components/Component.ts:53](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L53)

___

### isStarted

• **isStarted**: `boolean` = `false`

**`todo`** Indicates that this component has started.

#### Defined in

[components/Component.ts:51](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L51)

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Defined in

[components/Component.ts:46](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L46)

___

### userData

• **userData**: `any`

#### Defined in

[components/Component.ts:55](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L55)

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Implementation of

IComponent.uuid

#### Defined in

[components/Component.ts:26](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L26)

## Methods

### Awake

▸ **Awake**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Defined in

[components/Component.ts:70](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L70)

___

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Defined in

[components/Component.ts:127](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L127)

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Defined in

[components/Component.ts:90](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L90)

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Defined in

[components/Component.ts:102](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L102)

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

[components/Component.ts:72](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L72)

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Defined in

[components/Component.ts:121](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L121)

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Defined in

[components/Component.ts:115](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L115)

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

Called once when Gizmos are enabled.
If Gizmos are enabled before the component is created this method is called once after Start.

#### Returns

`void`

#### Defined in

[components/Component.ts:109](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L109)

___

### Start

▸ **Start**(): `any`

Called once after the scene is started.

#### Returns

`any`

#### Defined in

[components/Component.ts:78](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L78)

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Defined in

[components/Component.ts:84](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L84)

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Defined in

[components/Component.ts:96](https://github.com/AIFanatic/Trident/blob/456b6ba/src/components/Component.ts#L96)
