const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return hand[choice];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice;

    while (true) {
        humanChoice = prompt("Make your choice : rock, paper, scissors ?");

        if (humanChoice === null) {
            return null; 
        }

        humanChoice = humanChoice.toLowerCase();

        if (validChoices.includes(humanChoice)) {
            break;
        } else {
            console.error("Error: invalid choice. Please enter rock, paper or scissors.");
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            return "Game aborted."; 
        }
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        return `You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (computerScore > humanScore) {
        return `You lose the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    } else {
        return `The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}

const gameResult = playGame();
if (gameResult) {
    console.log(gameResult);
}