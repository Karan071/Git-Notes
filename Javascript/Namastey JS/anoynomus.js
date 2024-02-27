// function_1();
// sampleFunction();
//Normal Function 
function function_1(){
    console.log(`This is function statement`);
}

//Using variables and assigning the anoynomus function
var sampleFunction = function (){
    console.log(`This is function expression`);
}

function sayHello() {
    return () => {
        console.log(`Hello madarchod`);
    }
}
console.log(sayHello);
console.log(sampleFunction);
