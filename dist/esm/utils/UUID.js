var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.v4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return UUID;
}());
export { UUID };
//# sourceMappingURL=UUID.js.map