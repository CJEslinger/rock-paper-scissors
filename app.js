const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
let winner;
let outcome;
let hand;
let userScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const currentWinner = document.createElement('h3');
const buttons = document.querySelectorAll('button');
let userScoreBoard = document.querySelector('#user-score');
let computerScoreboard = document.querySelector('#computer-score'); 

resultsDiv.appendChild(currentWinner);
rock.addEventListener('click', (e) => {
    e = 'rock';
    playRound(e)});
paper.addEventListener('click', (e) => {
    e = 'paper';
    playRound(e)});
scissors.addEventListener('click', (e) => {
    e = 'scissors';
    playRound(e)});


function game() {

    playRound()
}

function computerPlay() {
    return hands[Math.floor(Math.random()*hands.length)];
}


function playRound(user) {
    userSelection = user;
    console.log(userSelection);
    computerSelection = computerPlay();
    if (checkIfTie()) {
        currentWinner.textContent = `its a tie!`
        console.log(currentWinner);
        //console.log("It's a tie!");
    }
    
    else {
        winner = checkWinner();
        currentWinner.textContent = (`${winner} is the winner!`)
        //updateScore() 
        console.log(currentWinner);
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
