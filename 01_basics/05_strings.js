let name="Jayesh";
const repoCount=30;
//console.log(name+repoCount+" value");---> Old way to concatenate String.

//Use backticks(``)--->String interpolation (Insert variables and expressions directly inside a String).
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("jayesh2004");//--->gameName is a string object
console.log(gameName);
//console.log(typeof gameName);--->object

// console.log(name.length);--->6    length is not a function that's why not used length()
// console.log(gameName.length);--->10

console.log(name.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

// console.log(gameName[0]);---> j
// console.log(name[0]);---> j

let newString=gameName.substring(0,4);
console.log(newString);
newString=gameName.substring(-8,3);//--->not take negative value, if -ve value is given, it automatically takes 0.
console.log(newString);

let anotherString=gameName.slice(0,4);
console.log(anotherString);
anotherString=gameName.slice(-8,4);//--->Takes -ve values
console.log(anotherString);

const stringWithoutTrim="     jayesh   ";
console.log(stringWithoutTrim);
console.log(stringWithoutTrim.trim());

let url="https://jayesh.com/jayesh%20sharma";
let newUrl=url.replace("%20","-");
console.log(newUrl);

console.log(url.includes("/"));
console.log(url.includes("verma"));

let splitString=gameName.split("2");//--->['jayesh','004']
console.log(splitString);

let newStringOne="jayesh Sharma is a good boy";
console.log(newStringOne.split(" "));




























