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

  ↳ [`Cube`](Components.Cube.md)

  ↳ [`Sphere`](Components.Sphere.md)

  ↳ [`Capsule`](Components.Capsule.md)

  ↳ [`Plane`](Components.Plane.md)

  ↳ [`PointLight`](Components.PointLight.md)

  ↳ [`DirectionalLight`](Components.DirectionalLight.md)

  ↳ [`SpotLight`](Components.SpotLight.md)

  ↳ [`AreaLight`](Components.AreaLight.md)

## Implements

- `IComponent`

## Table of contents

### Constructors

- [constructor](Components.Component.md#constructor)

### Properties

- [classname](Components.Component.md#classname)
- [classtype](Components.Component.md#classtype)
- [gameObject](Components.Component.md#gameobject)
- [hasStarted](Components.Component.md#hasstarted)
- [name](Components.Component.md#name)
- [transform](Components.Component.md#transform)
- [uuid](Components.Component.md#uuid)

### Methods

- [Destroy](Components.Component.md#destroy)
- [FixedUpdate](Components.Component.md#fixedupdate)
- [LateUpdate](Components.Component.md#lateupdate)
- [OnDisable](Components.Component.md#ondisable)
- [OnDrawGizmos](Components.Component.md#ondrawgizmos)
- [OnEnable](Components.Component.md#onenable)
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

components/Component.ts:57

## Properties

### classname

• **classname**: `string`

Used to identify the class name of individual components.

#### Defined in

components/Component.ts:35

___

### classtype

• `Readonly` **classtype**: `string` = `"Component"`

Used to detect valid components.

#### Defined in

components/Component.ts:30

___

### gameObject

• **gameObject**: [`GameObject`](GameObject.md)

GameObject the this component is attached to.

#### Defined in

components/Component.ts:45

___

### hasStarted

• **hasStarted**: `boolean`

**`todo`** Indicates that this component has started.

#### Defined in

components/Component.ts:55

___

### name

• **name**: `string`

Name of the component.

#### Implementation of

IComponent.name

#### Defined in

components/Component.ts:40

___

### transform

• **transform**: [`Transform`](Components.Transform.md)

Transform that this component is attached to.

#### Defined in

components/Component.ts:50

___

### uuid

• **uuid**: `string`

UUID of the component. Generated randomly.

#### Implementation of

IComponent.uuid

#### Defined in

components/Component.ts:25

## Methods

### Destroy

▸ **Destroy**(): `void`

Called when the component is destroyed.

#### Returns

`void`

#### Defined in

components/Component.ts:126

___

### FixedUpdate

▸ **FixedUpdate**(): `void`

Called before every Physics update.

#### Returns

`void`

#### Defined in

components/Component.ts:89

___

### LateUpdate

▸ **LateUpdate**(): `void`

Called after every Renderer update.

#### Returns

`void`

#### Defined in

components/Component.ts:101

___

### OnDisable

▸ **OnDisable**(): `void`

#### Returns

`void`

#### Defined in

components/Component.ts:71

___

### OnDrawGizmos

▸ **OnDrawGizmos**(): `void`

Called after every Update if Gizmos are enabled.

#### Returns

`void`

#### Defined in

components/Component.ts:120

___

### OnEnable

▸ **OnEnable**(): `void`

Called once when the component is first added to a GameObject.

#### Returns

`void`

#### Defined in

components/Component.ts:68

___

### OnGizmosDisabled

▸ **OnGizmosDisabled**(): `void`

Called once when Gizmos are disabled.

#### Returns

`void`

#### Defined in

components/Component.ts:114

___

### OnGizmosEnabled

▸ **OnGizmosEnabled**(): `void`

Called once when Gizmos are enabled.
If Gizmos are enabled before the component is created this method is called once after Start.

#### Returns

`void`

#### Defined in

components/Component.ts:108

___

### Start

▸ **Start**(): `void`

Called once after the scene is started.

#### Returns

`void`

#### Defined in

components/Component.ts:77

___

### Stop

▸ **Stop**(): `void`

Called once after the scene is stopped.

#### Returns

`void`

#### Defined in

components/Component.ts:83

___

### Update

▸ **Update**(): `void`

Called before every Renderer update.

#### Returns

`void`

#### Defined in

components/Component.ts:95
