// Arrays
const myArr = [0,1,2,3,4,5] // there can be anything such as boolean or string
const myHeros = ["dinothunder","mysticforce"]
// arrays in js are resizeable

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[3]);
myArr.push(6)
myArr.pop()
console.log(myArr);

myArr.unshift(0) // it inserts at the front [0,0,1,2,3,4,5] 
myArr.shift() // it removes from the front [1,2,3,4,5,0]

//for boolean comparison we use
console.log(myArr.includes(3))
myArr.indexOf(4)

// join converts array to string
//such as
console.log(myArr.join(" "))



// slice and splice
console.log("A ", myArr)
const mys1 = myArr.slice(1,3)

console.log(mys1);
//splice is used to insert or delete elements from the array

console.log("B ", myArr)

const mys2 = myArr.splice(1,3)
console.log(mys2);
console.log("C ", myArr)
console.log(myArr)