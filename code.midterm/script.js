Q23. 
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

//Q24.
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
.then(() => {
  console.log("C");
})
.then(() => {
  console.log("D");
});

console.log("E");

// Q25. 

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

Q26.
setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Q27.
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  Promise.resolve().then(() => {
    console.log("4");
  });
});

console.log("5");

Q28.
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");