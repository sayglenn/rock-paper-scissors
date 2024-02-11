// Selects a random choice by selecting a random integer between 0 to 2
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt == 0
        ? "ROCK"
        : randomInt == 1
        ? "PAPER"
        : "SCISSORS";
}

function generateResult(playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
        return computerSelection == "ROCK"
            ? "It's a draw! Rock ties against Rock."
            : computerSelection == "PAPER"
            ? "You Lose! Rock loses to Paper."
            : "You Win! Rock beats Scissors!"
    } else if (playerSelection == "PAPER") {
        return computerSelection == "ROCK"
            ? "You Win! Paper beats Rock!"
            : computerSelection == "PAPER"
            ? "It's a draw! Paper ties against Paper."
            : "You Lose! Paper loses to Scissors."
    } else {
        return computerSelection == "ROCK"
            ? "You Lose! Scissors loses to Rock."
            : computerSelection == "PAPER"
            ? "You Win! Scissors beats Paper!"
            : "It's a draw! Paper ties against Paper."
    }
}

function resultChecker(string) {
    if (string.slice(0, 5) == "You W") {
        playerScore += 1;
        playerText.textContent = "Player: " + playerScore;
        if (playerScore == 5) {
            resultText.textContent = "You won this round! The final score is " + 
                playerScore + " to " + computerScore + "!";
            playerScore = 0;
            computerScore = 0;
            playerText.textContent = "Player: " + playerScore;
            computerText.textContent = "Computer: " + computerScore;
        }
    } else if (string.slice(0, 5) == "You L") {
        computerScore += 1;
        computerText.textContent = "Computer: " + computerScore;
        if (computerScore == 5) {
            resultText.textContent = "You lost this round! The final score is " + 
                playerScore + " to " + computerScore + "!";
            playerScore = 0;
            computerScore = 0;
            playerText.textContent = "Player: " + playerScore;
            computerText.textContent = "Computer: " + computerScore;
        }
    } else {

    }
}

let playerScore = 0;
let computerScore = 0;

const rockChoice = document.querySelector("#rock-button");
const paperChoice = document.querySelector("#paper-button");
const scissorsChoice = document.querySelector("#scissors-button");
const playerText = document.querySelector(".result-player");
const computerText = document.querySelector(".result-computer");

const resultText = document.querySelector(".result-text");

rockChoice.onclick = () => {
    const result = generateResult("ROCK", getComputerChoice());
    resultText.textContent = result;
    resultChecker(result);
}

paperChoice.onclick = () => {
    const result = generateResult("PAPER", getComputerChoice());
    resultText.textContent = result;
    resultChecker(result);
}

scissorsChoice.onclick = () => {
    const result = generateResult("SCISSORS", getComputerChoice());
    resultText.textContent = result;
    resultChecker(result);
}