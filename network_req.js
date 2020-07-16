"use strict";
//node fetch cuz node js understands commmonJS so simply writing fetch will give error
const fetch = require('node-fetch')

//URL to fetch -> 'https://jsonplaceholder.typicode.com/todos/1'
//GET method
fetch('http://jsonplaceholder.typicode.com/posts/1')
.then(
    //retrieves the response and converts to json object
    res=>{
        // console.log(res)//unformatted irrelevant data
        return res.json()
    }
    )
.then(
    jsonData=>console.log(jsonData)
    )
.finally(()=>console.log("done."))

//POST method
console.log('----------POST REQ------------')
const blog = {
    userId: 1,
    id: 1,
    title: 'My name is Lakhan Jindam',
    body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}

const res = async()=> fetch('http://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body: JSON.stringify(blog),
    headers :{
        "Content-Type":"application/json"
    }
})
.then(res=>res.json())
.then(jsonData=>console.log(jsonData))