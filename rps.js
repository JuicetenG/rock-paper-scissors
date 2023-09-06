let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

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

function getPlayerChoice(){
    return prompt("rock, paper or scissors?").toLowerCase();
}

function playRound(player){
    let winner;
    computerChoice = getComputerChoice()
    
    if(player === "rock") {
        if (computerChoice === "rock"){
            winner = "tie";
        } else if(computerChoice === "paper"){
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if(player === "paper"){
        if(computerChoice === "paper"){
            winner = "tie";
        } else if(computerChoice === "rock"){
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        if(computerChoice === "scissors"){
            winner = "tie";
        } else if (computerChoice === "rock"){
            winner = "computer";
        } else {
            winner = "player";
        }
    }
    
    console.log(player);
    console.log(computerChoice);
    console.log(winner);
    return winner;
}
/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice;
    let playerChoice;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    switch(playRound(computerChoice, playerChoice)){
        case "computer":
            computerScore++;
            console.log("computer wins this round )-:");
            break;
        
        case "player":
            playerScore++;
            console.log("you win this one :-)");
            break;

        case "tie":
            console.log("tie round");
            break;
    }


    if (computerScore > playerScore){
        console.log("computer won the game!");
        console.log("final score: Computer, " + computerScore + "| You, " + playerScore);
    } else if (computerScore < playerScore){
        console.log("you won the game!");
        console.log("final score: Computer, " + computerScore + "| You, " + playerScore);
    } else {
        console.log("tie game");
        console.log("final score: Computer, " + computerScore + "| You, " + playerScore);
    }
}

game();
*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => playRound(button.id));
});








