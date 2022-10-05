
function getDice() {
  return Math.floor(Math.random()*6)+1;
}

function numCheck(number1,number2) {
  
  if ((number1 + number2) === 12) {
    alert('You\'ve won a cuddly bear!');
  } else if (number1 === number2) {
    alert('You get 3 free throws!');
  } else if ((number1 + number2) % 2 === 0) {
    alert('You win 1 free throw!');
  } else {
    alert('You lose!');
  }
};


function getUserChoice() {
  const userChoice = prompt('Rock, Paper, Scissors?')
  if (userChoice.toLowerCase() === 'rock' || userChoice.toLowerCase() === 'paper' || userChoice.toLowerCase() === 'scissors') {
    return userChoice;
  } else {
    return 'Error';
  } /* Making the input lower case if it is acceptable, otherwise throw an error. */
}

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3); /* random float between 0-1, times 3 and rounded gives a random whoe number of 0,1 or 2.*/
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors';
  } /* Create a random number and use it to pick rock, paper or scissors. */
}

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) { /* Check for a tie. */
    return 'Tie.';
  } else if (userChoice === 'rock') { /* Check if the computer beats the users choice. */
    if (computerChoice === 'paper') { 
      return 'Computer won.'; 
    } else { /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return 'Player won.'; 
    }
  } else if (userChoice === 'paper') { /* Check if the computer beats the users choice again. */
    if (computerChoice === 'scissors') {
      return 'Computer won.';
    } else { /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return 'Player won.';
    }
  } else if (userChoice === 'scissers') { /* Check if the computer beats the user for a final time. */
    if (computerChoice === 'rock') {
      return 'Computer won.';
    } else { /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return 'Player won.';
    }
  } else {
    return 'what...';
  } /* If no one was won then things went very wrong some how... */
}

function game() {
  const gameType = prompt('To play Dice enter: dice\nTo play Rock Paper Scissors enter: rps');
  if (gameType.toLowerCase() === ('dice')) {
    const dice1 = getDice();
    const dice2 = getDice();
    numCheck(dice1,dice2);
  } else if (gameType.toLowerCase() === ('rps')) {
    const userInput = getUserChoice(); /* Clean userChoice from the HTML file. */
    if (userInput === 'Error') {
      alert(input+' is not a valid input.'); /* If input is erroneous, break. */
    } else {
      const computerChoice = getComputerChoice(); /* Get a random computer choice. */
      const winner = determineWinner(userInput,computerChoice); /* Check who won and set that to a variable. */
      alert('The computer chose: '+computerChoice+'\nYou chose: '+userInput+'\n'+winner);  /* create a pop up in the window with who won.*/
    }
  } else {
    alert('Somethings gone wrong...')
  }
}

game();