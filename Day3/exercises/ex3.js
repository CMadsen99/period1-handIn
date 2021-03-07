const fetch = require("node-fetch");
const now = require("performance-now");

const URL = "https://swapi.dev/api/people/"
const start = now();
const end = now();

async function fetchPerson(url){
    try {
        const n = await fetch(url).then(res => res.json());
        return n;
    } catch (err) {
        console.log(err);
    }
}

async function printNames() {    
    console.log("Before");
    console.log(start.toFixed(3));
    const person1 = await fetchPerson(URL+'1');
    console.log((start-end).toFixed(3));
    const person2 = await fetchPerson(URL+'2');
    console.log((start-end).toFixed(3));
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all");    
}

printNames();

async function printNamesParal() {    
    console.log("Before");
    console.log(start.toFixed(3));
    const person1 = fetchPerson(URL+'1');
    const person2 = fetchPerson(URL+'2');    
    const result = await Promise.all([person1,person2]);
    console.log((start-end).toFixed(3));
    console.log(result[0].name, result[1].name);
    console.log("After all");    
}

printNamesParal();