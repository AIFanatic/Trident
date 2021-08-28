import { KeyCodes } from "./enums/KeyCodes";
import { Scene } from "./Scene";
export declare class Input {
    private scene;
    private keysDown;
    private keysUp;
    private mousePosition;
    private horizontalAxis;
    private verticalAxis;
    private previousTouch;
    constructor(scene: Scene);
    private OnTouchMove;
    private OnMouseMove;
    private OnKeyDown;
    private OnKeyUp;
    /**
     * Checks if the specified key was pressed down during the current frame.
     * This method only returns true once per key down event, the key needs to be released
     * and pressed again in order for the condition to be true once more.
     *
     * @param {KeyCodes} key - Key to check for press event.
     * @returns {boolean} - True if the key was pressed down during this frame.
     */
    GetKeyDown(key: KeyCodes): boolean;
    /**
     * Checks if the specified key was released during the current frame.
     * This method only returns true once per release event, the key needs to be pressed down
     * and released again in order for the condition to be true once more.
     *
     * @param {KeyCodes} key - Key to check for release event.
     * @returns {boolean} - True if the key was released during this frame.
     */
    GetKeyUp(key: KeyCodes): boolean;
    /**
     * Checks if the specified key is pressed down.
     * This method returns true while the key is pressed down.
     *
     * @param {KeyCodes} key - Key to check for press down event.
     * @returns {boolean} - True if the key is being pressed down.
     */
    GetKey(key: KeyCodes): boolean;
    /**
     * Gets the mouse position difference between the previous frame and the current frame.
     * This method works with both the mouse and touch events.
     *
     * @param {"Horizontal"|"Vertical"} axisName - Axis to query.
     * @returns {number} - Mouse difference between the previous frame and the current fram.
     */
    GetAxis(axisName: "Horizontal" | "Vertical"): number;
    Tick(): void;
}
