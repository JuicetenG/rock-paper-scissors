const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
const roundWinner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

const buttons = document.querySelectorAll('div button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    playerChoice = button.id; 
    playRound(playerChoice);

});
});

const restartGame = document.querySelector('#newGame');
restartGame.addEventListener('click', refreshPage);

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
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    roundWinner.textContent = `You chose ${playerChoice} and computer chose
                                ${computerChoice}. ${roundWin}`;
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
    if(playerScore > computerScore){
        roundWinner.textContent = `You chose ${playerChoice} and computer chose
        ${computerChoice}. You win the game!`;
    } else roundWinner.textContent = `You chose ${playerChoice} and computer chose
    ${computerChoice}. Computer wins the game!`;
}

function refreshPage(){
    location.reload();
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
    
    if(winner === "player") displayResults("You Win the round!"); 
    else if (winner === "computer") displayResults("Computer wins the round!");
    else displayResults("Tie Round!");

    checkScore();
}

















