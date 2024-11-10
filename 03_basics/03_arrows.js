const user = {
    name: 'John Doe',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name} Welcome to website`); 
        console.log(this);
         
    }
}
// we use "this" when we have to want to refer to the current context
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
// this happened due to not hard coding the context 

// console.log(this);
// it shows {}  due to nothing in the global context

// window is the most global object on a webpage

// function noname(){
    // let username = "Vansh"
    // console.log(this.username);
// }

// noname()

// const random = function(){
//     let username = "Vansh"
//     console.log(this.username);
// }

// when we remove  function keyword and use an arrow instead(=>) this thing is arrow function
// const random = () => {
//     let username = "Vansh"
//     console.log(this);
// }
// random()

// let's do arrow function now
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) =>  num1 + num2  //this is implicit return 

// add we can also use it like
// const addtwo = (num1,num2) => (num1 + num2) 
// we will use it a lot in react
// console.log(addtwo(33,5));

// let's try returning a object
const arrow_object = () => ({username: "Vansh"}) 
console.log(arrow_object());



const myarray = [2,4,5,6,2,7,8]
