const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
let winner;
let outcome;
let hand;
let userScore = 0;
let computerScore = 0;

computerSelection = computerPlay();
userSelection = userPlay();
winner = '';
game()

function game() {
    for (let i = 0; i < 4; i++) {
        if (winner == 'you') {
            userScore++;
        }
        if (winner == 'the computer') {
            computerScore++;
        }
        playRound()
    }
    console.log('User Score: ' + userScore.toString() +':'+'\nComputer Score: ' + computerScore.toString())

}

function computerPlay() {
    return hands[Math.floor(Math.random()*hands.length)];
}

function userPlay() {
    hand = prompt("Enter rock, paper, or scissors");
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
                return userPlay();
            
        }
   
}

function playRound(user, computer) {
    computerSelection = computerPlay();
    userSelection = userPlay();
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
