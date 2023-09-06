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
                                ${computerChoice}. Round result is: ${roundWin}`
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
    
    if((playerScore || computerScore) === 5){
        playerScore == 0;
        computerScore == 0;
    }

    displayResults(winner);
}

/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice;
    let playerChoice;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    switch(playRound(computerChoice, playerChoice)){
        case "computer wins!":
            computerScore++;
            console.log("computer wins! wins this round )-:");
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
        console.log("computer wins! won the game!");
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
button.addEventListener('click', () => {
    playerChoice = button.id; 
    playRound(button.id);
});
});











