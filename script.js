/* Get computer choice via random number generation */
function getComputerChoice() {
    let arr = ["rock", "paper", "sciccors"];
    return (arr[Math.floor(Math.random() * 3)]);
}

/* Get a player choice via input */
function getPlayerChoice() {
    let input = "empty";
    let keepGoing = true;
    while (keepGoing) {
        input = prompt("Please type rock, paper, or scissors.").toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
            keepGoing = false;
        } else {
            console.log("Incorrect input. Please try again.");
        }
    }
}

/* Play one round and return the resulting victor */
function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (computerChoice == playerChoice) {
        return "draw";
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        return "computer";
    } else {
        return "player";
    }
}

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
console.log(game());