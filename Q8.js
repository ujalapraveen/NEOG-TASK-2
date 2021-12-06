
var readlineSync = require ("readline-sync");
var score = 0;
function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer){
    console.log("you were right!");
    score = score + 1;
  }
  else {
    console.log("you were wrong!");
    score = score -1
  }

}

play("Where do I work? ","Microsoft");
play("Where do I live? ","Delhi");
console.log("your score is ",score)

 