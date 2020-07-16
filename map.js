"use strict";
//similar to python map, instead of lambda function in JS it is callbcak function which can be used in map.
const students = [
    {name:"lakhan",age:21,dept:"IT",marks:60},
    {name:"aadi",age:22,dept:"IT",marks:80},
    {name:"grandel",age:21,dept:"IT",marks:70},
    {name:"praveen",age:22,dept:"COMP",marks:70},
]

//creates a new array which consists of name and also keep tracks of index 
const names = students.map((student,index)=>{
    //can be use to set the value for each student
    //student.age = 20
    student.marks >60 ?  student.status = "better" : student.status = "good"
    //another way to merge using spread operator but it doesn't tamper the exisiting array object like above
    //It returns new array object
    return student.marks > 60 ? {ID:index,...student,status:"better"} : {ID:index,...student,status:"good"}
    
})
console.log(students)
console.log(names)

//using map with foreach
//similar to map but doesn't return new array object
const names1 = students.map((student,index)=>{
    //can be use to set the value for each student
    //student.age = 20
    student.marks >60 ?  student.status = "better" : student.status = "good"
    //another way to merge using spread operator but it doesn't tamper the exisiting array object like above
    //It returns new array object
    return student.marks > 60 ? {ID:index,...student,status:"better"} : {ID:index,...student,status:"good"}
    
}).forEach(student=>{
    console.log(student.ID)
})