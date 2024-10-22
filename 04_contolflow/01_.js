// If

// if(condition){
//     // code to be executed if the condition is true
// }
if(false){
    // code from line 7 till the end of scope will not be executed

    // in this case till line 9
};

//comparison operators
// <, >, <=, >=, ==, !=, === it even checks the datatype as well, !== this even checks -ve value
// here single = checks operator assignment
// const temperature = 41
// if (temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }
// const score = 100
// if (score > 100){
//     const power = 'fly'
//     console.log(`power greater than ${power}`);
// } 

const balance = 10000
if (balance > 100) console.log("less than 100"); // this is implict code
    // implicit scope is immature 
else if (balance > 50)
    console.log("less than 50");
    
else 
    console.log(" Nothing");
    
// don't write implict code
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2==3){
    console.log("you are logged in and have debit card");
}
let loggedInFromGoogle = true
let loggedInFromMail = false
if(loggedInFromGoogle || loggedInFromMail)
    console.log("you are logged in");
// if you want to check if both are true then use && operator
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } 
switch (month) {
    case jan:
        console.log("January")
        break;

    default:
        console.log("Enter a month");
        break;
}

 