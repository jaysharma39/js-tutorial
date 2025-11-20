// Singleton
// Object.create

// object literals
const JsUser={
    name:"Jayesh",//---> "name":"jayesh" --> also correct
    "Full Name":"Jayesh Sharma",
    age:18,
    location:"jaipur",
    email:"jayesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser["Full Name"]);//---> cannot write JsUser.Full Name

