let player, 
    cpu, 
    computerSelection,
    playerScore = 0,
    cpuScore = 0;

document.getElementById("rock").addEventListener('click',function(){
    player = moveConversion("rock");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    console.log(playRound(player,cpu));
    if (playerScore == 5 || cpuScore == 5){
        if (playerScore == 5)
            console.log("You have won! You: " + playerScore + " CPU: " + cpuScore);
        else if (cpuScore == 5)
        console.log("You have lost. You: " + playerScore + " CPU: " + cpuScore);
        playerScore = 0;
        cpuScore = 0;
    }
});
document.getElementById("paper").addEventListener('click',function(){
    player = moveConversion("paper");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    console.log(playRound(player,cpu));
    if (playerScore == 5 || cpuScore == 5){
        if (playerScore == 5)
            console.log("You have won! You: " + playerScore + " CPU: " + cpuScore);
        else if (cpuScore == 5)
        console.log("You have lost. You: " + playerScore + " CPU: " + cpuScore);
        playerScore = 0;
        cpuScore = 0;
    }
});
document.getElementById("scissor").addEventListener('click',function(){
    player = moveConversion("scissor");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    console.log(playRound(player,cpu));
    if (playerScore == 5 || cpuScore == 5){
        if (playerScore == 5)
            console.log("You have won! You: " + playerScore + " CPU: " + cpuScore);
        else if (cpuScore == 5)
        console.log("You have lost. You: " + playerScore + " CPU: " + cpuScore);
        playerScore = 0;
        cpuScore = 0;
    }
});




function computerPlay(){
    let cpu = Math.floor(Math.random() * 3);
    if (cpu == 0) 
        return "rock";
    if (cpu == 1) 
        return "scissor";
    if (cpu == 2) 
        return "paper";
}
function playRound(playerSelection,computerSelection){
   
   if (playerSelection == computerSelection)
        return "Game is tied";
    if (playerSelection == 1){
        if (computerSelection == 2){
            cpuScore++;
            return "You've lost. Paper beats rock.";
        }
        if (computerSelection == 3){
            playerScore++;
            return "You've won! Rock beats scissors";
        }
    }
    if (playerSelection == 2) {
        if (computerSelection == 3){
            cpuScore++;
            return "You've lost. Scissor beat paper. ";
        }
        if (computerSelection == 1){
            playerScore++;
            return "You've won! Paper beats rock.";
        }
    }
    if (playerSelection == 3){
        if (computerSelection == 1){
            cpuScore++;
            return "You've lost. Rock beats scissors.";
        }
        if (computerSelection == 2){
            playerScore++;
            return "You've won!. Scissors beat paper.";
        }
    }
    else if (playerSelection == 10)
            return "Invalid response";
    
}
function moveConversion(move){
    if (move == "rock")
        return 1;
    if (move == "paper")
        return 2;
    if (move == "scissor")
        return 3;
    else 
        return 10;
}

