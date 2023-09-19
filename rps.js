let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 1000);

    if(randomNum % 3 === 0){
        return "rock";
    } else if(randomNum % 3 === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function displayResults(roundWin){
    const score = document.querySelector('#score');
    score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

    const roundWinner = document.querySelector('#winner');
    roundWinner.textContent = `You chose ${playerChoice} and computer chose
                                ${computerChoice}. Round result is: ${roundWin}`;
}

function checkScore(){
    if(playerScore === 5 || computerScore === 5){
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        displayGameWinner();
    } 
}

function displayGameWinner(){
    const gameWinner = document.querySelector("#results");
    const announceWinner = document.createElement('p');

    if(playerScore > computerScore){
        announceWinner.textContent = "You Win!";
    } else announceWinner.textContent = "Computer Wins!";

    gameWinner.appendChild(announceWinner);
}

function playRound(player){
    let winner;
    computerChoice = getComputerChoice()
    
    if(player === "rock") {
        if (computerChoice === "rock"){
            winner = "tie";
        } else if(computerChoice === "paper"){
            winner = "computer";
            computerScore++;
        } else {
            winner = "player";
            playerScore++;
        }
    } else if(player === "paper"){
        if(computerChoice === "paper"){
            winner = "tie";
        } else if(computerChoice === "rock"){
            winner = "player";
            playerScore++;
        } else {
            winner = "computer";
            computerScore++;
        }
    } else {
        if(computerChoice === "scissors"){
            winner = "tie";
        } else if (computerChoice === "rock"){
            winner = "computer";
            computerScore++;
        } else {
            winner = "player";
            playerScore++;
        }
    }
    
    displayResults(winner);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    playerChoice = button.id; 
    playRound(playerChoice);
    checkScore();
});
});















