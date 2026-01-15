//Types of function 

//1. regular function 

function sample(a){
    console.log (a,"sample");
}
sample(5)

//2. array function
// it dosent need return statment and it follow asynchronous operation

// const sample =()=>console.log("sample")
// sample()
//-
const sample =(a,b)=>{
    a+b
}
console.log (sample (5,10))
//-
const sample =(a,b)=>{
    return a+b;
}

//3. callback function 
callback=demo 
function sample(){
    console.log(sample);
    callback();
}

function demo (){
    console.log("demo");

}
sample(demo);
