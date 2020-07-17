"use strict"
// imperative - machine level code more readable by computer and declarative - easy to read and understand 

//imperative
console.log('--------------Imperatively-----------------')

const names = ["lucky","aadi","gran","shasha","vaste"]
for (let i=0;i<names.length;i++){
    console.log(names[i])
}
console.log('---------------declaratively----------------')
//declarative
//easy to understand and memorize and can be understand by others
names.forEach(name=>console.log(name))