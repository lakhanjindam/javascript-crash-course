/**
 * It's a function within a function and preserves the value inside the function for other functions
 * Closures are property of function in JS
 */
//normal scenario
function incNumber1(){
    let number = 0
    number+=1
    return number
}
//no matter how many times you call the func value of number will be always increement to 1
console.log(incNumber1())
console.log(incNumber1())
console.log(incNumber1())

//solving the issue using closures
function incNumber(){
    let number = 0
    return function addNumber(){
        number+=1
        return number
    }
}
//first step extract the inner function
const add = incNumber()
//addNumber func has access to number cuz of function scope and thus the state of number is preserved
console.log(add())
console.log(add())
console.log(add())