/**
 * Primitive Data types:
 * They are also called as pass by value
 * Number
 * String
 * Boolean
 * null
 * undefined
 * symbol
 */
const num = 18
const name = "lakhan"
const bool = true

//pass by reference
//non-primitive types are objects -> arrays, maps, hash, sets
//when an object is created each has a unique reference in the memory

const obj1 = {}
const obj2 = obj1 //ref to the above object is in obj2
obj2.a = "lakhan"

//both gives the same output, instead of creating a copy of obj1 it gives it ref to it in obj2
console.log("obj1: ",obj1)
console.log("obj2: ",obj2)

