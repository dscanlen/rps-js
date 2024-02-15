const choiceArr = ['rock', 'paper', 'scissors'];

const outcomes = {
  rock: { scissors: 1, paper: 0 },
  paper: { rock: 1, scissors: 0 },
  scissors: { paper: 1, rock: 0 }
};

let playerScore = 0;
let computerScore = 0;

function isNumeric(n) {
  return /\d/.test(n);
}

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function getOddRounds() {
  while (true) {
    let gameLength = prompt('How many rounds would you like to play?')
    if (isNumeric(gameLength)) {
      let rounds = Number(gameLength)
      if (rounds % 2 !== 0){
        return rounds
      } else {
        console.log("Looks like you entered an even number, choose an odd number to avoid draws!")
      }
    }
  }
}

function getComputerChoice() {
  let choice = choiceArr[(Math.floor(random(1, choiceArr.length))) - 1]
  return choice;
}

function getPlayerChoice() {
  while (true) {
    let choice = prompt('Choose rock, paper or scissors:')
    let playerChoice = choice.toLowerCase();
    if (choiceArr.includes(playerChoice)) {
      return playerChoice
    } else  {
      console.log('You entered:', choice, '. Try rock, paper or scissors...')
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log('Draw! Go again!')
    return 1
  } else {
    if (outcomes[playerSelection][computerSelection] == 1) {
      console.log('You win this round! ', playerSelection, ' beats ', computerSelection)
      playerScore++
    } else {
      console.log('You lose this round! ', computerSelection, ' beats ', playerSelection)
      computerScore++
    }
  }
}

function playGame(rounds) {
    i = 0
    while (i < rounds) {
      console.log('ROUND ', i)
      let superIntelligentAIChoice = getComputerChoice()
      let playerChoice = getPlayerChoice()
      console.log('1')
      console.log('2')
      console.log('3')
      console.log('Shoot!')
      if (playRound(playerChoice, superIntelligentAIChoice) !== 1) {
        i++
      }
    }
    if (playerScore > computerScore) {
      console.log('You win! ', playerScore, ' to ', computerScore)
    } else {
      console.log('You lose! ', playerScore, ' to ', computerScore)
    }
}

playGame(getOddRounds())
