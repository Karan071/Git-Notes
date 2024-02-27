// function_1();
// sampleFunction();

function function_1(){
    console.log(`This is function statement`);
}

var sampleFunction = function (){
    console.log(`This is function expression`);
}

function sayHello() {
    return () => {
        console.log(`Hello madarchod`);
    }
}
console.log(sayHello());
