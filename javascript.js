
const buttons = document.querySelectorAll('button');
const resultsDisplay = document.querySelector('#results');
const score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;
let numRounds = 0;


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let winner = playRound(btn.textContent, getComputerChoice());

        if (numRounds === 0) {
            playerScore = 0;
            computerScore = 0;
        }

        if (winner === "player") {
            playerScore++;
        }
        else if (winner === "computer") {
            computerScore++;
        }

      
        score.textContent = "Score: " + playerScore + " to " + computerScore;

        numRounds++;

        if (playerScore === 5 || computerScore === 5) {

            let gameOverMessage = "";

            if (playerScore > computerScore) {
                gameOverMessage = "Game over, you win!";
            }
            else if (playerScore < computerScore) {
                gameOverMessage = "Game over. You lose :(";
            }
    
            const gameOver = document.createElement('h2');
            gameOver.textContent = gameOverMessage;
            resultsDisplay.appendChild(gameOver);
            numRounds = 0;
        }
        
    });
});





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
    + computerSelection ;

    let loseMessage = "You Lose! " + computerSelection + " beats " 
    + playerSelection; 

    let tieMessage = "Tie round!"

    let winner = "";

     if (playerSelectionLower === "rock") {
        
        if (computerSelectionLower === "scissors") {
            const result = document.createTextNode(winMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower == "paper") {
            const result = document.createTextNode(loseMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "computer";
            return winner;
        }

        else {
            const result = document.createTextNode(tieMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            return winner = "tie";
        }
     }

     else if (playerSelectionLower === "paper") {

        if (computerSelectionLower === "rock") {
            const result = document.createTextNode(winMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower === "scissors") {
            const result = document.createTextNode(loseMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "computer";
            return winner;
        }

        else {
            const result = document.createTextNode(tieMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            return winner = "tie";
        }
     }
    
     else if (playerSelectionLower === "scissors") {

        if (computerSelectionLower === "paper") {
            const result = document.createTextNode(winMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "player";
            return winner;
        }

        else if (computerSelectionLower === "rock") {
            const result = document.createTextNode(loseMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            winner = "computer";
            return winner;
        }

        else {
            const result = document.createTextNode(tieMessage);
            const lineBreak = document.createElement('br');
            resultsDisplay.appendChild(result);
            resultsDisplay.appendChild(lineBreak);
            return winner = "tie";
        }
     }
}

function game() {

   

}

game();