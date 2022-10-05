
let dice2 = Math.floor(Math.random()*6);
let dice1 = Math.floor(Math.random()*6);

function numCheck(number1,number2) {
  if ((number1 + number2) == 12) {
    console.log('You\'ve won a cuddly bear!');
    console.log(number1);
    console.log(number2);
  } else if (number1 == number2) {
    console.log('You get 3 free throws!');
    console.log(number1);
    console.log(number2);
  } else if ((number1 + number2) % 2 == 0) {
    console.log('You win 1 free throw!');
    console.log(number1);
    console.log(number2);
  } else {
    console.log('You lose!');
    console.log(number1);
    console.log(number2);
  }
};

numCheck(dice1,dice2);