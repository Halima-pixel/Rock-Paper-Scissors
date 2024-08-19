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
let ComputerScore = 0;

// Create a new function named playRound that takes the computerChoice and humanChoice as arguments
function playRound(computerChoice, humanChoice) {

    // Make humanChoice parameter case sensitive
       humanChoice = humanChoice.toLowerCase();

     const humanChoice = getComputerChoice();
     const computerChoice = getComputerChoice(;)

       
       // Determine the outcome of the round
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("You win! " + humanChoice +  " beats "  + computerChoice + ".");
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        }


}