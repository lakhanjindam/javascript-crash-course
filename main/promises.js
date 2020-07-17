/**
 * async code waits for the required function to run first and then next lines of code will be executed.
 * setTimeut, addEventListener are async functions in JS
 */
//async function are promises in JS
//states of promises -> pending(initally),fulfilled and rejected
//fetch method is a promise in JS
//promises to keep track of status of async function
//it takes two callback functions resolve and reject
//resolve is called when it's async function is successfully executed otherwise reject.
const promise = new Promise((resolve,reject)=>{
    //if setTimeout function is not executed within 1000 sec then reject is called.
    setTimeout(
        ()=> resolve("Finished!"),
        1000)
})
console.log(promise) //returns -> Promise { <pending> }
promise
.then(
    //value fetched from resolve function
    (value)=>console.log(value)
    )
.catch(
    //else this block is executed
    ()=>console.log("Failed!")
    )
//reject function
const promise1 = new Promise((resolve,reject)=>{
    //if setTimeout function is executed within 1000 sec then reject is called.
    setTimeout(
        ()=> reject(Error("Promise Failed!")),
        1000)
})

promise1
.then(
    (value)=>console.log(value)
    )
.catch(
    //whenever reject is called it's executed in catch block
    //console.error to print standard error like template
    (err)=>console.error(err)
    )
.finally(
    //At the end it'll always execute.
    ()=>
    console.log("Done.")
)
