var readlineSync =require("readline-sync");
var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("Welcome "+ userName + " to Do You Know Ujala? ");

function play(question,answer) {
  var userAnswer = readlineSync .question(question);
  if (userAnswer == answer) {
  console.log(" you are right");
  score=score + 1;

  } else {
  console.log(" you are wrong") 

  }
  console.log("current score: ",score)
  console.log("-------------")

}
 var questions = [{ 
  question: "Where do I live? ",
  answer: "Banglore"
},{
  question: "My favourite superhero would be? ",
  answer: "ujala"
},
{
  question: "where do i work?  ",
  answer: "microsoft"

}];

for (var i=0;i<questions.length; i++) {
  var currentquestion= questions[i];
  play(currentquestion.question,
  currentquestion.answer)
}
console.log("YAY! YOU SCORED:",score);
