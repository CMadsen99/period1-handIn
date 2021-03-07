interface myFunc {
    (s1:string,s2:string,s3:string) : Array<string>;
}

function myFuncLow(s1:string, s2:string, s3:string) { 
    return [s1,s2,s3]
}

function myFuncUp(s1:string, s2:string, s3:string) {     
    return [s1.toUpperCase(),s2.toUpperCase(),s3.toUpperCase()]
}

function myFuncNumbers(n1:number, n2:number, n3:number) {     
    return [n1,n2,n3]
}

let f2 = function logger(f1: myFunc){
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}

f2(myFuncLow);
f2(myFuncUp);
//f2(myFuncNumbers);

