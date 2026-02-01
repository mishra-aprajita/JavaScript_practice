//Logical Operator
//Logical AND &&
// let a=6;
// let b=5;

// let cond1=a>b; //true
// let cond2=a===6; //true
// console.log ("cond1 && cond2=",cond1 && cond2);  //true

// let cond1 = a>b; //true
// let cond2 =a===5; //false 
// console.log ("cond1 &&=",cond1 && cond2); //false 


//logical OR
// let a=6;
// let b=5;
// console.log("cond1||cond2=",a<b||a===6);

//Logical NOT!
//If value True - false
//false -true 
// let a=6;
// let b=5;
// console.log ("!6<5=",!(a<b)); //false
// console.log ("!(6<5)",!(a===6)); //false

//Condition Statement 
// let age = 12;

// if (age>=18){
//    console.log("You can vote");
// }
// if (age<18){
//     console.log("you can'not vote");
// }

//If i want to change background color black and white?
// let mode="dark";
// let color;

// if (mode === "dark"){
//     color="black";
// }
// if (mode==="light"){
//     color="white";
// }
// console.log(color);


// if-else statement
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);


//odd or even 
// let num = 20;
// if(num%2===0){
//     console.log("sum of even")
// }else{
//     console.log("sum of odd")
// }

//else-if statement 
// let mode="blue";
// let color;
// if (mode === "dark"){
//     color="black";
// }else if (mode==="blue"){
//     color="blue";
// }
// else if (mode==="pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color);

//perator in JS
// let age = 5;
// let result = age > 18 ? "adult" : "not adult";
// console.log(result);


/*Q.no.1- Get user to input a number using propt ("Enter a number")check if 
the number's a multiple of 5 or not.*/
// let num=prompt("enter a number");
// if (num%5===0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is NOT a multiple of 5");
// }


/*Write a code which can give grades to studet according to their scores:
90-100,A ; 70-89,B; 60-69,C ; 50-59,D ; 0-49,E */
let score=prompt("enter your score(0-100):");
let grade;
if (score>=90 && score <= 100){
    grade="A";
}else if (score >= 70 && score <= 89){
    grade="B";
}else if (score>=60 && score <=69){
    grade="C";
}else if (score>=50 && score <= 59){
    grade="D"
}else if (score>= 0 && score <= 49){
    grade="F"
}
console.log("According to your score, your grade was:", grade);



