// Dates 

/*let myDate = new Date()
console.log(myDate.toString())
//Thu Oct 10 2024 16:34:36 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())
//2024-10-10T11:01:58.896Z
console.log(myDate.toDateString())
//Thu Oct 10 2024
console.log(myDate.toJSON())
//2024-10-10T11:02:34.691Z

console.log(typeof(myDate))
*/
//let mycreatedate = new Date(2024, 1, 24)
//Sat Feb 24 2024
//let mycreatedate = new Date(2024, 1, 24,5,3,23)
//24/2/2024, 5:03:23 am
let mycreatedate = new Date("2024-02-28")
//Wed Feb 28 2024
//console.log(mycreatedate.toDateString())

let mytimestamp = Date.now()
//console.log(mytimestamp) 
//console.log(mycreatedate.getTime())
console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate.getMinutes)
//`${newDate.getDate()}` and the time`{newDate.get}`

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric', month: 'long',
})