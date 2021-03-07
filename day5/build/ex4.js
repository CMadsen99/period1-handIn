"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _value;
function genericReverser(items) {
    return items.reverse();
}
console.log(genericReverser(["a", "b", "c", "d"]));
console.log(genericReverser([1, 2, 3, 4, 5]));
console.log(genericReverser([true, true, false]));
//console.log(genericReverser<number>(["a","b","c"]));
class DataHolder {
    constructor(value) {
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _value, value);
    }
    // setValue(value: T): void {
    //     this.#value = value;
    // }
    // getValue() {
    //     return this.#value;
    // }
    get value() { return __classPrivateFieldGet(this, _value); }
    set value(value) { __classPrivateFieldSet(this, _value, value); }
}
_value = new WeakMap();
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=ex4.js.map