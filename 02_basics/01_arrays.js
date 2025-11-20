//Array in js ---> Storing values of same or different data types in single variable.
const myArr=[4,5,23,24,12,5];
const myArr1=[33,56,76,"apple",true,"shaktiman",null];
// console.log(myArr);
// console.log(myArr1);

// Another way to create Array...
const myArr2=new Array(4,6,5,3,2);
console.log(myArr2);
console.log(myArr2[2]);//---> print element at index 2.


// Array Methods...
myArr.push(6);//---> add element at last
console.log(myArr);

myArr.pop();
console.log(myArr);//---> remove element from last

// console.log(myArr.includes(9));//--->false
// console.log(myArr.includes(23));//--->true

console.log(myArr.indexOf(23));//--->gives index of 23.


// join(separator)-->converts all elements of an array into a single string, with a separator between them.

const newArr=myArr.join();// by default Separator is comma(,)
console.log(newArr);
console.log(typeof newArr);//--->string

const newArrWithoutComma=myArr.join("");
console.log(newArrWithoutComma);

const newArrWithHypen=myArr.join("-");
console.log(newArrWithHypen);

// Slice vs Splice

const myArrUsingSlice=myArr.slice();//--->copying the entire original array
console.log(myArrUsingSlice);

const myArrUsingSlice_1=myArr.slice(1,3);//--->copying the part of original array, end(exclude)
console.log(myArrUsingSlice_1);

// myArrUsingSlice[0]=6;//---> does not change the original array
// console.log(myArrUsingSlice);
// console.log(myArr);

const myArrUsingSplice=myArr.splice(1,3);//---> Modifies the original array by removig these elements. Start from 1st index and remove 5,23,24-->delete 3 elements

console.log(myArrUsingSplice);//--->[5,23,24] end(included)--->elemnts removed from myArr.
console.log(myArr);//---> changed to [4,12,5];

//---> you can also add elements using splice;
let arr=[10,30,40,20];
arr.splice(2,0,60)//---> start at index 2, delete 0 , add 60; overall size of array increase
console.log(arr);[10,30,60,40,20]

arr.splice(2,1,30)//---> start at index 2, delete 1, add 30;
console.log(arr);

arr.splice(2,2,100,120);//---> start at index 2 delete 2 elements and add 100,120 in place.
console.log(arr);


























