const p = new Promise((resolve, reject)=>{
    let done = true ;
    setTimeout (()=>{
    if (done){
        resolve (" task has been fulflled ");
    } else {
        reject (" task has not been fulfilled");
    }
},5000);
});
console.log(p);
p.then((msg)=>
{ console.log(msg);
}).catch((err)=>
{
    console.log(err);
}).finally(() => {
    console.log("finally block ");
});