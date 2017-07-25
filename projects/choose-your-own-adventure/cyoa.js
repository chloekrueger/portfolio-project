/*var welcome = prompt("Welcome to Chloe's Choose your own adventure page!");
var proceed = prompt("Would you like to have an adventure?");
if(proceed === yes)
{
  alert("Yay, get psyched for your adventure!");
}
else
{
  alert("Bummer, no adventure for you, refresh to begin again!");
}*/


var direction = prompt('You have arrived at a fork in the road, to go left, type left or to go right, type right.');
  if (direction === 'right') {
      var monster = prompt('RIGHT! Now, you have run into a monster, do you run away or tickle him? Type run or tickle!');
        if (monster === run) {
          alert('You are running away from the monster through a furry forrest.')
        }
        else if (monster === tickle) {
          alert('The monster is quite ticklish and has peed his pants!')
        }
        else {
          alert('Wrong choice! Refresh to start over!')
        }
    }
  else if (direction === 'left') {
        var chocolate = prompt('Lefties, you have landed in a chocolate fountain, do you drink up or get out? Type drink or out.');
        if (chocolate === drink) {
          alert('Drink up buttercup. Chocolate drunk!')
        }
        else if (chocolate === out) {
          alert('No chocolate for you! :-(')
        }
        else {
          alert('Wrong choice! Refresh to start over!')
        }
    }
    else {
        alert('Invalid selection, refresh to start again!')
        }
