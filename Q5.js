
var readlineSync = require("readline-sync");
var userAge = readlineSync.questionInt("enter your userAge ?")
if (userAge>5){
  console.log(" you are right")
}
else {
  console.log("you are wrong ")
}


 