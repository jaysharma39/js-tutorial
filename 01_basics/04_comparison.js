// Basics Comparison
    // console.log(2>1);
    // console.log(2<1);
    // console.log(2>=1);
    // console.log(2<=1);
    // console.log(2==1);
    // console.log(2!=1);

// Complex Comparison
//console.log("2">1); //true
//console.log("02">1); //true

console.log(null>0);// false
console.log(null==0);// false
console.log(null>=0);// true
/* 
The reason is that an equality check== and comaprisons>,<,>=,<= work different.
Comparisons convertnull to a number, treating it as 0.
That's why null>0-->false and null>=0--->true;
*/
console.log(undefined>0);// false
console.log(undefined==0);// false
console.log(undefined>=0);// false

console.log("2"===2);//Strict equality, return true if both type and value are =.
console.log("2"==="2");// true















