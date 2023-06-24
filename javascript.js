function getComputerChoice() {

    /*Randomly generate a choice of 
    rock, paper, or scissors for the computer */
    
    choice = Math.floor(Math.random() * 3) + 1;

    switch(choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    
    playerSelectionLower = playerSelection.toLowerCase();

    computerSelectionLower = computerSelection.toLowerCase();

    winMessage = "You Win! " + playerSelection + " beats " 
    + computerSelection;

    loseMessage = "You Lose! " + computerSelection + " beats " 
    + playerSelection; 

    tieMessage = "Tie game! Go again!"

     if (playerSelectionLower === "rock") {
        
        if (computerSelectionLower === "scissors") {
            return winMessage;
        }

        else if (computerSelectionLower == "paper") {
            return loseMessage;
        }

        else {
            return tieMessage;
        }
     }

     if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            return winMessage;
        }

        else if (computerSelection === "scissors") {
            return loseMessage;
        }

        else {
            return tieMessage;
        }
     }
    
     if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            return winMessage;
        }

        else if (computerSelection === "rock") {
            return loseMessage;
        }

        else {
            return tieMessage;
        }
     }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));