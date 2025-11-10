const accountId=2345
let accountEmail="jay.sharma@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

//accountId=2345 -->cannot possible as const value cannot be changed
console.table([accountId,accountEmail,accountPassword,,accountCity,accountState])

/*
Prefer not to use var 
because of issue in block and functional scope
*/
