interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
};

class Book implements IBook {
    #title: string
    #author: string
    #published: Date
    #pages: number
    constructor (title: string, author: string, published: Date, pages: number){
        this.#title = title,
        this.#author = author,
        this.#published = published,
        this.#pages = pages
    }
    get title():string {return this.#title}
    get author():string {return this.#author}
    get published():Date {return this.#published}
    get pages():number {return this.#pages}
    set title(title:string) {this.#title= title}
    set author(author:string) {this.#author= author}
    set published(pubished:Date) {this.#published= pubished}
    set pages(pages:number) {this.#pages= pages}
    toString():string {return `${this.#title}, ${this.#author}, ${this.#published}, ${this.#pages}`}
  }

function testBook(book: IBook) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

const b1: IBook = {
    title: "Moby Dick",
    author: "Herman Melville",
    published: new Date("1851-10-18"),
    pages: 500
};

const book1 = new Book(b1.title, b1.author, b1.published!, b1.pages!);

//b1.author = "Mig";

//testBook(b1);
testBook(book1);

/*
According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types. 
TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.
*/