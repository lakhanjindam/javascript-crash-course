"use strict";
//similar to python filter method which filter out elem based on condition
const colleges = [
    {name:"XIE",location:"Mumbai",tier:3},
    {name:"DTU",location:"Delhi",tier:1},
    {name:"IIT-B",location:"Mumbai",tier:1},
    {name:"VJTI",location:"Mumbai",tier:2}
]
//find extracts all the occurences of the below condition satisfied
const result1 = colleges.filter(college=>{
    return college.name.includes("I") && college.tier<3
})
console.log(result1)
//Note: When using string literals objects can't be printed so use JSON.stringify
console.log(`Filter outputs -> ${JSON.stringify(result1)}`)

//find returns the first occurence of the condition satisfied, if not present returns null or undefined.
const result2 = colleges.find(college=>{
    return college.name.includes("I") && college.tier<3
})
console.log(`Find outputs -> ${JSON.stringify(result2)}`)