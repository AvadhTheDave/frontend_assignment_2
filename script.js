const restartInstructions = "To restart, refresh this page (press F5 or Ctrl+R on Windows/Linux, or Cmd+R on Mac).";

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
        userChoice = prompt(`Welcome to your digital rock-paper-scissors game!\n\nHere you get to play against the computer. You need to win 3 rounds to claim victory. The rules are simple: rock beats scissors, scissors beats paper, and paper beats rock.\n\nEnter your choice (rock, paper, or scissors):`);
    } else {
        userChoice = prompt("Enter your choice (rock, paper, or scissors):");
    }
    return userChoice === null ? null : userChoice.toLowerCase().trim();
}

function playRound(playerSelection, computerSelection) {
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return { message: `Invalid choice: ${playerSelection}. Please enter rock, paper, or scissors.`, winner: null };
    } else if (playerSelection === computerSelection) {
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

    alert("Welcome to Rock Paper Scissors!\n\nFor extra game details, open your browser's developer tools (press F12 on Windows/Linux; on Mac, press Cmd+Option+J in Chrome). Then select the Console tab. It will show each round's choices, result, and score, plus your final score.");
    console.log("Rock Paper Scissors game started.");

    while (playerScore < 3 && computerScore < 3) {
        const userChoice = playerPrompt(round);
        if (userChoice === null) {
            console.info(`Prompt canceled; the game has stopped. ${restartInstructions}`);
            return;
        }

        const computerChoice = computerPlay();
        const result = playRound(userChoice, computerChoice);
        console.log(`Round ${round + 1}: You chose ${userChoice}; computer chose ${computerChoice}. ${result.message}`);
        alert(result.message);

        if (result.winner === 'player') {
            playerScore++;
        } else if (result.winner === 'computer') {
            computerScore++;
        }
        round++;
        console.log(`Round ${round} score: You ${playerScore} - ${computerScore} Computer.`);
        alert(`Round ${round} complete. Score: You ${playerScore} - ${computerScore} Computer.`);
    }

    const finalMessage = `Final score: You ${playerScore} - ${computerScore} Computer. ${playerScore === 3 ? 'You win the game!' : 'Computer wins the game!'}\n\n${restartInstructions}`;
    console.log(finalMessage);
    alert(finalMessage);
}

game();