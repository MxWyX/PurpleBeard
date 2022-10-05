
function getDice() {
  return Math.floor(Math.random()*6)+1;
}

function numCheck(number1,number2) {
  console.log(number1);
  console.log(number2);
  if ((number1 + number2) === 12) {
    console.log('You\'ve won a cuddly bear!');
  } else if (number1 === number2) {
    console.log('You get 3 free throws!');
  } else if ((number1 + number2) % 2 === 0) {
    console.log('You win 1 free throw!');
  } else {
    console.log('You lose!');
  }
};

function game() {
  let dice1 = getDice();
  let dice2 = getDice();
  numCheck(dice1,dice2);
}

game();