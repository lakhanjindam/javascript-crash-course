"use strict";
// use strict will overcome below issue, it'll make a must for every variable to declare with some type.
// If you declare variable without a type it'll be treated as a globla variable and will not throw error.
// Without using strict how javascript engine works is as:
// var a -> first looks for the variable then
// console.log(a) -> console.log if present
// var a = 25 -> then assignment to variable
console.log(a) //undefined output
var a = 25
let a = "lakhan"
const a
a = 20

