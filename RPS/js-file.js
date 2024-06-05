const options = ["Rock", "Paper", "Scissors"];
const combinations = {"Rock":"Scissors", "Paper":"Rock", "Scissors":"Paper"};

const btns = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const score = document.querySelector("#score");
score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

const round = document.querySelector("#round");
round.textContent = `Round ${roundsPlayed + 1}`;

btns.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = getHumanChoice(button.id);
        const computerSelection = getComputerChoice();

        alert(playRound(humanSelection, computerSelection));
        
        score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
        roundsPlayed++;
        checkGameEnded();
        
        round.textContent = `Round ${roundsPlayed + 1}`;
    })
})

function getComputerChoice() {

    let randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

function getHumanChoice(choice) {

    return options[choice];
}

function playRound(humanChoice, computerChoice) {


    let message;
    if(humanChoice == computerChoice) {
        message = "Tie."
    } else if(combinations[humanChoice] == computerChoice) {
        message = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        message = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScore++
    }

    return message;
}

function checkGameEnded() {

    if(humanScore >= 3) {
        endGame("You win", humanScore);
    } else if(computerScore >= 3) {
        endGame("Computer wins", computerScore);
    } 
}

function endGame(winner, points) {
    
    alert(`${winner} with ${points} points`);
    
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    round.textContent = `Round ${roundsPlayed + 1}`;
    score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}