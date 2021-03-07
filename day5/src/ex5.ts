import { error } from "console";

abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;

    get color():string {return this._color}
    set color(color:string) {this._color= color}
    toString():string {return `${this._color}`}
  }

  //let shape = new Shape("red");

  class Circle extends Shape {
      private _radius:number;
      constructor(color:string, radius:number) {
          super(color);
          this._radius = radius;
      }
      get area(): number {
        return 3.14*(this._radius*this._radius);
      }
      get perimeter(): number {
        return (2*this._radius)*3.14;
      }

      get radius():number {return this._radius}
      set radius(radius:number) {this._radius= radius}
  }

  let circle = new Circle("green", 5);
  console.log(circle.color, circle.radius);
  circle.color = "blue";
  circle.radius = 7;
  console.log(circle.color, circle.radius);
  console.log(circle.area);
  console.log(circle.perimeter);

  class Cylinder extends Circle {
    private _height:number;
    constructor(color:string, radius:number, height:number) {
        super(color,radius);
        this._height = height;
    }
    get area(): number {
        return (3.14 * 2) * this.radius * (this._height + this.radius)
    }
    get perimeter(): number {
        throw error("Not implemented");
    }
    getVolume(){
        return 3.14 * (this.radius*this.radius) * this._height
    }
    get height():number {return this._height}
    set height(height:number) {this._height= height}
  }

  let cylinder = new Cylinder("red", 6,5);
  console.log(cylinder.color, cylinder.radius, cylinder.height);
  cylinder.color = "gray";
  cylinder.radius = 8;
  cylinder.height = 9;
  console.log(cylinder.color, cylinder.radius, cylinder.height);
  console.log(cylinder.area);
  console.log(cylinder.getVolume());
  console.log(cylinder.perimeter);
  