const user = {
    name:"",
    age:"",
    dept:"",
    gender:""
}

const newUser = {
    name:"lakhan",
    age:"21",
    dept:"IT"
}

//Object assign method used to merge objects but however it changes the original object
console.log(Object.assign({}, user, newUser,{passed:true}))
console.log(user)

//spread method
const finalUser = {...user,...newUser,passed:true}
console.log(finalUser)
console.log(user) //user and newUser object is not tampered at all

let arr = [12,3,4,5,2]
let arr2 = [...arr,89]
//Also maintains the order of the previous object
console.log(arr2)