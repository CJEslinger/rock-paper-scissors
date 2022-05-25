const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
let winner;
let outcome;
let hand;
computerSelection = computerPlay();
userSelection = userPlay();
outcome = playRound();
winner = '';

function game() {
    console.log(outcome);
}

function computerPlay() {
    return hands[Math.floor(Math.random()*hands.length)];
}

function userPlay() {
    hand = prompt("Enter rock, paper, or scissors");
        switch(hand) {
            case 'rock':
                return hand;
            case 'paper':
                return hand;
            case 'scissors':
                return hand;
            default:
                console.log("Invalid, type rock, paper or scissors.");
                return userPlay();
            
        }
   
}

function playRound(user, computer) {
    if (checkIfTie()) {
        console.log("It's a tie!");
    }
    
    else {
        winner = checkWinner();
        console.log(winner + " is the winner!");
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
        return 'you';
    }
    if (userSelection == 'paper' && computerSelection == 'rock') {
        return 'you';
    }
    if (userSelection == 'scissors' && computerSelection == 'paper') {
        return 'you';
    }
    if (computerSelection == 'rock' && userSelection == 'scissors') {
        return 'the computer';
    }
    if (computerSelection == 'paper' &&  userSelection == 'rock') {
        return 'the computer';
    }
    if (computerSelection == 'scissors' &&  userSelection == 'paper') {
        return 'the computer';
    }
}
