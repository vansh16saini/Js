//console.log(2>=1);
//console.log(2>1);
//console.log(2<1);
//console.log(2<=1);

console.log("2" > 1);
console.log("02" > 1);

// true it will convert "2"/"02" to samedata tyoe as 1 i.e int

console.log(null > 0);
//false
console.log(null >= 0);
true
console.log(null == 0);
false      
// Reason for this is equality check == and comparisons work differently 
// comparisons convert null to a number, treating it as 0 
// that's why null>= 0 is true while == is false
console.log("2"===2);
// false === will even check the datatype as well