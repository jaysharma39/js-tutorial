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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack for Primitive
// Heap for Non-Primitive 

//For Stack---Call by value
let userName="Jayesh Sharma";
let anotherUserName=userName;// copy of userName is stored in anotherUserName.
anotherUserName="Deepanshu Sharma";// change happens in the copy , not in the original.
console.log(userName);
console.log(anotherUserName);

//For heap---call by reference
let obj1={
    name:"jayesh",
    email:"jay.sharma@gmail.com"
}
let anotherObj=obj1// reference of obj1 is given to anotherObj.
anotherObj.email="deepanshu@gmail.com";// Change also happens in obj1.
console.log(obj1);
console.log(anotherObj);

















