// Game object to encapsulate scores and game logic
const game = {
    humanScore: 0,
    computerScore: 0,
  
    getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * choices.length)];
    },
  
    getHumanChoice() {
      while (true) {
        const userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        if (['rock', 'paper', 'scissors'].includes(userChoice)) {
          return userChoice;
        } else {
          alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        }
      }
    },
  
    playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
        console.log("It's a tie!"); 
        return "tie";
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        return "win";
      } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        return "lose";
      }
 
    },
    displayScore() {
        console.log(`Human score: ${game.humanScore}, Computer score: ${game.computerScore}`)
    },
 };
  

 const rockButton = document.getElementById("rock-button");
 const paperButton = document.getElementById("paper-button");
 const scissorsButton = document.getElementById("scissors-button");

 //Get the result elements
 const resultElement = document.getElementById("result");
 const humanScoreElement = document.getElementById("player-score");
 const computerScoreElement = document.getElementById("computer-score")
 const resetButton = document.getElementById("reset");

 rockButton.addEventListener('click', () => {
  const humanChoice = "rock";
  const computerChoice = game.getComputerChoice();
  const result = game.playRound(humanChoice, computerChoice);

  if (result === "win") {
    game.humanScore++;
  } else if (result === "lose") {
    game.computerScore++;
  }

  //Display updated scores
 displayScore();
 checkGameOver();
})

paperButton.addEventListener('click', () => {
  const humanChoice = "paper";
  const computerChoice = game.getComputerChoice();
  const result = game.playRound(humanChoice, computerChoice);

  if (result === "win") {
    game.humanScore++;
  } else if (result === "lose") {
    game.computerScore++;
  }

  // Display updated scores
  displayScore();
  checkGameOver();
})

scissorsButton.addEventListener('click', () => {
  const humanChoice = "scissors";
  const computerChoice = game.getComputerChoice();
  const result = game.playRound(humanChoice, computerChoice);

  if (result === "win") {
    game.humanScore++;
  } else if (result === "lose")
    game.computerScore++;

    // Display updated scores
    displayScore();
    checkGameOver();
})

function displayScore() {
  humanScoreElement.textContent = `Player Score: ${game.humanScore}`;
  computerScoreElement.textContent = ` Computer Score: ${game.computerScore}`;
}

resetButton.addEventListener('click', resetGame)

function checkGameOver() {
  if (game.humanScore === 5) {
    alert("You Win!")
  } else if (game.computerScore === 5) {
    alert("You Lose. Game Over.")
  }
}

function resetGame() {
  game.humanScore = 0;
  game.computerScore = 0;
  humanScoreElement.textContent = `Player Score: 0`;
  computerScoreElement.textContent = `Computer Score: 0`
}
