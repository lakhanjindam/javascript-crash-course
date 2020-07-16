"use strict";
//array functionalities

const arr = [1,2,3]

//array destructuring
let [a,b] = arr
//swap the value between a and b
// [b,a] = [a,b]

//rest operator 
//first value of arr is in first and rest in rest.
const [first,...rest] = arr
console.log(first,rest)
// console.log({a},{b})