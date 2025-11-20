const marvelHeroes=["thor","ironman","hulk"];
const dcHeroes=["superman","batman","flash"];

// marvelHeroes.push(dcHeroes);//--->push the dc_heroes as a nested array(single element).
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);//--->batman

const concatedArray=marvelHeroes.concat(dcHeroes);// return a new array without changing the exixting arrays. 
// Not store dc_heroes as nested array.
console.log(concatedArray);

//---> best way to concatenate two or more arrays---> using spread(...)

const allHeroes=[...marvelHeroes,...dcHeroes];//---> you can add more arrays.
console.log(allHeroes);

const nestedArray=[2,3,4,5,[6,7,8],[7,[4,5,6]]];
const flattedArray=nestedArray.flat(Infinity);//---> you can also pass depth;
console.log(flattedArray);

console.log(Array.isArray("jayesh"));//---> false
console.log(Array.isArray(allHeroes));//--->true

const convertedArray=Array.from("Jayesh");//---> convert string to array
console.log(convertedArray);

console.log(Array.from({name:"jayesh"}));// Interesting!! return empty array 

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));














