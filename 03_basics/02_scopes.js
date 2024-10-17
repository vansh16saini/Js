
// {}  curly braces are scope of that program
// anything outside {} is global scope
// anything inside {} is block scope
let a = 30
if (true){
    let a = 2
const b = 20
var c = 30
// console.log("Inner:",a);

}
// console.log(a);
// console.log(b);
// console.log(c);

// NESTED SCOPE

// function one(){
//     const usesrname = "Vansh"

//     function two(){
//         const website = 'youtube'
//         console.log(usesrname);
//     }
//     // console.log(website);  we had an error here as website's scope was in function named 2 only
//     two()
// }

// one()

// if-else is also a type of scope
// if(true){
//     const usesrname = "Vansh"
//     if(usesrname=== "Vansh"){
//         const website = "youtube"
//         console.log(usesrname + website); 
//     }
//     // console.log(website);  here error is that website is not in scope
// }
// Well for a reference we can say a junior can ask for help from senior but not vise-versa
// console.log(usesrname);


// ***********************Interesting*************************
addone(5)
function addone(num){
    return num + 1;
}


// well both of them are functions but the function below is also a variable
// and variables are very powerful and we can hold anything in them
addtwo(5)
// we have an error as we shifted addtwo()  to above
const addtwo = function(num){
    return num + 2;
}
// this is called hosting and we will learn them about later on