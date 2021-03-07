function genericReverser<T>(items:T[]) :T[] {
        return items.reverse();
}

console.log(genericReverser<string>(["a","b","c","d"]));
console.log(genericReverser<number>([1,2,3,4,5]));
console.log(genericReverser<boolean>([true,true,false]));
//console.log(genericReverser<number>(["a","b","c"]));

class DataHolder<T> {
    #value: T;

    constructor (value: T){
        this.#value = value;
    }

    // setValue(value: T): void {
    //     this.#value = value;
    // }

    // getValue() {
    //     return this.#value;
    // }
    get value():T {return this.#value}
    set value(value:T) {this.#value= value}
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
