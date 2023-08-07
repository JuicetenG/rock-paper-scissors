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
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerInput;
    let playerChoice;

    while((playerScore || computerScore) < 5) {
        let computerChoice = getComputerChoice();
        playerInput = prompt("rock, paper or scissors?");
        playerChoice = playerInput.toLowerCase();

        switch(playRound(computerChoice, playerChoice)){
            case "computer":
                console.log("computer wins");
                computerScore++;
                break;
            
            case "player":
                console.log("you win");
                playerScore++;
                break;

            case "tie":
                console.log("tie");
                break;
        }
    }

    if (computerScore > playerScore){
        console.log("computer won the game");
    } else {
        console.log("you won the game");
    }
}

game();










