import { Vector2 } from "three";
import { Runtime } from ".";
import { KeyCodes } from "./enums/KeyCodes";

export class Input {
    private runtime: Runtime;
    private keysDown: any = {};
    private keysUp: any = {};

    private mousePosition: Vector2 = new Vector2();
    private horizontalAxis: number = 0;
    private verticalAxis: number = 0;

    private previousTouch: Vector2 = new Vector2();

    constructor(runtime: Runtime) {
        this.runtime = runtime;
        // const canvas = Runtime.Renderer.renderer.domElement;

        // document.onkeydown = (event) => { this.OnKeyDown(event) };
        // document.onkeyup = (event) => { this.OnKeyUp(event) };
        // canvas.onmousemove = (event) => { this.OnMouseMove(event) };
        // canvas.ontouchmove = (event) => { this.OnTouchMove(event); };
    }

    private OnTouchMove(event: TouchEvent) {
        event.preventDefault();
        this.mousePosition.x = event.touches[0].clientX;
        this.mousePosition.y = event.touches[0].clientY;
        this.horizontalAxis = Math.round(this.mousePosition.x - this.previousTouch.x);
        this.verticalAxis = Math.round(this.mousePosition.y - this.previousTouch.y);
        this.previousTouch.set(this.mousePosition.x, this.mousePosition.y);
    }

    private OnMouseMove(event: MouseEvent) {
        this.mousePosition.x = event.clientX;
        this.mousePosition.y = event.clientY;
        this.horizontalAxis = event.movementX;
        this.verticalAxis = event.movementY;
    }

    private OnKeyDown(event: KeyboardEvent) {
        if (this.keysDown[event.keyCode] === undefined) {
            this.keysDown[event.keyCode] = this.runtime.currentFrame;  
            delete this.keysUp[event.keyCode];  
        }
    }

    private OnKeyUp(event: KeyboardEvent) {
        this.keysUp[event.keyCode] = this.runtime.currentFrame;
        delete this.keysDown[event.keyCode];
    }
    
    /**
     * Checks if the specified key was pressed down during the current frame.
     * This method only returns true once per key down event, the key needs to be released 
     * and pressed again in order for the condition to be true once more.
     * 
     * @param {KeyCodes} key - Key to check for press event.
     * @returns {boolean} - True if the key was pressed down during this frame.
     */
    public GetKeyDown(key: KeyCodes): boolean {
        if (this.keysDown[key] == this.runtime.currentFrame)  {
            return true;
        }
        return false;
    }
    
    /**
     * Checks if the specified key was released during the current frame.
     * This method only returns true once per release event, the key needs to be pressed down 
     * and released again in order for the condition to be true once more.
     * 
     * @param {KeyCodes} key - Key to check for release event.
     * @returns {boolean} - True if the key was released during this frame.
     */
    public GetKeyUp(key: KeyCodes): boolean {
        if (this.keysUp[key] == this.runtime.currentFrame)  {
            return true;
        }
        return false;
    }
    
    /**
     * Checks if the specified key is pressed down.
     * This method returns true while the key is pressed down.
     * 
     * @param {KeyCodes} key - Key to check for press down event.
     * @returns {boolean} - True if the key is being pressed down.
     */
    public GetKey(key: KeyCodes): boolean {
        if (this.keysDown[key] !== undefined) {
            return true;
        }
        return false;
    }
    
    /**
     * Gets the mouse position difference between the previous frame and the current frame.
     * This method works with both the mouse and touch events.
     * 
     * @param {"Horizontal"|"Vertical"} axisName - Axis to query.
     * @returns {number} - Mouse difference between the previous frame and the current fram.
     */
    public GetAxis(axisName: "Horizontal" | "Vertical"): number {
        if (axisName == "Horizontal") {
            return this.horizontalAxis;
        }
        else if (axisName == "Vertical") {
            return this.verticalAxis;
        }
    }

    public Tick() {
    }
}