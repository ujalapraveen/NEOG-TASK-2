
var readlineSync = require("readline-sync") ;
var score=0;
var questionOne = "Are you leaving in Bokaro ? ";
var answerOne = "yes"

var userAnswer = readlineSync.question(questionOne);
console.log("you entered " + userAnswer);

if (userAnswer == answerOne ){
  console.log("you are right !")
  score=score+1;
  console.log("Score is: " + score)
}
  else {
    console.log("You are wrong ")
    score = score -1
    console.log("Score is: " - score)
  }


 