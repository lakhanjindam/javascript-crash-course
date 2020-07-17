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


