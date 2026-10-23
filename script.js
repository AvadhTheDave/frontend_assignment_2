function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = getRandomInt(choices.length);
    return choices[randomIndex];
}

function playerPrompt(round) {
    let userChoice;
    if (round === 0) {
        userChoice = prompt(`Welcome to your digital rock-paper-scissors game!\n\nHere you get to play against the computer. You need to win 3 rounds to claim victory. The rules are simple: rock beats scissors, scissors beats paper, and paper beats rock.\n\nEnter your choice (rock, paper, or scissors):`).toLowerCase().trim();
    } else {
        userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase().trim();
    }
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
    let round = 0;

    while (playerScore < 3 && computerScore < 3) {
        const userChoice = playerPrompt(round);
        const computerChoice = computerPlay();
        const result = playRound(userChoice, computerChoice);
        alert(result.message);

        if (result.winner === 'player') {
            playerScore++;
        } else if (result.winner === 'computer') {
            computerScore++;
        }
        round++;
        alert(`Round ${round} complete. Score: You ${playerScore} - ${computerScore} Computer.`);
    }

    alert(`Final score: You ${playerScore} - ${computerScore} Computer. ${playerScore === 3 ? 'You win the game!' : 'Computer wins the game!'
        }`);
}

game();