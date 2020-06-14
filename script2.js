const container = document.querySelector('#container');
let player, 
    cpu, 
    computerSelection,
    playerScore = 0,
    cpuScore = 0;


document.getElementById("rock").addEventListener('click',function(){
    player = moveConversion("rock");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    playRound(player,cpu);
    if (playerScore == 5 || cpuScore == 5){
        displayResults();
        
        playerScore = 0;
        cpuScore = 0;
    }
});
document.getElementById("paper").addEventListener('click',function(){
    player = moveConversion("paper");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    playRound(player,cpu);
    if (playerScore == 5 || cpuScore == 5){
        displayResults();
        
        playerScore = 0;
        cpuScore = 0;
    }
});
document.getElementById("scissor").addEventListener('click',function(){
    player = moveConversion("scissor");
    computerSelection = computerPlay();
    cpu = moveConversion(computerSelection);
    playRound(player,cpu);
    if (playerScore == 5 || cpuScore == 5){
        displayResults();
        
        playerScore = 0;
        cpuScore = 0;
    }
});

function displayResults(){
    const result = document.createElement('p');
    if (playerScore == 5)
            result.textContent="You have won! You: " + playerScore + " CPU: " + cpuScore;
    else if (cpuScore == 5)
            result.textContent ="You have lost. You: " + playerScore + " CPU: " + cpuScore;
    container.appendChild(result);
    const resetButton = document.createElement('button');
    resetButton.textContent="Reset";
    resetButton.style.padding = '10px';
    resetButton.style.fontSize = '14px';
    resetButton.style.marginLeft = '800px';
    container.appendChild(resetButton);
    resetButton.addEventListener("click",reset_score);
}

function displayScore(message){
    const score = document.createElement('p');
    score.textContent=message;
    container.appendChild(score);  
}
function reset_score(){
    window.location.reload();
}

function playRound(playerSelection,computerSelection){
    
    let message;
   if (playerSelection == computerSelection)
        message= "Game is tied";
    if (playerSelection == 1){
        if (computerSelection == 2){
            cpuScore++;
            message= "You've lost. Paper beats rock.";
        }
        if (computerSelection == 3){
            playerScore++;
            message= "You've won! Rock beats scissors.";
        }
    }
    if (playerSelection == 2) {
        if (computerSelection == 3){
            cpuScore++;
            message= "You've lost. Scissor beat paper.";
        }
        if (computerSelection == 1){
            playerScore++;
            message= "You've won! Paper beats rock.";
        }
    }
    if (playerSelection == 3){
        if (computerSelection == 1){
            cpuScore++;
            message= "You've lost. Rock beats scissors.";
        }
        if (computerSelection == 2){
            playerScore++;
            message = "You've won! Scissors beat paper.";
        }
    }
    else if (playerSelection == 10)
            message = "Invalid response.";
    
    displayScore(message);
    
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
function computerPlay(){
    let cpu = Math.floor(Math.random() * 3);
    if (cpu == 0) 
        return "rock";
    if (cpu == 1) 
        return "scissor";
    if (cpu == 2) 
        return "paper";
}