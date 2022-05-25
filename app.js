const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
let winner;
let outcome;
computerSelection = computerPlay();
userSelection = userPlay();
outcome = playRound();
winner = '';

function computerPlay() {
    return hands[Math.floor(Math.random()*hands.length)];
}

function userPlay() {
    let hand = prompt("Enter rock, paper, or scissors");
    if (typeof hand === 'string') {
        hand = hand.toLowerCase();
        switch(hand) {
            case 'rock':
                return hand;
            case 'paper':
                return hand;
            case 'scissors':
                return hand;
            default:
                console.log("Invalid, type rock, paper or scissors.");
                userPlay();
        }
    }
}

function playRound(user, computer) {
    if (checkIfTie()) {
        return "It's a tie!";
    }
    
    else {
        checkWinner();
        return winner + "Winner!";
    }

}

function checkIfTie() {
    if (userSelection == computerSelection) {
        return true;
    }

    else {
        return false;
    }
}

function checkWinner() {
    if (userSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'you';
    }
    if (userSelection == 'paper' && computerSelection == 'rock') {
        winner = 'you';
    }
    if (userSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'you';
    }
    if (computerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'the computer';
    }
    if (computerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'the computer';
    }
    if (computerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'the computer';
    }
}
