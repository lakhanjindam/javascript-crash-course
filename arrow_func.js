"use strict";
/**
 * Arrow functions are concise and easy to read
 * All arrow func are anonymous function(cannot provide a function...name, only variable) but can be assigned to a variable
 */
const user = {
    name:"lakhan",
    age:20.
}
//if only one param is present the no need of parenthesis around the param
//Also if wanna directly return no need of curly braces and no need of return keyword
const nameUpper = (name)=> `${name.charAt(0).toUpperCase()}${name.slice(1)}`
console.log(nameUpper(user.name))

//callback functions also called as higher order functions
function greetUser(name,callback){
    return callback(nameUpper(name))
}
// no need of declaring func with variable, directly one can declare inside function
console.log(
    greetUser(
        user.name,(name)=> `Hello ${name}`
))

//default values in function, here decimalValue has 1(default value)    
const  convertTemp = (value,decimalValue=1)=>{
    const fahrenheit = value*1.8+32
    return Number(fahrenheit.toFixed(decimalValue))
}
console.log(convertTemp(20))
