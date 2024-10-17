// Immediately Invoked function Expressions(IIFE)
// -> it is fuction that works imediately this is not to be told to the interviewer

(function coffee(){
    console.log('DB Connected');   
})();
// this works magically
// to prevent the pollution in the global scope we use iffe

(()=>{
    console.log('DB Connected');
})();

// there is an error cause we haven't ended the first IFFE

// We end it using ';'

((name)=>{
    console.log(` ${name} DB Connected`);
})('vansh')