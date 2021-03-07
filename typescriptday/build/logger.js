"use strict";
/*
function logger(a, b){
    console.log(`Value 1: ${a}, value 2: ${b}`);
   }
   let a = 12, b = "Hello World";
   logger(a, b);
*/
/*
function loggerV2(a:number, b:string){
    console.log(`Value 1: ${a}, value 2: ${b}`);
}
let a = 12, b = "Hello World";
loggerV2(a, b);
*/
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
var _name;
function loggerV3(a, b) {
    console.log(`Value 1: ${a.name}, value 2: ${b.street}`);
}
class Person {
    constructor(name) {
        //private _name : String;
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    get name() { return __classPrivateFieldGet(this, _name); }
    set name(name) { __classPrivateFieldSet(this, _name, name); }
    toString() { return __classPrivateFieldGet(this, _name); }
}
_name = new WeakMap();
class Address {
    constructor(street) { this._street = street; }
    get street() { return this._street; }
    set street(street) { this._street = street; }
    toString() { return this._street; }
}
let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngby Hovedgade 23");
loggerV3(p1, a1);
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`Value 1: ${a}, value 2: ${b}`);
    }
    ;
}
let personLogger = new GenericLogger();
personLogger.log(p1, a1);
let whateverLogger = new GenericLogger();
whateverLogger.log(34, "Hej");
//# sourceMappingURL=logger.js.map