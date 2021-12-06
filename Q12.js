
var superman = {
    name: "superman",
    power: "flight",
    costumerColor: "blue",
    strength: 10000,
    stealth: 0,
    intelligence: 100,
  
  }
  
  
  
  var batman = {
    name: "batman",
    power: "martial arts",
    costumerColor: "black",
    strength: 100,
    stealth: 1000,
    intelligence: 100,
  
  }
  
  // console.log(superman.strength);
  // console.log(batman.strength);
  // console.log(superman.strength > batman.strength);
  
  
  var superheroes = [superman, batman];
  for (var i=0; i<superheroes.length; i++) {  //for loop
    var currentHero = superheroes[i];        // array index based access
    console.log(currentHero.name);           // function call
    console.log(currentHero.costumeColor)     //currenHero.costumeColor :: object access on key 
    console.log("---------")
  }