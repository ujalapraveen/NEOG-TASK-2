var readlineSync = require ("readline-sync");
var number = readlineSync.questionInt("enter a number.....") 
var i=2
while (i <=number){
    var c=0
    var j=2
    while (j<i){
        if (i %j==0){
            c+=1
        }
        j+=1
    }
        
    if (c==0){
        console.log(i)
    }
    i+=1
}