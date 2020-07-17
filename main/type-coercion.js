/**
 * Implict conversion
 * Explicit conversion
 */
//explicit conversion
let number = 21
console.log(String(number))

//implicit conversion
let mul = "1"*"6"
let str = "1"+1 //string dominates when + used otherwise number
let str1 = "1"*8 
console.log(mul)
console.log(`using + operator -> ${str}`)
console.log(`using * operator -> ${str1}`)

/**
 * when dealing with boolean in if-else loop
 *It is categorized into:
 truthy -> non-empty string, number greater than 0 and less than 0
 falsy -> empty string and number equal to 0, NaN(Not a number), undefined, null
 */
let val = "anything"
if(val){
    console.log("Worked.")
}else{
    console.log("Failed.")
}

/**
 * Strict comparison operator triple equal '==='
 */
let one = 1
let strOne = "1"
//compares also data types along with value
if(one===strOne){
    console.log("Equal!")
}else{
    console.log("Not Same.")
}


one===strOne ? console.log("Equal!") : console.log("Not Same.")