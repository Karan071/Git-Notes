/*A closure is the combination of a function and the lexical environment within which that function was declared.*/

function x() {
    let a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();
//follow lexicial order
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  
console.log('Example 2 : ');

function makeFun() {
    const name = 'Scooby';
    function displayName() {
        console.log(name);
    }
    return displayName; //function is returned
}
const myFunc = makeFun();
myFunc();
// the displayName() inner function is returned from the outer function before being executed.

/*//Uses of Closure : 
    - Module Design Pattern
    - Currying 
    - function like 'once'
    - memoize
    - maintaining state in async world
    - setTimeouts
    - Iterators

*/