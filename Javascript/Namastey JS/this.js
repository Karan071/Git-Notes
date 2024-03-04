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
const obj = {
    a: 10,
    x: function () {
        console.log(`x is function inside an object : and its called Method`);
    }
}
//note-> if a function is called inside a object it is called method; 

//call apply bind methods(sharing methods)


//this inside arrow functions


//this inside arrow functions


//this inside nested arrow functions


//this inside DOM