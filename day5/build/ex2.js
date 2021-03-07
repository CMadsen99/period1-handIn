"use strict";
function myFuncLow(s1, s2, s3) {
    return [s1, s2, s3];
}
function myFuncUp(s1, s2, s3) {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
}
function myFuncNumbers(n1, n2, n3) {
    return [n1, n2, n3];
}
let f2 = function logger(f1) {
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
f2(myFuncLow);
f2(myFuncUp);
//f2(myFuncNumbers);
//# sourceMappingURL=ex2.js.map