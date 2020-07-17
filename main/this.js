"use strict"

/**
 * this keyword reference to an object 
 * as a method of an object
 * Can be used in function or class constructor
 * in the global context
 * as DOM event handler
 */
//if the below code was executed in the browser then it will return window i.e current browser window
// console.log(this) //returns -> {}

//"this" in object is object-scoped and can only be used in the object.
const user = {
    first:"lakhan",
    last:"jindam",
    display(){
        console.log(`${this.first}, ${this.last}`)
    }
}
user.display()

function show(){
    this.name="lakhan"
    //In use strict mode it gives error, otherwise returns name
    console.log(`${this.name}`) //return cannot set property name undefined.
}
show()

//DOM event handler
const button = document.createElement('button')
button.textContent("CLick")
//this refers to the element button here
button.addEventListener('click',()=>console.log(this))

//classes
class Student{
    //here this is scoped inside a class and can only be used inside it.
    constructor(name,age){
        this.name = name
        this.age = age
    }
}
const s = new Student("lakhan",21)
console.log(s.name) //returns name of the object