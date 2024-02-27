/**
 * What is async?
 * What is await?
 * how async awit works behind the scenes?
 * Examples of using async/await?
 * Error handling
 * Interviews
 * Async await v/s Promise.then/.catch
 */

// const promise = new Promise ((resolve,reject) => {
//     resolve("Promise is resolved!!");
// })
// async function getData() {
//     return promise;
// }
// const dataPromise = getData();

// dataPromise.then((res) => console.log(res))

//Using async with await -> used to handle promises.
/*
const promise = new Promise ((resolve,reject) => {
    resolve("Promise is resolved!!");
})
//normal way to resolve promise
function getData() {
    promise.then((res) => console.log(res));
}

getData();

//using async - await
//we have to use async in front of function
async function handlePromise() {
    const dataa = await promise;//await always comes before a promise
    console.log(dataa);
}
handlePromise();
*/

//Async / await

const pro = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("Promise is resolved");
    },10000);
});

//async function
async function handlePromise () {
    //here the js engine will print this console log immediately.
    console.log("This will run immediately");
    //Js engine was waiting for the promise to resolved
    const val = await pro;
    console.log("Lauda Lasan");
    console.log(val);
}
handlePromise();