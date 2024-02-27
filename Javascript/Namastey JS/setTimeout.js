// setTimeout() is a global Function
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
//syntax : setTimeout(function(),delay) : in millisecs eg. 1000,2000;

// function timeOut() {
//     let i = 1;
//     setTimeout(function() {
//         console.log(i);
//     });

//     console.log('Fuck JS');
// }
// timeOut();

//setTimeout functions with arrow functions
function printTime(){
    setTimeout(()=> {
    console.log("fuckin legend");
    }, 8000);
}
printTime();

// function printAfterDelayUsingVar() {
//     for(var i = 0; i <= 5 ; i++){
//         setTimeout(()=> {
//             console.log(i);
//         },i * 1000);
//     }
// }
// printAfterDelayUsingVar();
//the above code will not work expectedly


//let is blocked scoped; thats why it makes a new value of i
function printAfterDelayUsingLet() {
    for(let i = 1; i <= 5 ; i++){
        setTimeout(()=> {
            console.log(i);
        },i * 1000);
    }
}
printAfterDelayUsingLet();

 