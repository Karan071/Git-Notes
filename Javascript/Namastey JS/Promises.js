/*
---------Promise----
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

 - pending: initial state, neither fulfilled nor rejected.
 - fulfilled: meaning that the operation was completed successfully.
 - rejected: meaning that the operation failed.
*/
const promise = new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });
console.log(promise);

/*
  Chained Promises :
The methods Promise.prototype.then(), Promise.prototype.catch(), and Promise.prototype.finally() are used to associate further action with a promise that becomes settled. As these methods return promises, they can be chained.
*/ 
/*
The .then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining
*/