function getComputerChoice() {

    /*Randomly generate a choice of 
    rock, paper, or scissors for the computer */
    
    let choice = Math.floor(Math.random() * 3) + 1;

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

    /* Plays one round of rock, paper, scissors */
    
    let playerSelectionLower = playerSelection.toLowerCase();

    let computerSelectionLower = computerSelection.toLowerCase();

    let winMessage = "You Win! " + playerSelection + " beats " 
    + computerSelection;

    let loseMessage = "You Lose! " + computerSelection + " beats " 
    + playerSelection; 

    let tieMessage = "Tie round!"

    let winner = "";

     if (playerSelectionLower === "rock") {
        
        if (computerSelectionLower === "scissors") {
            console.log(winMessage);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower == "paper") {
            console.log(loseMessage);
            winner = "computer";
            return winner;
        }

        else {
            console.log(tieMessage);
            return winner = "tie";
        }
     }

     else if (playerSelectionLower === "paper") {

        if (computerSelectionLower === "rock") {
            console.log(winMessage);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower === "scissors") {
            console.log(loseMessage);
            winner = "computer";
            return winner;
        }

        else {
            console.log(tieMessage);
            return winner = "tie";
        }
     }
    
     else if (playerSelectionLower === "scissors") {

        if (computerSelectionLower === "paper") {
            console.log(winMessage);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower === "rock") {
            console.log(loseMessage);
            winner = "computer";
            return winner;
        }

        else {
            console.log(tieMessage);
            return winner = "tie";
        }
     }
}

function game() {

    /* Controls the game loop
    Does not yet handle invalid input */

    let playerWins = 0;
    let computerWins = 0;

    
    for (i = 1; i <= 5; i++) {
        console.log("Round #" + i)
        playerSelection = prompt ("Rock, paper, or scissors?")
        let winner = playRound(playerSelection, getComputerChoice());

        if (winner === "player") {
            playerWins++;
        }

        else if (winner === "computer") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You win!");
    }
    else if (playerWins < computerWins) {
        console.log("You lose!");
    }
    else {
        console.log("Tie game!");
    }

    console.log("Score: " + playerWins + " to " + computerWins); 

}

game();