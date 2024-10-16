
// {}  curly braces are scope of that program
// anything outside {} is global scope
// anything inside {} is block scope
let a = 30
if (true){
    let a = 2
const b = 20
var c = 30
console.log("Inner:",a);

}
console.log(a);
// console.log(b);
// console.log(c);