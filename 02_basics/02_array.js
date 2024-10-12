const marvel_heros = ["thor","spiderman","ironman"]
const dc_heroes = ["flash", "superman"]
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros[3][1])
// concatnate gives a new array while push do changes in existing array
// console.log(marvel_heros.concat(dc_heroes))

// const all_new_heros = [...marvel_heros, ...dc_heroes]
// // this is spread operator it will spread like the glass spreads when you drop a glass
// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],[7],[8,9,[10,11,12]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Vansh"))
console.log(Array.from("Vansh"))
console.log(Array.from({name: "Hitesh"}))//case for interview
//here we need to specify like we need an array of keys or anything


let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2))

// isArray, from, of are a few important ones 