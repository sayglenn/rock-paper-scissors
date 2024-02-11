// Selects a random choice by selecting a random integer between 0 to 2
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt == 0
        ? "Rock"
        : randomInt == 1
        ? "Paper"
        : "Scissors";
}

function generateResult(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        return computerSelection == "Rock"
            ? "It's a draw! Rock ties against Rock."
            : computerSelection == "Paper"
            ? "You Lose! Rock loses to Paper."
            : "You Win! Rock beats Scissors!"
    } else if (playerSelection == "Paper") {
        return computerSelection == "Rock"
            ? "You Win! Paper beats Rock!"
            : computerSelection == "Paper"
            ? "It's a draw! Paper ties against Paper."
            : "You Lose! Paper loses to Scissors."
    } else {
        return computerSelection == "Rock"
            ? "You Lose! Scissors loses to Rock."
            : computerSelection == "Paper"
            ? "You Win! Scissors beats Paper!"
            : "It's a draw! Scissors ties against Scissors."
    }
}

function resultChecker(string) {
    if (string.slice(0, 5) == "You W") {
        playerScore += 1;
        playerText.textContent = "Player: " + playerScore + " (" + playerChoice + ")";
        computerText.textContent = "Computer: " + computerScore + " (" + computerChoice + ")";
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
        playerText.textContent = "Player: " + playerScore + " (" + playerChoice + ")";
        computerText.textContent = "Computer: " + computerScore + " (" + computerChoice + ")";
        if (computerScore == 5) {
            resultText.textContent = "You lost this round! The final score is " + 
                playerScore + " to " + computerScore + "!";
            playerScore = 0;
            computerScore = 0;
            playerText.textContent = "Player: " + playerScore;
            computerText.textContent = "Computer: " + computerScore;
        }
    } else {
        playerText.textContent = "Player: " + playerScore + " (" + playerChoice + ")";
        computerText.textContent = "Computer: " + computerScore + " (" + computerChoice + ")";
    }
}

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

const rockChoice = document.querySelector("#rock-button");
const paperChoice = document.querySelector("#paper-button");
const scissorsChoice = document.querySelector("#scissors-button");
const playerText = document.querySelector(".result-player");
const computerText = document.querySelector(".result-computer");

const resultText = document.querySelector(".result-text");

rockChoice.onclick = () => {
    playerChoice = "Rock"
    computerChoice = getComputerChoice();
    const result = generateResult(playerChoice, computerChoice);
    resultText.textContent = result;
    resultChecker(result);
}

paperChoice.onclick = () => {
    playerChoice = "Paper"
    computerChoice = getComputerChoice();
    const result = generateResult(playerChoice, getComputerChoice());
    resultText.textContent = result;
    resultChecker(result);
}

scissorsChoice.onclick = () => {
    playerChoice = "Scissors";
    computerChoice = getComputerChoice();
    const result = generateResult(playerChoice, getComputerChoice());
    resultText.textContent = result;
    resultChecker(result);
}