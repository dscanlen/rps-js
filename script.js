const choiceArr = ['Rock', 'Paper', 'Scissors'];

const outcomes = {
  rock: { scissors: 1, paper: 0 },
  paper: { rock: 1, scissors: 0 },
  scissors: { paper: 1, rock: 0 }
};

let score = [0, 0];

function isNumeric(n) {
  return /\d/.test(n);
}

function getOddRounds() {
  while (true) {
    let gameLength = prompt('How many rounds would you like to play?')
    if (isNumeric(gameLength)) {
      let rounds = Number(gameLength)
      if (rounds % 2 !== 0){
        break
      } else {
        console.log("Looks like you entered an even number, choose an odd number to avoid draws!")
      }
    }
  }
}

function getComputerChoice() {
  return _.sample(choiceArr);
}

function getPlayerChoice() {
  while (true) {
    let choice = prompt('Choose rock, paper or scissors:')
    let playerChoice = choice.toLowerCase();
    if (choiceArr.includes(playerChoice)) {
      return playerChoice
    } else  {
      console.log('You entered: ', choice, '. Try rock, paper or scissors...')
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log('Draw! Go again!')
    return 2
  } else {
    if (outcomes[playerSelection][computerSelection] == 1) {
      console.log('You win this round! ', playerSelection, ' beats ', computerSelection)
      score[0] = score[0]++
    } else {
      console.log('You lose this round! ', computerSelection, ' beats ', playerSelection)
      score[1] = score[1]++
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
      playRound(playerChoice, superIntelligentAIChoice)  
    }
    if (score[0] > score[1]) {
      console.log('You win! ', score[0], ' to ', score[1])
    } else {
      console.log('You lose! ', score[0], ' to ', score[1])
    }
}
