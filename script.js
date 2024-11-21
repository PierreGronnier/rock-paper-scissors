const hand = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button[value]');
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;
const resultsBody = document.getElementById("results-body");
const restartButton = document.getElementById("restart");
const resultsContainer = document.querySelector(".results");
let gameStarted = false; 

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return hand[choice];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
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

function displayFinalResult() {
    const finalRow = document.createElement("tr");
    finalRow.innerHTML = `
        <td colspan="4">
            ${humanScore > computerScore 
                ? "You win the game! 🎉" 
                : humanScore < computerScore 
                ? "You lose the game. 😢" 
                : "It's a tie! 🤝"}
        </td>
    `;
    resultsBody.appendChild(finalRow);
    buttons.forEach(button => button.disabled = true);
    restartButton.style.display = "block";
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (!gameStarted) {
            resultsContainer.classList.remove("hidden"); 
            gameStarted = true; 
        }

        if (roundCount < maxRounds) {
            const humanChoice = button.value;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${roundCount + 1}</td>
                <td>${humanChoice}</td>
                <td>${computerChoice}</td>
                <td>${result}</td>
            `;
            resultsBody.appendChild(newRow);

            roundCount++;

            if (roundCount === maxRounds) {
                displayFinalResult();
            }
        }
    });
});


restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    gameStarted = false;

    buttons.forEach(button => button.disabled = false);
    resultsBody.innerHTML = "";
    resultsContainer.classList.add("hidden"); 
    restartButton.style.display = "none";
});
