const hands = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;
let winner;
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
userScoreBoard.textContent = `User: ${userScore}`;
computerScoreboard.textContent = `Computer: ${computerScore}`;

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
    if (userScore == 5) {
        alert('User has won!');
    }
    if (computerScore == 5) {
        alert('computer has won!');
    } else return;
}

function computerPlay() {
    return hands[Math.floor(Math.random()*hands.length)];
}


function playRound(user) {
    userSelection = user;
    computerSelection = computerPlay();
    outCome = checkOutcome();
    if (outCome !== 'tie') {
        winner = outCome;
        currentWinner.textContent = (`${winner} is the winner!`)
        updateScore(winner) 
    } else currentWinner.textContent = 'its a tie!';
    game();
}

function updateScore(winner) {
    if (winner === 'you') {
        userScore++;
        userScoreBoard.textContent = `User: ${userScore}`
    } else {
        computerScore++
        computerScoreboard.textContent = `Computer: ${computerScore}`
    }
}

function checkOutcome() {
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
    else return 'tie';
}
