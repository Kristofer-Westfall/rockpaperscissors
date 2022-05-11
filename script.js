let playerScore = 0;
let computerScore = 0;
let userInput = 0;
let computerSelection = 0;

function computerPlay() {
    computerSelection =  Math.floor(Math.random() * 4) + 1;
    return computerSelection;
}


function userChoice() {
    userInput = prompt("Please enter rock, paper, or scissors.");
    if (userInput == 'rock') {
        userInput = 1;
    } else if(userInput == 'paper') {
        userInput = 2;
    } else {
        userInput = 3;
}
}

function playGame(){
    computerPlay();
    userChoice();
    if (userInput == 1){
        if (computerSelection == 1){
            return('Tie game!!!');
        } else if (computerSelection == 2){
            computerScore++;
            return('Paper beats rock!  You lose!');
        } else {
            playerScore++;
            return('Rock beats scissors!  You win!')
        }
    }
    if (userInput == 2){
        if (computerSelection == 2){
            return('Tie game!!!');
        }else if (computerSelection == 3){
            computerScore++;
            return('Scissors beats paper!  You lose!');
        } else {
            playerScore++;
            return('Paper beats rock!  You win!')
        }
    }
    if (userInput == 3){
        if (computerSelection == 3){
            return('Tie game!!!');
        } else if (computerSelection == 1){
            computerScore++;
            return('Rock beats scissors!  You lose!');
        } else {
            playerScore++;
            return('Scissors beats paper!  You win!')
        }
    }
 }

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playGame());
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

game();