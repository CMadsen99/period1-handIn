function myFilter(array, callback) {
    const filterArray = [];
    array.forEach(element => {
        if(callback(element)) {
            filterArray.push(element);
        }
    });
    return filterArray;
};

function filter(i) {
    if (i >= 2000) {
        return true;
    } else {
        return false;
    };
};

const filterArray = [1998, 1999, 2000, 2001, 2002];

const filterResult = myFilter(filterArray, filter, 2000);
console.log(filterResult);

const filterResult2 = filterArray.filter(element => element >= 2000);
console.log(filterResult2);


function myMap(array, callback) {
    const mapArray = [];
    array.forEach(element => {
        mapArray.push(callback(element));        
    });
    return mapArray;
}

function map (i) {
    return i*2;
}

const mapArray = [1,2,3,4,5];

const mapResult = myMap(mapArray, map);
console.log(mapResult);

const mapResult2 = mapArray.map(element => element*2);
console.log(mapResult2);


Array.prototype.myFilter = function(callback) {
    const filterArray = [];
    this.forEach(element => {
        if(callback(element)) {
            filterArray.push(element);
        }
    });
    return filterArray;
}

const filterResult3 = filterArray.myFilter(element => element >= 2000);
console.log(filterResult3);


Array.prototype.myMap = function(callback) {
    const mapArray = [];
    this.forEach(element => {
        mapArray.push(callback(element));        
    });
    return mapArray;
}

const mapResult3 = mapArray.myMap(element => element*2);
console.log(mapResult3);


var all = ["Lars", "Peter", "Jan", "Bo"];
let join1 = all.join();
console.log(join1);

let join2 = all.join(" ");
console.log(join2);

let join3 = all.join("#");
console.log(join3);

var numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));


let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];

var reducer2 = function(accumulator, member, index, arr) {
    let total = accumulator + member.age;
    if((index + 1) == arr.length) {
        total = total/arr.length;
    }    
    return total;
};
console.log(members.reduce((reducer2), 0));


var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

var reducer3 = function(allVotes, vote) {
    allVotes = {};
    if (vote in allVotes) {
        allVotes[vote]++;        
    } else {
        allVotes[vote] = 1;
    }
    return allVotes;
};
console.log(votes.reduce(reducer3));

let countedVotes = votes.reduce(function (allVotes, vote) {
    if (vote in allVotes) {
        allVotes[vote]++;        
    } else {
        allVotes[vote] = 1;
    }
    return allVotes;
}, {});
console.log(countedVotes);