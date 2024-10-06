// Javascript is a dynamically typed language
let age = 19;
const score = 10.34; // decimal number also are under numbers there is no float or int seperatly

// Primitive datatype

/*7 types : String Number Boolean Null Undefined Symbol Bigint */

const id = Symbol('123')
const anotherid = Symbol('123')
// here it looks like they are some but they have different values

// Non primitive/ Reference
const heros = ["shaktiman", "naagraj", "doga"]

let myobj =
{
    name: 'vansh',
    age: 19
}

const myfuction = function()
{
    console.log("hello world");
}
// Arrays - function, Objects- function, functions- object function

console.log(typeof(myfuction));

// Stack(primitive), Heap (Non-primitive)
let my_id = "Sainixvansh"
let another_id = my_id
// here it is pointing to a copy of the memory
another_id = "Bgmi id"
let user0n3 ={
    name: "vansh",
    email: "rangom@gmail"
}
// here both are pointing to the same location in the memory
usertwo = user0n3
usertwo.email ="ran@gamil"
console.log(usertwo.email)
console.log(user0n3.email)
//here the value is chnaged for both
