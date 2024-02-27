/*
//Maps || Reduce || Filter in Javascipt
// all these functions are higher order functions

const radius = [12,34,56,6,9];

// Double - [24,68,112,12,18];
// triple
//binary

function Double(x) {
    return 2 * x;
}

function triple (x){
    return 3 * x;
}

function binary(x) {
    return x.toString(2);
}
const output = radius.map(Double);
console.log(output)

//triple
const outputTriple = radius.map((x)=> {
    return x *3;
})
console.log(outputTriple);

//Since we are using arrow funcs and the function express is of one statement we can remove return and block
const binaryArray = radius.map((x)=> x.toString(2));
console.log(binaryArray);


//Filter function - higher order func

const arr = [5,1,3,2,6];

const filterOutputOdd = arr.filter( (x)=> x%2!==0);
console.log(filterOutputOdd);
const filterOutputEven = arr.filter((x)=> x%2===0);
console.log(filterOutputEven);

const greaterThanThree = arr.filter((x) => x > 3);
console.log(greaterThanThree);

//Reduce - higher order function

//sum or max
const arrSum = [24,68,97,53];

function findSum (arr) {
    let sum = 0;
    for(let i = 0; i < arrSum.length; i++){
        sum += arrSum[i];
    }
    return sum;
}
console.log(findSum(arrSum));

//using reduce function
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//acc and curr 

//acc -> accumulate the result like sum variable in the above value
//curr -> 
const outputSumReduce = arrSum.reduce( (acc,curr) => {
    acc += curr; //acc is just like sum || curr is acting like arrSum[i]
    return acc;
}, 0);
//reducer function takes 2 parameters : Array.reduce((function){},initial value of acc)
console.log(outputSumReduce);

//max of value

*/
const numbers = [10,30,50,89];
function maximum(array) { 
    let max = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
console.log(maximum(numbers));

const maxVariable = numbers.reduce((acc,curr) => {
    if(curr > acc){
        acc = curr;
    }
    return acc;
},0);
console.log(maxVariable);


//examples
const fullNames = [
    {firstname : "Karan", lastname : "Chourasia", age: 25},
    {firstname: "Ayush", lastname: "Singh", age: 75},
    {firstname: "John", lastname: "Doe", age: 50},
    {firstname: "Ayushi", lastname: "Singh", age: 26},
];

const FullName = fullNames.map((x) => `${x.firstname} ${x.lastname}`);
console.log(FullName);

// { 25: 1, 23: 2, 50 : 1}

const outputAge = fullNames.reduce((acc,curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(outputAge);


// const ageLessThirty = fullNames.filter((x) => x.age > 30)
// console.log(ageLessThirty);

console.log(`----`);
const ageLessThirty2 = fullNames.filter((x) => x.age > 30)
.map((y) => y.firstname)
console.log(ageLessThirty2)

const users = [
    {firstname : "Karan", lastname : "Chourasia", age: 26},
    {firstname: "Ayush", lastname: "Singh", age: 75},
    {firstname: "John", lastname: "Doe", age: 50},
    {firstname: "Ayushi", lastname: "Singh", age: 26},
]
// const userOutput = users.reduce((acc,curr) => {
//     if(acc[curr.age] > 30){
//         return acc[curr.firstname];
//     }
// // },{}); 
// console.log(userOutput);



