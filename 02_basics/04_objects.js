// const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "2312w"
tinderuser.name = "John"
tinderuser.age = 25
tinderuser.location = "New York"

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first: "John",
            last: "Doe"
        }
    }
}
//console.log(regularuser.fullname?.userfullname.first);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}
//Spread  operator
// const obj3 ={...obj1,...obj2}
// const obj3 = Object.assign({},obj1,obj2)
// here {} an empty object act as an target and other as source 
// console.log(obj3);
const user =[
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id: 1,
        email: "@gmail.com"
    }
]
user [1].email

// console.log(tinderuser)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))//make arrays [key, value] format

// console.log(tinderuser.hasOwnProperty('isloggedIN'));


const course = {
    name: "javascript",
    cost: "999",
    duration: "3 months"
}

// object destucture
// course.duration  here we use {} to destructure the following object 
// it is use to prevent the use of say course.cost and so again and again

const {duration:due} = course
console.log(due);

//JSON - an object without a name is json we use it in back end for API call
// {
//     name: "javascript",
//     cost: "999",
//     duration: "3 months",
// }

// can also be in form of a array of objects
// [{},{},...]