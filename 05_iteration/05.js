// for each
const coding = ['js','ruby','cpp','html','css','rr']

// for each is a higher order

// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach( () => {
//     console.log()
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// }

const mycoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },{
        languageName: "java",
        languageFileName: "java"
    },{
        languageName: "C++",
        languageFileName: "cpp"
    },
]
// const values = mycoding.forEach((item)=>{
//     return item
//  })
//  console.log(values) // undefined

//filter have a call back function that will return values that will satisfy the condition
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.filter((num)=> num > 5)
// console.log(newnums) // [6,7,8,9,10]
// // main mistake when we use a scope we need to use the keyword return 
// const newnum = myNums.filter((num)=> {num > 5})
// // console.log(newnum) // undefined
// // but if we use return it will return the values
// const newnum2 = myNums.filter((num)=> { return num > 5})
// console.log(newnum2) // [6,7,8,9,10]

//----------------if start a scope then return
// const newnum = []
// myNums.forEach((num)=>{
//     if(num > 5){
//         newnum.push(num)
//     } 
// }) 
// console.log(newnum) // [6,7,8,9,10]

