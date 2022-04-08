[trident](../README.md) / [Exports](../modules.md) / Input

# Class: Input

## Table of contents

### Constructors

- [constructor](Input.md#constructor)

### Methods

- [GetAxis](Input.md#getaxis)
- [GetKey](Input.md#getkey)
- [GetKeyDown](Input.md#getkeydown)
- [GetKeyUp](Input.md#getkeyup)
- [Tick](Input.md#tick)

## Constructors

### constructor

• **new Input**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene`](Scene.md) |

#### Defined in

[Input.ts:16](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L16)

## Methods

### GetAxis

▸ **GetAxis**(`axisName`): `number`

Gets the mouse position difference between the previous frame and the current frame.
This method works with both the mouse and touch events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axisName` | ``"Horizontal"`` \| ``"Vertical"`` | Axis to query. |

#### Returns

`number`

- Mouse difference between the previous frame and the current fram.

#### Defined in

[Input.ts:105](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L105)

___

### GetKey

▸ **GetKey**(`key`): `boolean`

Checks if the specified key is pressed down.
This method returns true while the key is pressed down.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`KeyCodes`](../enums/KeyCodes.md) | Key to check for press down event. |

#### Returns

`boolean`

- True if the key is being pressed down.

#### Defined in

[Input.ts:91](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L91)

___

### GetKeyDown

▸ **GetKeyDown**(`key`): `boolean`

Checks if the specified key was pressed down during the current frame.
This method only returns true once per key down event, the key needs to be released
and pressed again in order for the condition to be true once more.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`KeyCodes`](../enums/KeyCodes.md) | Key to check for press event. |

#### Returns

`boolean`

- True if the key was pressed down during this frame.

#### Defined in

[Input.ts:62](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L62)

___

### GetKeyUp

▸ **GetKeyUp**(`key`): `boolean`

Checks if the specified key was released during the current frame.
This method only returns true once per release event, the key needs to be pressed down
and released again in order for the condition to be true once more.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`KeyCodes`](../enums/KeyCodes.md) | Key to check for release event. |

#### Returns

`boolean`

- True if the key was released during this frame.

#### Defined in

[Input.ts:77](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L77)

___

### Tick

▸ **Tick**(): `void`

#### Returns

`void`

#### Defined in

[Input.ts:114](https://github.com/AIFanatic/Trident/blob/3ffcf38/src/Input.ts#L114)
