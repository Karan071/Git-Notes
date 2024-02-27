
const greet = (count) => {
    for(let i = 0; i < count; i++){
        console.log(`count no ${i}`);
    }
}
// greet(6);

function greetings() {
    let count = 7;
    for(let i = 1 ; i <= count; i++){
        console.log(i);
    }
}
// greetings();

const square = (num) => (num*num);
const square2 = (num) =>{
    return num*num;
}
console.log(square(3));
console.log(square2(5));