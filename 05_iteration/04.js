// forin is for objects but can do arrays as well  
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) {     
//     console.log(`${key} for shortcut is for ${myObject[key]}`)
// } 

const programming = ["js","rb","py","java"]
for (const key in programming) {
    console.log(programming[key])
}    
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York')

for (const key in map) {
    console.log(key)
}