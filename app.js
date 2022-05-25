const hand = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return hand[Math.floor(Math.random()*hand.length)];
}

let computerSelection = computerPlay();
playerSelection = prompt("Choose Rock, Paper, or Scissors")

function playRound(computerSelection, playerSelection) {
    
}