const radius = [20,3,5,7];

/*
const calculateArea = (radius) => {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));


const calculateCircumference = (radius) => {
    let output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));
*/

//We'll use higher order concept to calculate the area and circumference

// in interview you should write the code in this way 
//  DRY concept in software : Do not repeat yourself


//logic for calculating area
const area = (radius) => {
     return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}

const diameter = (radius) => {
    return  2 * radius; 
}
//we'll make one function to calculate
const calculate = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius. length; i++ ){
        output.push(logic(radius[i]));
    }
    return output;
}
// calling the function
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

//using maps
console.log(radius.map(area));

/* 
First class Functions : 
A function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a varible.
*/

/*
Higher order function :
A function that takes one or more function as arguments, or returns a function as its result.
*/



Array.prototype.calculateAns = (logic) => {
    const output = [];
    for (let i = 0; i < this.length; i++ ){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculateAns(area));