// console.log("V");
// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");

function saymyName(){
    console.log("V");
console.log("A");
console.log("N");
console.log("S");
console.log("H");
}
//with () it is a call and whithout () is a reference
//saymyName()

// function addToNumbers(number1, number2)// number1 and number2 are parametes
// {
//     console.log(number1 + number2);
// }
// 3, a, null are arguments

function addToNumbers(number1, number2)// number1 and number2 are parametes
{
    // let result = number1 + number2;
    // return result

    return number1 +number2
}
addToNumbers(3,"a") // it will give 3a
addToNumbers(3,null) // it will give 3
//because we have not 

const result = addToNumbers(2,3)
console.log(result);


function loginUsermessage(username){
    if(username === undefined)
        console.log("Please enter your username")
        return 
    return `${username} just logged in`
}
console.log(loginUsermessage())
// if empty then undefined just loggged in
// if "" then just logged in
// if "anything"