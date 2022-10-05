

function numCheck(number1,number2) {
  if ((number1 == 6) && (number2 == 6)) {
    console.log('You\'ve won a cuddly bear!');
  } else if (number1 == number2) {
    console.log('You get 3 free throws!')
  } else if ((number1 + number2) % 2 == 0) {
    console.log('You win 1 free throw!')
  } else {
    console.log('You lose!')
  }
};


function diceGet() {
  return (Math.floor(Math.random()*6))
}

function diceGame() {
  const dice1 = diceGet
  const dice2 = diceGet
  console.log(dice1)
  console.log(dice2)
  numCheck(dice1,dice2)
}

diceGame()