"use strict"
//reducer picks an attribute of object and reduce it based on the condition
const students = [
    {name:"lakhan",age:21,dept:"IT",marks:60},
    {name:"aadi",age:22,dept:"IT",marks:80},
    {name:"grandel",age:21,dept:"IT",marks:70},
    {name:"praveen",age:22,dept:"COMP",marks:70},
]
//first pram accumulate collects and tracks the value, student map each value of students object
//0 is 3rd param and used to set initial value
const result = students.reduce((accumulate,student)=>{
    // console.log(`
    // accumlate_value :${accumulate},
    // student_val : ${student.marks}
    // `)
    //you can extract all the values of an attribute for students i.e marks and add it to array
    return [...accumulate,student.marks+student.age]
},[])
console.log(result)a