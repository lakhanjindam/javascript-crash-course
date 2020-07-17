"use strict";
// use strict will overcome below issue, it'll make a must for every variable to declare with some type.
// If you declare variable without a type it'll be treated as a globla variable and will not throw error.
// Without using strict how javascript engine works is as:
// var a -> first looks for the variable then
// console.log(a) -> console.log if present
// var a = 25 -> then assignment to variable
console.log(a) //undefined output
var a = 25

// let array = ["lakhan", "jindam", "raghu"]
// console.log(array.includes("lakhan"))
// let new_arr = array.map(
//     (elem)=>{elem+"aj"}
// )
// console.log(new_arr)
// console.log("Using for each method")
// array.forEach(val => {
//         console.log(val);
//     })
//     //var can be reinitialized with values
// a = "lakhanJindam";
// console.log(a)

// let b = "goku";
// //let b = "vegeta"; -> let cannot be reinitialized 
// b = "vegeta"; //-> let can be reassigned
// console.log(b)

// const c = "React";
// // const c = "javascript"; -> const cannot be reinitialized
// //c = "javascript"; -> cant be reassigned
// console.log(c);

// function madd(...arguments) {
//     //after using ...followed by variable it can be used as a array
//     let sum = 0;
//     //arguments is not an array so array methods cannot be used
//     //for (let i in arguments.length) -> cannot be used
//     //arguments.forEach(arg => { sum+=arg }) -> cannot be used

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// res = madd(2, 3, 1, 3, 4);
// console.log(res);