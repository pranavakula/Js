const accountId=144553 //constant variables
let email= "pranavgmail.com"   //mostly used as scope problem is solved
var accpswd="pswd" //used less because of scope problem
accountcity="hyd" //should completely avoid this...

let accountstate
//this above variable is undefined
/* Prefer to use let because of issue in block
scope and functional scope*/
//accountId=2
console.log(accountId);
console.table([accountId,accountcity,accpswd,email,accountstate])