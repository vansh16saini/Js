 const name = "Vansh"
 const repocount = 6

 //string interpolation
 // easy to manipulate
 console.log(`hello my name is ${name} and my repo count ${repocount}`);

 const Gamename = "Let's Go"

 console.log(Gamename[0]);
 // the original value isn't changed
 console.log(Gamename.toUpperCase());
 console.log(Gamename.charAt(3));
 const newstring = Gamename.substring(0,4)
 // can't have reverse values and will choose substring till 4 i.e 0 1 2 3 in this case "Let'"
 const anothersti = Gamename.slice(-9 , 4)
 //here we can have reverse values

 console.log(anothersti.trim());
// it will remove extra spaces
const url = "https://vansh.com/vansh%20saini"

console.log(url.replace("%20", "-"));
console.log(url.includes('vansh'))

console.log(Gamename.split('-'));