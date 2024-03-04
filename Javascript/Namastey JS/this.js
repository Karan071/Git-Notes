"use strict"

//this in global space
console.log(this); // global object - window, global

//this inside a function
function func(x){
    console.log(this); // in strict mode this will show undefined -> otherwise it'll 
}
func();
//this in strict mode (this substitution)

//if the value of this keyword is undefined or null this keyword will replace it with globalObject -> only in non strict mode

//in strict mode it will throw undefined



//this value depends on 'how function is called' (window)
func(); // here it will show undefined
window.func(); //here it'll give windowObject 


//this inside a object's method
const student = {
    name : `Karan Chourasia`,
    printName : function () {
        console.log(this.name); // will refer the value of a in the obj; 
        //console.log(this); // will refer as the obj object
    }
}
//note-> if a function is called inside a object it is called method; 
student.printName(); // object

const Student2 = {
    name : `Nandinee`
};

//call,apply,bind methods(sharing methods)
student.printName.call(Student2);

//this inside arrow functions


//this inside arrow functions


//this inside nested arrow functions


//this inside DOM