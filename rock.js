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
// 