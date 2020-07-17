// In javascript there are three types of variables
// let, const and var
//As you can see declaring with var you can re-declare it.
var name = "lakhan"
var name = "Jindam"
console.log(name)

//With let re-declaration is not possible but re-initialization is possible
let age = 18
// let age = 20 //-> throw you a SyntaxError: Identifier 'age' has already been declared
age = 20 // re-initialization is possible
console.log(age)

//with const you cannot change the value assigned to it
const field = "IT";
// field = "IT" //cannot initialize after declaration
// field = "CS" //  TypeError: Assignment to constant variable.
console.log(field)