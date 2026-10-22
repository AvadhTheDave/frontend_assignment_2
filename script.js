function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = getRandomInt(choices.length);
    return choices[randomIndex];
}

function playerPrompt() {
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase().trim();
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return { message: `Computer plays ${computerSelection}. It's a tie!`, winner: null };
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return { message: `Computer plays ${computerSelection}. You win!`, winner: 'player' };
    } else {
        return { message: `Computer plays ${computerSelection}. Computer wins!`, winner: 'computer' };
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        const userChoice = playerPrompt();
        const computerChoice = computerPlay();
        const result = playRound(userChoice, computerChoice);
        alert(result.message);

        if (result.winner === 'player') {
            playerScore++;
        } else if (result.winner === 'computer') {
            computerScore++;
        }
    }

    alert(`Final score: You ${playerScore} - ${computerScore} Computer. ${
        playerScore === 3 ? 'You win the game!' : 'Computer wins the game!'
    }`);
}

game();