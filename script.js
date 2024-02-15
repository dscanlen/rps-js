const outcomes = {
  rock: { scissors: 'You win, rock beats scissors', paper: 'You lose, paper beats rock' },
  paper: { rock: 'You win, paper beats rock', scissors: 'You lose, scissors beats paper' },
  scissors: { paper: 'You win, scissors beats paper', rock: 'You lose, rock beats scissors' }
};

function getComputerChoice() {
  // code
}

function getPlayerChoice() {
  // code
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log('Draw!')
    // playround again?
  } else {
    console.log(outcomes[playerSelection][computerSelection])
  }
}

