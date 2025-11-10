/* 
Based on the way of storing in memory and way to access.
Datatypes are categorized into two categories 
*/

// Primitive datatypes--->call by value
// 7 primitive datatypes--->number, string, boolean, bigInt, null, undefined, symbol

const score=100;
const scoreValue=100.3;
//console.log(typeof scoreValue);--->number


const isLoggedIn=true;
const outsideTemp=null;
//console.log(typeof outsideTemp);--->object

let userEmail;
//console.log(typeof userEmail);--->undefined


const id=Symbol("123");
const anotherId=Symbol("123");

console.log(id===anotherId);
//console.log(typeof id);--->symbol
//console.log(typeof anotherId);--->symbol

// Non-Primitive Datatypes--->call by reference
// Arrays, objects, functions

const sampleArray=["Apples","banana","orange",3];
console.log(sampleArray);
console.log(typeof sampleArray);//--->object

const obj={
    name:"jayesh",
    age:18
}
console.log(obj);
console.log(typeof obj);//--->object

const func=function(){
    console.log("Hello world");
}

console.log(func);// This line doesn't call the func, it just print the function object.
func();// This is function call and this will print hello world.
console.log(typeof func);//--->object function










