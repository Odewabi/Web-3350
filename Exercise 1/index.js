let playerScore = 0;
let computerScore = 0;
let rounds = 5;

function playGame(playerChoice) {
    if (rounds === 0) {
        document.getElementById("game-over").textContent = "Game Over! Refresh the page to play again.";
        return;
    }

    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById("player-choice").textContent = `Player chose: ${playerChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
    document.getElementById("round-result").textContent = result;

    document.getElementById("score-board").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    rounds--;
    if (rounds === 0) {
        endGame();
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function endGame() {
    let finalMessage = "";
    if (playerScore > computerScore) {
        finalMessage = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
        finalMessage = "Better luck next time! The computer won the game.";
    } else {
        finalMessage = "It's a tie overall!";
    }

    document.getElementById("game-over").textContent = finalMessage;
}