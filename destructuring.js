"use strict";

const user = {
    name:"lakhan",
    age:21,
    dept:"IT",
    address:{
        city:"Mumbai",
        town:"Sakinaka"
    }
}
//destructuring above object of user using curly braces and
//Note: order doesn't matter while destructuring
const {age,name,dept} = user
console.log(`User's name is ${name}, department is ${dept} and age is ${age}`)

// now destructure the nested objects
//normal way
// const {city} = user.address
//cool way
const {address:{city,town}} = user
console.log(`${name}'s city is ${city}`)

//destructuring as a function parameter
const displayData = ({name,age,dept,address:{town,city}})=>{
     console.log(`Name: ${name}, age:${age}, dept: ${dept}, town: ${town}, city: ${city}`)
}
displayData(user)