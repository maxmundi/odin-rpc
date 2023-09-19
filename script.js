/* Get computer choice via random number generation */
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return (arr[Math.floor(Math.random() * 3)]);
}

function postResults(outcome) {
    const results = document.querySelector("#results");
    let compScore = document.querySelector('#computerCount');
    let playerScore = document.querySelector('#playerCount')
    const compWins = document.createElement("h2");
    const playerWins = document.createElement("h2");
    const draw = document.createElement("h2");
    const compGame = document.createElement("h2");
    const playerGame = document.createElement("h2");



    compWins.textContent = "The Computer wins that round.";
    playerWins.textContent = "You win that round!";
    draw.textContent = "It's a draw.";
    compGame.textContent = "Game! The computer wins.";
    playerGame.textContent = "Game! You win!";

    if (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    if (outcome == "draw") {
        results.appendChild(draw);
    } else if (outcome == "computer") {
        compScore.textContent++;
        if (compScore.innerHTML == 5) {
            results.appendChild(compGame);
        } else {
            results.appendChild(compWins);
        }
    } else {
        playerScore.textContent++;
        if (playerScore.innerHTML == 5) {
            results.appendChild(playerGame);
        } else {
            results.appendChild(playerWins);
        }
    }
}

/* Play one round and return the resulting victor */
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice == playerChoice) {
        postResults("draw");
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        postResults("computer");
    } else {
        postResults("player");
    }
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));



/*

function game() {
    let response = prompt("Want to play? (yes/no)");
    if (response == "yes") {
        console.log("Excellent. We'll play to five!")

        let playerScore = 0;
        let computerScore = 0;
        let keepGoing = true;
        while (keepGoing) {
            let outcome = playRound();
            if (outcome == "draw") {
                console.log("Draw!");
            } else if (outcome == "computer") {
                computerScore++;
                console.log("Computer wins that round. Comp " + computerScore + " / You " + playerScore);
                if (computerScore == 5) {
                    console.log("Game complete! The computer wins!");
                    keepGoing = false;
                }
            } else if (outcome == "player") {
                playerScore++;
                console.log("You win that round. Comp " + computerScore + " / You " + playerScore);
                if (playerScore == 5) {
                    console.log("Game complete! You win!");
                    keepGoing = false;
                }
            }
        }
    }
}


*/