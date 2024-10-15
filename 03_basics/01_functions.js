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

function calculateCartPrice(val1,val2,...number1){ //rest and spread have same syntax
    return number1
}
// if we use val1,val2 then first values will be stored in them then rest in number1
console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Vansh",
    price:199
}

// function handleObject(anyobject){
//     console.log(`Username is ${anobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user)

// handleObject({
//     username: "Vansh",
//     price:199
// })

const myNewarray = [200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}
 console.log(returnSecondValue(myNewarray))