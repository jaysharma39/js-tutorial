// Singleton
// Object.create

// object literals

// Declaring symbol
const mySym=Symbol("key1");

const JsUser={
    name:"Jayesh",//---> "name":"jayesh" --> also correct
    "Full Name":"Jayesh Sharma",
    [mySym]:"myKey1",//--->declaring symbol mySym as a key in object
    age:18,
    location:"jaipur",
    email:"jayesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser["Full Name"]);//---> cannot write JsUser.Full Name
console.log(JsUser[mySym]);//---> only correct way
console.log(typeof JsUser[mySym]);

JsUser.email="jay@gmail.com";
//console.log(JsUser);

//Object.freeze(JsUser);//---> JsUser is freeze now, you can't make changes to it..

//JsUser.email="deepak@gmail.com";// --->can't change when freeze

// Adding a function in a object...
JsUser.greeting=function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting);//--->[Function (anonymous)]---> Function is not executed,but have reference.

console.log(JsUser.greeting());//---> Function executes

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser ${this.name}`);//---> (this) to refer the current object.
}
console.log(JsUser.greetingTwo());










