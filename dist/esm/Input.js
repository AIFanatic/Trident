import { Vector2 } from "three";
var Input = /** @class */ (function () {
    function Input(scene) {
        var _this = this;
        this.keysDown = {};
        this.keysUp = {};
        this.mousePosition = new Vector2();
        this.horizontalAxis = 0;
        this.verticalAxis = 0;
        this.previousTouch = new Vector2();
        this.scene = scene;
        var canvas = this.scene.GetRenderer().renderer.domElement;
        document.onkeydown = function (event) { _this.OnKeyDown(event); };
        document.onkeyup = function (event) { _this.OnKeyUp(event); };
        canvas.onmousemove = function (event) { _this.OnMouseMove(event); };
        canvas.ontouchmove = function (event) { _this.OnTouchMove(event); };
    }
    Input.prototype.OnTouchMove = function (event) {
        event.preventDefault();
        this.mousePosition.x = event.touches[0].clientX;
        this.mousePosition.y = event.touches[0].clientY;
        this.horizontalAxis = Math.round(this.mousePosition.x - this.previousTouch.x);
        this.verticalAxis = Math.round(this.mousePosition.y - this.previousTouch.y);
        this.previousTouch.set(this.mousePosition.x, this.mousePosition.y);
    };
    Input.prototype.OnMouseMove = function (event) {
        this.mousePosition.x = event.clientX;
        this.mousePosition.y = event.clientY;
        this.horizontalAxis = event.movementX;
        this.verticalAxis = event.movementY;
    };
    Input.prototype.OnKeyDown = function (event) {
        if (this.keysDown[event.keyCode] === undefined) {
            this.keysDown[event.keyCode] = this.scene.currentFrame;
            delete this.keysUp[event.keyCode];
        }
    };
    Input.prototype.OnKeyUp = function (event) {
        this.keysUp[event.keyCode] = this.scene.currentFrame;
        delete this.keysDown[event.keyCode];
    };
    /**
     * Checks if the specified key was pressed down during the current frame.
     * This method only returns true once per key down event, the key needs to be released
     * and pressed again in order for the condition to be true once more.
     *
     * @param {KeyCodes} key - Key to check for press event.
     * @returns {boolean} - True if the key was pressed down during this frame.
     */
    Input.prototype.GetKeyDown = function (key) {
        if (this.keysDown[key] == this.scene.currentFrame) {
            return true;
        }
        return false;
    };
    /**
     * Checks if the specified key was released during the current frame.
     * This method only returns true once per release event, the key needs to be pressed down
     * and released again in order for the condition to be true once more.
     *
     * @param {KeyCodes} key - Key to check for release event.
     * @returns {boolean} - True if the key was released during this frame.
     */
    Input.prototype.GetKeyUp = function (key) {
        if (this.keysUp[key] == this.scene.currentFrame) {
            return true;
        }
        return false;
    };
    /**
     * Checks if the specified key is pressed down.
     * This method returns true while the key is pressed down.
     *
     * @param {KeyCodes} key - Key to check for press down event.
     * @returns {boolean} - True if the key is being pressed down.
     */
    Input.prototype.GetKey = function (key) {
        if (this.keysDown[key] !== undefined) {
            return true;
        }
        return false;
    };
    /**
     * Gets the mouse position difference between the previous frame and the current frame.
     * This method works with both the mouse and touch events.
     *
     * @param {"Horizontal"|"Vertical"} axisName - Axis to query.
     * @returns {number} - Mouse difference between the previous frame and the current fram.
     */
    Input.prototype.GetAxis = function (axisName) {
        if (axisName == "Horizontal") {
            return this.horizontalAxis;
        }
        else if (axisName == "Vertical") {
            return this.verticalAxis;
        }
    };
    Input.prototype.Tick = function () {
    };
    return Input;
}());
export { Input };
//# sourceMappingURL=Input.js.map