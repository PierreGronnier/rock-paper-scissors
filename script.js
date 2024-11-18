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