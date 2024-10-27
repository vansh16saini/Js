// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);   
}
const greeting = "hello world"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);   
}


// Maps

// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York')
// console.log(map);
// console.log(map.get('name')); // John
// for (const [key,value] of map) {
//     console.log(key, ':-',value)
// }
// we can iterate only maps using forof

const myObject = {
    'game1': 'NFS',
    'game2': 'Spidy'
}
for (const [key,value] of myObject) {
    console.log(key, ':-',value)
}
