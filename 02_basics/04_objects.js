
// const tinderUser=new Object();//---> Singleton object
const tinderUser={};//---> Non-Singleton object

tinderUser.id=1;
tinderUser.name="jayesh";
tinderUser.email="Jay@gmail.com";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    userName:{
        userFullName:{
            firstName:"Jayesh",
            lastName:"Sharma"
        }
    }
}
console.log(regularUser.userName.userFullName.firstName);

// Merging Objects
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"a",
    4:"b",
}
// 1st method
// const obj3={obj1,obj2}
// console.log(obj3);//---> gives nested object

//2nd method
const obj3=Object.assign({},obj1,obj2)//---> target-{} and source-obj1,obj2
const obj4=Object.assign(obj1,obj2);//---> here obj2(source) is added in obj1(target)
console.log(obj4===obj1);//--->true
console.log(obj1);
console.log(obj4);

//3rd method(best method)--->Spread method

const obj5={
    1:"a",
    2:"b"
}
const obj6={
    3:"a",
    4:"b"
}
const obj7={...obj5,...obj6}

// Array of objects come when you retrieve data from database
const users=[ {id:1,name:"jayesh",age:18,} , {id:2,name:"deepak",age:16,} , {id:3,name:"dishant",age:12,} ]
users[1].name="chhavi";
console.log(users);

console.log(Object.keys(tinderUser));//---> gives an array of keys
console.log(Object.values(tinderUser));//---> gives an array of values
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//--->true















