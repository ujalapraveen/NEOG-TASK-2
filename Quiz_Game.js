readlineSync=require('readline-sync');
  //  var userAnswer=readlineSync.question(question);
question_list=["1.what is the capital of India ?","2.Who is the prime minister of India ?","3.How many states in India ?","4.How many continents are there ?"]
option_list=[["1.Delhi","2.Rachi ","3.Mumbai","4. Banglore"],["1.Ram nath covind","2. Narendra Modi","3.Jawahar Lal Nehru","4.Lal Bahadur Shastri"],["1.Twelve","2.Thirty-Four","3.fiffty","4.Twenty-nine"],["1.Four","2.Nine","3.Seven","4.Six"]]
solu_list=[1,2,4,3]
var i=0;
while(i<question_list.length){
  console.log(question_list[i])
  var j=0;
  while(j<option_list[i].length){
    console.log("    ",option_list[i][j])
    j++;
    }
  var solution=readlineSync.question("enter the solution");
  if(solution==solu_list[i]){
    console.log("congrats your next question is")
  }
  else{
    console.log("your answer is wrong");
    break
  }
  i++;
  }