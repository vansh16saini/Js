// singleton - when object is made of constructor that type of object is known as singleton
// Object.create this is the constructor method

//object literals
const Jsuser = {
    name: "John", // key is taken as a string by default
    age: 32,      // while value can be of any type
    location: "New jersey",// maybe string , number 
    isloggedin: false,     // boolean
    last_login: ['monday' ,'esday']// array
//  key : value
}

// Objects can be accessed in two ways
// console.log(Jsuser.location);    // this is dot notation
// console.log(Jsuser["location"]); // this is called bracket notation

// in bracket notation we had to use "" because it is taken as string by default
// for symbols we use [key]: "value"

Jsuser.location = "New York"
//Object.freeze(Jsuser)
Jsuser.location = "New delhi"
// console.log(Jsuser["location"]);

Jsuser.greeting = function(){
    console.log("Hello User");
}
Jsuser.greeting2 = function(){
    console.log(`Hello User ,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());