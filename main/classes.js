"use strict";
//declare class
//every class in JS is just a function
class Student{
    constructor(id,name,college,subjects=[]){
        this.name = name
        this.id = id
        this.college = college
        this.subjects = subjects
    }
    addSubject(subject){
        this.subjects = [...this.subjects,subject]
 }
}
// console.log(typeof(Student)) //returns output function
const student = new Student(1,"lakhan","XIE")
console.log(student.id,student.name,student.college)

//features of class
// Inheritance
class Freshers extends Student{
    constructor(id,name,college,prevCollege,subjects){
        //inheriting properties of parent class using super and which values we wanna inherit   
        super(id,name,college,subjects=[])
        this.prevCollege = prevCollege
    }
}
//prototype inheritance can also bea added to classes, but no need of it.
Freshers.prototype.showName = function(){
    console.log(this.name)
}
const f = new Freshers(1,"lakhan","XIE","K J somaiya")
f.addSubject("OS") //inheriting from parent class
console.log(f.subjects)
f.showName()