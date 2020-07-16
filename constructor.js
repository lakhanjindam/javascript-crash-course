"use strict";
//manually creating an object
const student = {
    id:1,
    name:'lakhan',
    city:'Mumbai',
    college:'XIE'
}

//using function to create an object, start with capital letter for function name
// In JS functions can act as classes as well, also have function constructor
function Student(id,name,college,subjects=[]){
this.id = id
this.name = name
this.college = college
this.subjects = subjects
}
//returns the type of the object
console.log(new Student(1,"lakhan","XIE"))

//prototype functions for above class Student
//prototype functions were used in JS when there were no concept of classes in JS
//each object has a property called prototyping and it's called prototypical inheritance
//Now each student object has access to this prototype function
Student.prototype.addSubject = function(subject){
    //adding prev and current value in subjects array
    this.subjects = [...this.subjects,subject]
}
const student1 = new Student(2,"lucky","XIE")
student1.addSubject("DSA")
console.log(student1)