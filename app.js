function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else return 'scissors';
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection == 'rock' && computerSelection === 'scissors') {
        return 'Player wins';
    } else if (playerSelection == 'paper' && computerSelection === 'rock') {
        return 'Player wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins';
    } else if (playerSelection == computerSelection) {
        return 'It is a draw';
    } else return 'Computer wins';
}



function game() {
    const playerSelection = prompt('Play by choosing rock, paper or scissors');

    let computerPoints = 0;
    let playerPoints = 0;

    for (let game = 0; game < 5; game++) {
        if (playGame(playerSelection) === 'Player wins') {
            playerPoints++;
        } else if (playGame(playerSelection) === 'Computer wins') {
            computerPoints++;
        }
    }

    if (playerPoints > computerPoints) {
        console.log('Player won the game');
    } else if (computerPoints > playerPoints) {
        console.log('Computer won the game');
    }
}

game()

