let player, cpu
const playerSelection = "rock"
const computerSelection = computerPlay()

// rock = 1 | paper = 2 | scissor = 3
player = moveConversion(playerSelection)
cpu = moveConversion(computerSelection)

console.log("Warm up match!")
console.log(playRound(player,cpu))
game()



function computerPlay(){
    let cpu = Math.floor(Math.random() * 9)
    if (cpu < 3) 
        return "rock"
    if (cpu >= 3 && cpu < 6) 
        return "scissor"
    if (cpu >= 6 && cpu < 9) 
        return "paper"
}

function playRound(playerSelection,computerSelection){
   
   if (playerSelection == computerSelection)
        return "Game is tied"
    if (playerSelection == 1){
        if (computerSelection == 2)
            return "You've lost. Paper beats rock."
        if (computerSelection == 3)
            return "You've won! Rock beats scissors"
    }
    if (playerSelection == 2) {
        if (computerSelection == 3)
            return "You've lost. Scissor beat paper. "
        if (computerSelection == 1)
            return "You've won! Paper beats rock."
    }
    if (playerSelection == 3){
        if (computerSelection == 1)
            return "You've lost. Rock beats scissors."
        if (computerSelection == 2)
            return "You've won!. Scissors beat paper."
    }
    else if (playerSelection == 10)
            return "Invalid response"

    
}
function moveConversion(move){
    move.toLowerCase
    if (move == "rock")
        return 1
    if (move == "paper")
        return 2
    if (move == "scissor")
        return 3
    else 
        return 10
}

function game(){
    let playerSelection;
    let cpuSelection;
    let i = 0;
    console.log("Alright alright best of 5")
    for (i = 0; i < 5; i++){
        playerSelection = prompt("Please enter rock, paper, or scissor")
        playerSelection = moveConversion(playerSelection)
        cpuSelection=computerPlay()
        cpuSelection=moveConversion(cpuSelection)
        console.log(playRound(playerSelection,cpuSelection))
    }
    
}