
let computerChoice = getComputerChoice();
let playerInput = prompt("Rock, paper, or Scissors?");
let playerScore = 0;
let computerScore = 0;
let playerChoice = playerInput.toLowerCase();

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0){
        return "rock";
    } else if(randomNum === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computer, player){
    let winner;
    
    if(player === "rock") {
        if (computer === "rock"){
            winner = "tie";
        } else if(computer === "paper"){
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if(player === "paper"){
        if(computer === "paper"){
            winner = "tie";
        } else if(computer === "rock"){
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        if(computer === "scissors"){
            winner = "tie";
        } else if (computer === "rock"){
            winner = "computer";
        } else {
            winner = "player";
        }
    }

    return winner;
}










