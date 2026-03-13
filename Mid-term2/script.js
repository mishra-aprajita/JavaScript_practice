// console.log("A");
// setTimeout(()=>{
//   console.log("B");
// },2000);
// console.log("c");


// document.getElementById("demo").innerHTML = "Hi";
// document.getElementById("hello").innerHTML="UO";
// 1. innerHTML
//<p id="demo"><b>Hello</b> World</p>
//document.getElementById("demo").innerHTML
// 2. innerText
//<p id="demo"><b>Hello</b> World</p>
//document.getElementById("demo").innerText
// 3. textContent
//document.getElementById("demo").textContent 
function A(){
 console.log("A");
}

function B(){
 A();
}

B();