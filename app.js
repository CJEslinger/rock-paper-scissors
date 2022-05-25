const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
computerSelection = computerPlay();
userSelection = userPlay();

game();

function game() {
    playRound(computerSelection, userSelection);
    console.log(userSelection);
    console.log(computerSelection);
}

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
        console.log("It's a tie!");
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