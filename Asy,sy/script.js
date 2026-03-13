// Synchronous Example
console.log("Start");

console.log("Middle");

console.log("End");

// Asynchronous Example
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000);

console.log("End");
// setTimeout runs after 2 seconds.
// JS doesn’t wait for it and executes the next line.