"use strict"
const fetch = require('node-fetch')
//async-await to handle how much time a function takes to complete the process then only next piece of code is executed.
//await can't work without async.
const res = async()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve("Success.")
        ,1000)
    })
    //waits till the promise is executed, basically pauses on this line.
    //eliminates the need of callback function, then keyword
    const result = await promise
    console.log(result)
    console.log("Done.")

}
res()

//example making a call to API
const results = async()=>{
    //await -> first it will wait for the fetch reequest to complete then it go to next line
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .then(()=>console.log("Finished."))
}
results()
