//Block and block scope
// {
    // block : everything inside this block is the scope
// }
// Hoisiting
/*
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(a);
// console.log(b);
// console.log(c);
*/
//Shadowing : In JavaScript, variable shadowing is a concept that occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope. This can lead to unexpected behavior and can sometimes make code harder to understand.
/*
var shad = 30; // in global scope 
{
    var shad = 100;// this variable over shadows the global variable shad
    console.log(shad);
}
console.log(shad);// and here 100 will be printed;
*/
//Shadowing happens in both var,let and const
//It also happens in function blocks
const shad_C = 16500;
function fun1() {
    const shad_C = 30;
    console.log(window.shad_C);
    window.shad_C = 20;
}
fun1();
console.log(shad_C);
// illegal shadow
let a = 10;
function fun2 () {
    
}