"use strict"; //prevents error
function add(a, b) {
    //when a variable is declared inside a function it is called function scope.
    //only accessible in the function
    var sum;
    return sum = a + b;

}
//console.log(sum) -> ReferenceError: sum is not defined
let result = add(12, 13);
console.log(result) // -> returns sum

var a = 89 // -> global a
if (1 == 1) {
    //variables declared inside for, while, if loop are block scoped
    var b = 23; //but var can be accessible out of block, that's an issue
    let a; //let is solution, it wont allow variable to be accessed outside the block.
    a = 12; // scoped a 
    console.log(a)
}
//var are not scoped they live globally
console.log(b); //-> No error returns value of b
//where as let and const are block scoped
console.log(a); //-> returns ReferenceError if var a was not declared