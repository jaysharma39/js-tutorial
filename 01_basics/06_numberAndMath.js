const score=400;
console.log(score);

const balance=new Number(100.122);
console.log(balance);//--->[Number:100.122]

let balanceString=balance.toString();//--->convert balance into string
console.log(typeof balanceString);

let fixedBalance=balance.toFixed(2);//--->convert number into string, keeping 2 digits after decimal point.
console.log(fixedBalance);
console.log(typeof fixedBalance);

let precisionBalance=balance.toPrecision(2)//--->convert number into string, keeping 2 significant digits.
console.log(precisionBalance);

const hundreds=100000;
console.log(hundreds.toLocaleString());//--->100,000(American Style).
console.log(hundreds.toLocaleString('en-IN'));//--->1,00,000(Indian Style).

//------------------------MATHS----------------------------------
// console.log(Math);
// console.log(Math.abs(-4));//--->4
// console.log(Math.abs(4));//--->4

// console.log(Math.round(4.6));//--->5
// console.log(Math.round(4.4));//--->4

// console.log(Math.ceil(4.1));//--->5
// console.log(Math.ceil(4.9));//--->5

// console.log(Math.floor(4.1));//--->4
// console.log(Math.floor(4.9));//--->4

console.log(Math.random());//--->gives Random decimal values between 0(can include) and 1(never include).
console.log(Math.random()*10);//--->gives random decimal values between 0(include) and 10(never include).
console.log(Math.floor(Math.random()*10));//--->gives random integers 0-9
console.log(Math.floor((Math.random()*10))+1);//--->gives random integers 1-10

// General formula
const min=10;
const max=20;

let randomBetweenMinMax=Math.floor(Math.random()*(max-min+1))+min;//--->gives random integers 10-20
console.log(randomBetweenMinMax);






















