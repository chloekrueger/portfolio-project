var userWins = "You win!";
var compWins = "The computer wins!"
var roundCounter = 0;

var gameRound = function() {
  var userChoice = prompt("Choose rock, paper, or scissors by typing 'R', 'P' or 'S'");
  var compChoice = "R";
  var randNumGen = Math.random();

  if (randNumGen > 0.66) {
    compChoice = "P";
  } else if (randNumGen > 0.33) {
    compChoice = "S";
  }

  if (compChoice !== userChoice) {
    if (compChoice === "R") {
        if (userChoice === "S") {
          alert(compWins + " Rocks beats scissors");
        } else {
          alert(userWins + " Paper beats rock");
      }
    } else if (compChoice === "P") {
          if (userChoice ===  "R") {
            alert(compWins + " Paper beats rock");
          } else {
            alert (userWins + " Scissors beats paper");
          }
        } else {
          if (userChoice === "P") {
            alert (compWins + " Scissors beats paper");
          } else {
            alert (userWins + " Rock beats scissors");
          }
  }
    } else {
          alert("TIE!")
        }
  };

  while (roundCounter < 5) {
    gameRound();
    roundCounter++;
  }
