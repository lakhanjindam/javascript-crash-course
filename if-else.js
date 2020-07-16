"use strict";
let a = "lakhan" 
let b = "jindam"
if(a===b){
    console.log("Equal!")
}else{
    console.log("Not Same.")
}

//ternary if-else, less code and more readable
const result = a===b ? ("Equal!") : ("Not Same.")
console.log(result)

//nested ternary
const age = 20
const val = age<10 ? "Kid" : age<18 ? "Adolescent." : age>20 ? "Adult" : "Mature."
console.log(val)

//short-circuiting, even shorter if-else woks for boolean
const name = "lakhan"
const bool = name || "guest" //what it does is check whether name is empty or not, if empty then put guest in bool
console.log(bool)

//using && operator only returns last true value if false then nothing
//mostly used for boolean type
console.log(name && "") // -> prints nothing
console.log(true && false) // -> prints false

