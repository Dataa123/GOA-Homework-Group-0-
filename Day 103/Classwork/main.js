// import { sum } from "./script2.js";
// import { myFunc1 } from "./script1.js";

// myFunc1()

// let listn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(`This is sum of your numbers: ${sum(listn)}`)

const _ = require("lodash");

console.log(_.shuffle([1, 2, 3])) // shuffles

console.log(_.difference([1, 2, 3, 4], [2, 3, 4])) // outputs different number from two arrays

console.log(_.drop([1, 2, 3, 4], 2)) // drops first X elements. (X is second argument)

console.log(_.take([1, 2, 3, 4], 2)) // takes first X elements. (X is second argument)

