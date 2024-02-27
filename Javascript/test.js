function test() {
    console.log("Hello ");
}
test();

const pro = new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("Hello MotherFather")
    })
},10000);
console.log(pro);