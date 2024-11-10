const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.map((num)=> num + 10)
const newnums = myNums
            .map((num)=>num*10)
            .map((ums)=> ums +1)
console.log(newnums)
 // this is chaining we will use it a lot