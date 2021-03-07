"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(color) { this._color = color; }
    toString() { return `${this._color}`; }
}
//let shape = new Shape("red");
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get area() {
        return 3.14 * (this._radius * this._radius);
    }
    get perimeter() {
        return (2 * this._radius) * 3.14;
    }
    get radius() { return this._radius; }
    set radius(radius) { this._radius = radius; }
}
let circle = new Circle("green", 5);
console.log(circle.color, circle.radius);
circle.color = "blue";
circle.radius = 7;
console.log(circle.color, circle.radius);
console.log(circle.area);
console.log(circle.perimeter);
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return (3.14 * 2) * this.radius * (this._height + this.radius);
    }
    get perimeter() {
        throw console_1.error("Not implemented");
    }
    getVolume() {
        return 3.14 * (this.radius * this.radius) * this._height;
    }
    get height() { return this._height; }
    set height(height) { this._height = height; }
}
let cylinder = new Cylinder("red", 6, 5);
console.log(cylinder.color, cylinder.radius, cylinder.height);
cylinder.color = "gray";
cylinder.radius = 8;
cylinder.height = 9;
console.log(cylinder.color, cylinder.radius, cylinder.height);
console.log(cylinder.area);
console.log(cylinder.getVolume());
console.log(cylinder.perimeter);
//# sourceMappingURL=ex5.js.map