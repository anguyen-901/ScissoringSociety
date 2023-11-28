function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "paper" && computerSelection === "scissor") ||
                (playerSelection === "scissor" && computerSelection === "rock")) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Rock, Paper, or Scissor?");
        let computerSelection = getComputerChoice();
        console.log(`Player:\t${playerScore}\nComputer:\t${computerScore}\n`);
        console.log(`Player:\t${playerSelection}\nComputer:\t${computerSelection}\n`);
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`Player:\t${playerScore}\nComputer:\t${computerScore}\n`);
    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (playerScore == computerScore) {
        console.log("TIE!");
    } else {
        console.log("You Lose!")
    }
}

var playerScore = 0;
var computerScore = 0;
game();
