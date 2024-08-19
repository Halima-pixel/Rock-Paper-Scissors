function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    //Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Return the choice at the generated index
    return choices[randomIndex];
}


// Write a new function to get humanChoice
function getHumanChoice() {
    //prompt user to enter their choice
    let userChoice = prompt("Enter you choice (rock, paper, or Scissors):").toLowerCase();

    // Validate user input
    const validChoices = ['rock', 'paper', 'scissors'];
    if (validChoices.includes(userChoice)) {
        return userChoice;
    } else {
        alert("Invalid choice. Please enter 'rock, 'paper', or 'scissors'.");
        return getHumanChoice(); // Recursive call to re-prompt the user
    }
}

// Create variables to keep track of the players score
// Create two new variables named humanScore and ComputerScore in the global scope
// Initialize those variables with the value of 0

let humanScore = 0;
let computerScore = 0;

// Create a new function named playRound that takes the computerChoice and humanChoice as arguments
function playRound(humanChoice,computerChoice) {

    // Make humanChoice parameter case sensitive
        humanChoice = humanChoice.toLowerCase();

    // Determine the outcome of the round
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win! " + humanChoice +  " beats "  + computerChoice + ".");
            humanScore++; // Increment humanScore
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++; // Increment computerScore;
        }
        
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

// Write a function named playGame that calls playRound to play 5 rounds
 
function playGame() {
    for (let i = 0; i < 5; i++){
        const humanChoice = prompt("Enter rock, paper, or scissors:");
        const computerChoice = getComputerChoice();
        console.log(`Round $(i + 1)`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore){
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("The game is a tie!")
    }
    
}

playGame();

