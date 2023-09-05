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
function game(){
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
    console.log(playerChoice);

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










